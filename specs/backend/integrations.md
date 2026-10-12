# Third-Party Integrations & Deployment Specifications

## 1. Third-Party Services Overview
Per the project agreement, the following third-party integrations are required:

| Service | Recommended Provider | Scope & Purpose |
| :--- | :--- | :--- |
| **Domain Name** | GoDaddy / Namecheap | Production DNS routing, SSL certificates, custom subdomains. |
| **Hosting & Cloud Server** | Vercel or Render | Frontend hosting (Vercel) / Node.js or Python backend (Render/Vercel). |
| **Email / SMTP** | Gmail SMTP | Transactional emails: inquiry confirmations, quotation notifications. |
| **File Storage / CDN** | Cloudinary | Storing tech packs, quotation attachments, and catalog images. |

*Payment Gateway*: **None.** Payment systems are omitted. The website is purely an enquiry and quotation platform.

---

## 2. Integration Details

### 2.1 Media Storage — Cloudinary
- **Use Cases**:
  - Customer tech packs, design files, sample sketches uploaded during Quote Request.
  - Admin catalog uploads for products, categories, and manufacturing gallery.
- **Implementation**:
  - Secure uploads via signed upload presets or direct backend API proxy.
  - Image optimization, dynamic resizing for responsive display (`f_auto`, `q_auto`).
- **Configuration Keys**:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`

### 2.2 Email & Notifications — Gmail SMTP
- **Use Cases**:
  1. **Customer Confirmation**: Immediate receipt acknowledgement sent to customer upon quote/enquiry submission with reference ID.
  2. **Admin Alerts**: Immediate notification email dispatched to the Prolink sales team with submission summary and uploaded tech pack links.
  3. **Admin Auth**: Password reset and security notifications.
- **Implementation**:
  - Nodemailer or standard SMTP client using Google App Passwords.
  - HTML email templates with company branding and proposal summary.
- **Configuration Keys**:
  - `SMTP_HOST` (`smtp.gmail.com`)
  - `SMTP_PORT` (`465` or `587`)
  - `SMTP_USER`
  - `SMTP_PASS` (Google App Password)
  - `NOTIFICATION_RECEIVER_EMAIL`

### 2.3 Cloud Hosting & Deployment
- **Unified Full-Stack Deployment**: Next.js App Router deployed directly to **Vercel** with automatic CI/CD from GitHub.
- Edge caching for public marketing & catalog pages.
- Serverless Route Handlers executing quote requests, Cloudinary uploads, and Gmail SMTP dispatches.
