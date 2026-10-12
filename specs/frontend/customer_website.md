# Customer Website: Comprehensive Page-by-Page Design Specifications

## 1. Design System & Global Layout Rules
The entire platform must strictly adhere to the locked design tokens from `styles.css`:
- **Palette**: Ivory (`#fbf6ec`) base background, Sand (`#f3e9d6`) section/card containers, Maroon (`#5c0f1f`) & Deep Maroon (`#3a0812`) primary brand actions, Gold (`#b8893b`) & Soft Gold (`#e3c98f`) luxury accents, Ink (`#2a1a16`) body text, Line (`#e2d3b8`) borders.
- **Strict Rule on Colors**: **Do NOT use blue** as the website theme, even though some scanned catalog pages have blue backgrounds.
- **Strict Fluid Responsiveness & Unit Rules (NO HARDCODED `px`)**:
  - **No Fixed Pixel Layouts**: Never hardcode fixed pixel (`px`) measurements for component widths, heights, margins, paddings, or font sizes.
  - **Relative & Fluid Units Only**: Use `rem` for base spacing, `clamp()` and `vw` for scalable typography, and `%`/`min()` for containers (e.g. `width: min(70rem, 100% - 2.5rem)`).
  - **Seamless Cross-Device Adaptation**: The site must dynamically adjust to mobile viewports (360px–430px), tablets (768px–1024px), laptops (1280px–1440px), and wide monitors (1920px+) with zero horizontal scroll overflow.
  - **Fluid Typography Formula**: Headings must use fluid clamp functions (e.g. `clamp(1.75rem, 4vw, 3rem)`).
- **Global Header**: Fixed top bar (`--header-h: 68px`) with Prolink logo (`images/logo.jpg`), multi-page navigation links (`Collections`, `Manufacturing`, `About Us`, `Contact`), and a gold/maroon pill CTA button **"Request a Quote"**. Becomes frosted glass (`backdrop-filter: blur(10px)`) upon scrolling.
- **Global Footer**: Comprehensive footer with Prolink branding, factory address, contact info, quick links to all categories, compliance badges, and copyright.

---

## 2. Page-by-Page Detailed Design & UI Breakdown

### Page 1: Homepage (`/`)
- **Section 1: Hero Showcase**
  - **Visuals**: Split layout or full-width luxury hero with subtle dark maroon overlay.
  - **Copy**: *"Premier Garment Manufacturing & Uniform Solutions — Engineered in India, Trusted Worldwide."*
  - **Eyebrow**: Gold tracked label: *"PRECISION CRAFTSMANSHIP & BULK PRODUCTION"*.
  - **CTAs**: Primary pill button *"Explore Collections"* (scrolls to Section 2) & Secondary ghost button *"Request a Quote"* (links to `/quote`).
- **Section 2: Flagship Collections Preview**
  - Three high-impact card showcases with hover elevation:
    1. **Security Uniforms**: Photo from `specs/frontend/security_shirt`, badges: *"Durable Fabric • Modern Fit • Breathable"*. Link -> `/products/security-uniforms`.
    2. **Premium Formal**: Photo from `specs/frontend/premium_formal`, badges: *"Executive Styling • High Thread Count • Wrinkle Resistant"*. Link -> `/products/premium-formal`.
    3. **Premium 180–200 GSM T-Shirts**: Photo from `specs/frontend/premium_180-200gsm_tshirt`, badges: *"180–200 GSM • 100% Combed Cotton • Biowash"*. Link -> `/products/premium-tshirts`.
- **Section 3: Factory Machinery & Sewing Infrastructure (MANDATORY 3RD SECTION)**
  - **Heading**: *"Industrial Production Capacity & Advanced Machinery"*
  - **Eyebrow**: *"DIRECT FROM THE FACTORY FLOOR"*
  - **Content**: Visual grid featuring representative photos from `specs/frontend/sewing_machine/` showcasing high-speed commercial sewing machines, automated stitching lines, and finishing stations.
  - **Metric Counters**: Monthly Capacity (e.g. 50,000+ pieces), Strict AQL 2.5 Quality Standards, Export Across India & Global Markets.
  - **CTA**: Pill button *"View Full Factory Infrastructure"* -> links to `/manufacturing`.
- **Section 4: Why Choose Prolink (Manufacturing Capabilities)**
  - 4-column value prop grid: Custom Tech Pack Execution, Flexible MOQs for Institutions, End-to-End Sampling, On-Time Dispatch.
- **Section 5: High-Conversion CTA Banner**
  - Deep maroon background with gold borders: *"Ready to discuss your bulk garment or customized uniform requirements?"* -> Pill button *"Get Custom Quotation"*.

---

### Page 2: Security Uniforms Catalog (`/products/security-uniforms`)
- **Breadcrumbs**: Home > Products > Security Uniforms.
- **Header Banner**: Sand background with title *"Institutional & Security Uniforms"*, subtitle: *"Durable, smart-fit security uniforms engineered for demanding duty."*
- **Filter & Toolbar**:
  - Filter by Fabric: Poly-Cotton 65/35, Heavy Drill, Ripstop.
  - Filter by Sleeve: Full Sleeve, Half Sleeve.
  - Filter by Color: Classic Navy, Khaki, Black, Steel Grey.
- **Product Grid**:
  - Cards populated from `specs/frontend/security_shirt/` (e.g., *Heavy-Duty Patrol Shirt*, *Tactical Guard Uniform*, *Executive Security Blazer*).
  - Each card shows: High-res photo, SKU, key tags (*Epaulets*, *Flap Pockets*, *Badge Tab*), and button *"View Details & Specs"*.

---

### Page 3: Security Uniform Product Detail (`/products/security-uniforms/[slug]`)
- **Layout**: 2-Column layout (Left: Gallery, Right: Specifications & Quote Action).
- **Left Column (Image Gallery)**:
  - Main high-resolution image with hover zoom.
  - Thumbnail carousel showing front, back, stitch details, and epaulets.
- **Right Column (Specs & Customization)**:
  - Title, Category tag, and Quality badges (*Color Fastness: 4.5+*, *Breathable Fabric*).
  - **Technical Specifications Table**:
    - Fabric Composition: 65% Polyester / 35% Cotton
    - Weave Type: Heavy Oxford / Drill
    - Pockets: Dual chest pleated flap pockets with pen slot
    - Reinforcements: Double-needle shoulder & armhole stitching
    - Available Sizes: 36 (S) to 48 (4XL)
  - **Available Color Swatches**: Navy Blue, Khaki, Midnight Black, Slate Grey.
  - **Primary Action**: Prominent button: **"Request Quote for this Uniform"** -> routes to `/quote?item=security-shirt&sku=SEC-01`.

---

### Page 4: Premium Formal Catalog (`/products/premium-formal`)
- **Breadcrumbs**: Home > Products > Premium Formal.
- **Header Banner**: Editorial header: *"Corporate & Executive Formal Wear"*.
- **Filter Toolbar**:
  - Filter by Garment: Formal Shirts, Formal Trousers, Suits/Blazers.
  - Filter by Collar Style: Cutaway, Semi-Spread, Button-Down, Mandarin.
  - Filter by Fabric: 100% Giza Cotton, Cotton-Rich Twill, Wrinkle-Free Poplin.
- **Product Grid**:
  - Cards populated from `specs/frontend/premium_formal/` displaying executive shirts and tailored trousers.
  - Card features: Crisp photography, collar detail tags, and link to detail page.

---

### Page 5: Premium Formal Product Detail (`/products/premium-formal/[slug]`)
- **Layout**: 2-Column luxury presentation.
- **Left Column**: High-resolution fabric texture zoom showing weaves and stitching finish.
- **Right Column**:
  - Product title (e.g., *Executive Egyptian Cotton Formal Shirt*).
  - Corporate branding options: Custom chest embroidery, branded engraved buttons, contrast collar inner tape.
  - Technical specs: Thread count (80s, 100s 2-ply), shrinkage resistance (< 2%), collar fusing grade.
  - Size and fit guide (Slim Fit, Regular Fit, Custom Corporate Tailoring).
  - **CTA**: **"Request Corporate Quote"** -> routes to `/quote?item=premium-formal`.

---

### Page 6: Premium T-Shirts Catalog (`/products/premium-tshirts`)
- **Breadcrumbs**: Home > Products > Premium T-Shirts.
- **Header Banner**: *"Premium Knits & T-Shirts (180–200 GSM)"*.
- **Filter Toolbar**:
  - Filter by GSM: **180 GSM** (Light-Midweight), **200 GSM** (Heavyweight Luxury).
  - Filter by Silhouette: Polo Collar (Pique), Crew Neck, V-Neck, Raglan.
  - Filter by Treatment: Biowash, Silicone Softened, Anti-Pilling.
- **Product Grid**:
  - Cards populated from `specs/frontend/premium_180-200gsm_tshirt/` showing vibrant polo and round-neck shirts.

---

### Page 7: Premium T-Shirt Product Detail (`/products/premium-tshirts/[slug]`)
- **Layout**: Interactive 2-Column customizer view.
- **Interactive Controls**:
  - **GSM Selector Toggle**: Switch between `180 GSM` and `200 GSM` with live technical explanation of weight and drape.
  - **Collar & Cuff Inspector**: Details on 1x1 heavy ribbed collar that resists curling.
  - **Customization Options**: Screen printing, high-density print, DTF, or fine thread embroidery.
- **Technical Specs Table**: 100% Super Combed Cotton, Reactive Dyeing, Pre-Shrunk.
- **CTA**: **"Request Bulk T-Shirt Quote"** -> routes to `/quote?item=premium-tshirt&gsm=180-200`.

---

### Page 8: Manufacturing & Machinery Showcase (`/manufacturing`)
- **Hero**: *"Manufacturing Capabilities & Advanced Machinery"*
- **Machinery Photo Gallery**:
  - Interactive grid displaying the photos from `specs/frontend/sewing_machine/`.
  - Categories: *Single-Needle Lockstitch*, *Overlock 4/5-Thread*, *Flatlock Machines*, *Buttonholing & Button Attach*, *Heavy-Duty Uniform Stitching*, *Vacuum Ironing & Steam Finishing Stations*.
- **Factory Workflow Step-by-Step**:
  1. Pattern Making & CAD Marker Planning
  2. Precision Cutting Line
  3. Semi-Automated Stitching & Assembly
  4. 100% In-Line & End-Line Quality Inspection
  5. Steam Pressing & Vacuum Ironing
  6. Barcoded Export Packaging & Dispatch
- **Plant Credentials**: Monthly output metrics, skilled workforce count, compliance with labor and safety standards.
- **CTA**: *"Inquire for Contract Manufacturing"* -> routes to `/quote?type=bulk-manufacturing`.

---

### Page 9: About Us (`/about`)
- **Mission & Vision**: Providing durable, precision-engineered uniforms and apparel across India and international markets.
- **Production Facility**: Infrastructure details, factory location, technology stack.
- **Quality Assurance**: AQL inspection standards, tensile and tear strength testing, colorfastness certifications.
- **Export Capabilities**: Port clearance handling, customs compliance, international packaging.

---

### Page 10: Multi-Step Interactive Quote Request (`/quote`)
- **Smart Pre-fill**: If navigated from a product page, the URL parameters (`?item=security-shirt&sku=SEC-01`) automatically pre-fill the product selection!
- **Wizard Steps**:
  - **Step 1: Contact & Company Profile**: Name, Business/Institution Name, Email, Phone, City & Country.
  - **Step 2: Garment Category & Quantity**: Select category (Security Uniform, Formal Wear, T-Shirt, Custom) and estimated quantity tier (50–100, 100–500, 500–2,000, 2,000+ pcs).
  - **Step 3: Technical Preferences**: Fabric blend, GSM choice, embroidery/printing requirements, target delivery date.
  - **Step 4: Tech Pack & File Dropzone**: Drag-and-drop uploader for specification sheets, sketches, company logos (uploaded to Cloudinary).
  - **Step 5: Review & Instant Submit**:
    - Dispatches instant branded confirmation email to customer via Gmail SMTP.
    - Alerts the Prolink sales team with submission summary and download links.

---

### Page 11: Contact Us (`/contact`)
- **Left Column**: Direct Contact Details (Registered factory address, phone numbers, WhatsApp quick link, inquiry email, working hours).
- **Right Column**: Interactive general inquiry form (Name, Email, Phone, Message) routed to `/api/enquiries`.
