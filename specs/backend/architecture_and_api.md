# Backend Architecture & API Specifications (Next.js App Router)

## 1. Architectural Overview
- **Framework**: **Next.js (App Router)** Serverless Route Handlers (`app/api/...`).
- **Deployment**: Vercel Serverless Functions with zero configuration.
- **Data Strategy (Current Scope)**:
  - **Catalog & Machinery**: High-performance typed dataset in `data/products.ts` and `data/machinery.ts` parsed from the 4 asset folders. Served directly to Server Components for instant page loads and SEO.
  - **Quote Requests & Enquiries**: Handled via Serverless Route Handlers that validate input with Zod, upload files to Cloudinary, and immediately dispatch transactional emails via Gmail SMTP (Nodemailer).
- **Security & Envelopes**:
  - Unified JSON response structure:
    - Success: `{ "success": true, "data": { ... }, "message": "Quote request submitted successfully." }`
    - Error: `{ "success": false, "message": "Validation failed.", "errors": [ ... ] }`

---

## 2. Active Endpoints & Payload Specifications

### 2.1 B2B Quotation Handler (`POST /api/quotes`)
- **Purpose**: Processes customer quote submissions from `/quote`.
- **Zod Validation Schema**:
  ```typescript
  export const QuoteRequestSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    companyName: z.string().min(2, "Company / Institution name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(7, "Valid phone number is required"),
    country: z.string().default("India"),
    productCategory: z.enum([
      "security-uniforms",
      "premium-formal",
      "premium-tshirts",
      "custom-manufacturing"
    ]),
    productSku: z.string().optional(),
    estimatedQuantity: z.number().int().min(10, "Minimum order quantity is 10 units"),
    targetDate: z.string().optional(),
    fabricSpecifications: z.string().optional(),
    customizationNotes: z.string().optional(),
    attachmentUrls: z.array(z.string().url()).optional().default([])
  });
  ```
- **Execution Flow**:
  1. Validate incoming request body against `QuoteRequestSchema`.
  2. If invalid, return HTTP `400` with detailed validation error array.
  3. Trigger `lib/email.ts`:
     - Send branded receipt confirmation to customer email.
     - Send detailed notification to Prolink sales team (`theswaque@gmail.com` or configured recipient) with complete client requirements and Cloudinary attachment links.
  4. Return HTTP `200` with confirmation reference ID.

---

### 2.2 Contact Inquiry Handler (`POST /api/enquiries`)
- **Purpose**: Processes general inquiries from `/contact`.
- **Zod Validation Schema**:
  ```typescript
  export const ContactEnquirySchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(7, "Valid phone is required"),
    subject: z.string().min(3, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters")
  });
  ```
- **Execution Flow**:
  1. Validate payload.
  2. Dispatch notification email to Prolink sales team via Nodemailer.
  3. Return HTTP `200` with acknowledgment.

---

### 2.3 Cloudinary File Upload (`POST /api/upload`)
- **Purpose**: Allows clients to upload tech packs, logos, or sample sketches from the `/quote` form.
- **Allowed MIME Types**: `image/jpeg`, `image/png`, `image/webp`, `application/pdf`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`.
- **Max File Size**: 15 MB.
- **Returns**: Secure Cloudinary asset URL (`{ "success": true, "url": "https://res.cloudinary.com/..." }`).

---

## 3. Deferred / Omitted Backend Components
- **Admin Authentication & Admin CRUD**: Marked **ON HOLD / DEFERRED**. Do NOT build admin login, JWT, or database-backed admin CRUD routes until explicitly requested.
- **Payment Processing**: **OMITTED**. No payment gateways, cards, or transaction tracking. Purely a B2B enquiry and quote engine.

---

## 4. Rate Limiting & Operational Security
- **Rate Limiting**: Apply simple IP rate limiting (e.g. max 5 quote submissions per IP per 10 minutes) on `/api/quotes` and `/api/enquiries` to prevent spam.
- **Environment Variables Required**:
  - `SMTP_USER` (e.g., `theswaque@gmail.com`)
  - `SMTP_PASS` (Google App Password)
  - `NOTIFICATION_RECEIVER_EMAIL`
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`
