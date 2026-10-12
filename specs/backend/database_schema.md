# Database Schema Specifications

## 1. Overview
The database stores product catalogs, categories, services, client submissions, admin accounts, and media references. Suitable for relational (PostgreSQL/MySQL) or document-oriented (MongoDB) stores.

---

## 2. Core Entities & Data Dictionaries

### 1. `AdminUsers`
- `id`: UUID / Primary Key
- `name`: String (Admin Name)
- `email`: String (Unique)
- `password_hash`: String (Argon2 / BCrypt hash)
- `role`: Enum (`SUPER_ADMIN`, `MANAGER`, `EDITOR`)
- `created_at`, `updated_at`: Timestamps

### 2. `Categories`
- `id`: UUID / Primary Key
- `name`: String (Pre-seeded with: `Security Uniforms`, `Corporate & Executive Wear`, `Knits & T-Shirts`, etc.)
- `slug`: String (Unique, URL-friendly)
- `description`: Text
- `parent_id`: Nullable UUID (Self-referencing for hierarchical subcategories)
- `image_url`: String (Cloudinary URL)
- `display_order`: Integer
- `is_active`: Boolean (Default: true)

### 3. `Products`
- `id`: UUID / Primary Key
- `category_id`: Foreign Key (`Categories.id`)
- `title`: String (e.g., "Heavy-Duty Security Shirt", "Executive Premium Formal Shirt", "Premium 180-200 GSM Combed Cotton T-Shirt")
- `slug`: String (Unique)
- `sku`: String (Nullable)
- `summary`: Text (Short description)
- `description`: Text (Detailed markdown / rich text)
- `specifications`: JSON / Key-Value Map
  - For Security Shirts: `{ "fabric": "Poly-Cotton 65/35", "features": ["Epaulets", "Flap Pockets", "Badge Loop"], "colors": [...] }`
  - For Premium Formal: `{ "fabric": "100% Giza/Egyptian Cotton", "weave": "Twill/Poplin", "collar": "Spread", "wrinkle_resistant": true }`
  - For Premium T-Shirts: `{ "gsm": "180-200", "composition": "100% Combed Cotton", "finish": "Biowash", "knit": "Single Jersey / Pique" }`
- `images`: Array of Strings (Cloudinary URLs or local spec image references)
- `source_spec_folder`: String (Nullable: `security_shirt`, `premium_formal`, or `premium_180-200gsm_tshirt`)
- `is_featured`: Boolean (Default: false)
- `is_active`: Boolean (Default: true)
- `created_at`, `updated_at`: Timestamps

### 4. `Services`
- `id`: UUID / Primary Key
- `title`: String (e.g., "Custom Design & Sampling", "Bulk Manufacturing")
- `slug`: String (Unique)
- `description`: Text
- `features`: Array of Strings
- `cover_image_url`: String (Cloudinary URL)
- `display_order`: Integer

### 5. `Enquiries` (General & Direct Inquiries)
- `id`: UUID / Primary Key
- `customer_name`: String
- `company_name`: String (Nullable)
- `email`: String
- `phone`: String
- `country`: String
- `subject`: String
- `message`: Text
- `status`: Enum (`NEW`, `IN_REVIEW`, `RESPONDED`, `CLOSED`)
- `created_at`: Timestamp

### 6. `QuoteRequests` (Detailed B2B Quotes)
- `id`: UUID / Primary Key
- `customer_name`: String
- `company_name`: String
- `email`: String
- `phone`: String
- `country`: String
- `product_category`: String
- `estimated_quantity`: Integer
- `target_date`: Date (Nullable)
- `specifications_notes`: Text
- `attachment_urls`: Array of Strings (Cloudinary URLs for tech packs, sketches, logos)
- `status`: Enum (`NEW`, `IN_REVIEW`, `QUOTED`, `NEGOTIATING`, `WON`, `DECLINED`)
- `internal_notes`: Text (Nullable, for admin staff)
- `quoted_amount`: Decimal (Nullable)
- `created_at`, `updated_at`: Timestamps

### 7. `GalleryItems`
- `id`: UUID / Primary Key
- `title`: String
- `category_tag`: String (e.g., "Factory", "Machinery", "Quality", "Showcase")
- `media_url`: String (Cloudinary URL)
- `cloudinary_public_id`: String
- `created_at`: Timestamp

### 8. `Settings`
- `key`: String (Primary Key, unique identifier)
- `value`: JSON (Structured values: contact emails, addresses, social links, meta descriptions)
- `updated_at`: Timestamp
