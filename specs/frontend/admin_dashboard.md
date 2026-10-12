# Admin Dashboard Specifications

> [!WARNING]
> **STATUS: ON HOLD / DEFERRED**
> Do NOT implement the Admin Dashboard at this time. Development of all admin panel screens, admin authentication, and back-office modules is paused until explicitly requested by the user.

## 1. Overview (Deferred)
The Admin Dashboard provides **Prolink** administrators with an intuitive, secure back-office portal to manage catalog items, customer inquiries, quotation requests, media assets, and system settings.

- **Target Audience**: Internal sales, operations, and inventory management staff.
- **Design Principles**: Clean data-dense layout, sidebar navigation, responsive desktop/tablet optimization, real-time status badges, search and filter bars, batch operations.

---

## 2. Screen Breakdown & Functional Requirements

### 1. Dashboard (Overview & Analytics)
- Key performance metrics: Total Enquiries, Pending Quotes, Active Catalog Products, New Customers this month.
- Recent Activity Feed: Latest incoming quotation requests and status changes.
- Quick action buttons: Add New Product, Review Pending Quotes, Upload Gallery Media.

### 2. Product Management
- Paginated table of all garments and uniforms with search, category filter, and status filter (Active/Draft/Archived).
- Pre-configured product creation flows for core flagship lines:
  - **Security Shirts**: Specialized fields for epaulets, pocket styles, badge loops, and fabric blends.
  - **Premium Formal**: Specialized fields for collar styles, cuff styles, sleeve lengths, and weave counts.
  - **Premium T-Shirts**: Specialized fields for GSM value (180–200 GSM), knit type (pique/single jersey), and biowash options.
- Form/Modal for Create/Edit:
  - Product Name, SKU, Category, Slug.
  - Short and Long Descriptions.
  - Technical Specifications table (Fabric, GSM, Stitching, Sizes, Colors).
  - Image Uploader (Direct Cloudinary upload with thumbnail previews and sorting, supporting ingested catalog scans).
  - Featured flag toggle.

### 3. Category Management
- Hierarchical tree or table of categories and subcategories:
  - Default primary categories pre-seeded:
    1. `Security Uniforms` (Default sub-item: *Security Shirt*)
    2. `Corporate & Executive Wear` (Default sub-item: *Premium Formal*)
    3. `Knits & T-Shirts` (Default sub-item: *Premium (180-200 GSM) T-Shirt*)
- Create, rename, reorder (display order), upload category cover banner, and toggle visibility.

### 4. Service Management
- Manage manufacturing services displayed on the customer site (e.g., Custom Design, Sampling, Fabric Sourcing, Bulk Stitching).
- Fields: Title, Slug, Description, Features list, Icon/Cover image, Sort order.

### 5. Enquiry Management
- Central repository for all customer inquiries and quotation requests.
- Filter by status: `New`, `In Review`, `Quoted`, `Negotiating`, `Won/Converted`, `Closed/Declined`.
- Detail modal / View:
  - Customer profile, company, contact details, country.
  - Requested products, quantity, target delivery timeline.
  - Downloadable uploaded tech packs / sample images.
  - Internal notes & status transition timeline.
  - Quick action: "Send Email Response / Quotation" (via SMTP).

### 6. Customer Management
- Directory of B2B clients and prospect accounts.
- Fields: Contact name, Company, Email, Phone, Country, Total Enquiries submitted, Lifetime status.
- Export customer records to CSV/Excel.

### 7. Gallery Management
- Media repository for factory photos, manufacturing process reels, quality check images, and event showcases.
- Multi-file image uploader with automatic Cloudinary storage.
- Tagging by category (e.g., "Factory Floor", "Embroidery Machine", "Quality Inspection").

### 8. Bulk Order Management
- Dedicated pipeline to track high-volume and institutional tenders.
- Milestone tracking: Requirement Scoping -> Fabric Sourcing -> Pre-production Sample Approval -> Bulk Production -> Dispatch.

### 9. Settings
- Company info: Office address, phone numbers, WhatsApp link, inquiry recipient emails.
- SMTP credentials & test email sender trigger.
- Admin user management: Add/edit admin users, change passwords, role permissions.
- SEO Meta tags configuration for key website pages.
