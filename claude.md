# Master Project Prompt: Prolink Web Platform

You are acting as an expert Lead Full-Stack Software Engineer and UI/UX Architect. Your objective is to build a modern, high-conversion B2B Garment Manufacturing and Customized Uniform Enquiry Website for **Prolink**, an India-based garment manufacturer serving domestic and international clients.

---

## 1. Technology Stack & Deployment
- **Framework**: **Next.js (React / TypeScript, App Router)**
- **Architecture**: Unified full-stack application deployed on **Vercel**
  - **Frontend**: Next.js React components styled strictly with the locked Prolink CSS tokens from `styles.css`.
  - **Backend**: Next.js Route Handlers (`app/api/...`) for B2B quote submissions, inquiry handling, Cloudinary uploads, and Gmail SMTP email dispatch via Nodemailer.
- **Hosting / Deployment Target**: **Vercel** (zero-config, single-repository full-stack deployment).

---

## 2. Locked Brand Identity & Design System (From styles.css)
**CRITICAL**: Even though some scanned catalog images or proposal documents show blue backgrounds, **do NOT use blue** as the website theme. The design system is **strictly locked** to the existing `styles.css`:
- **Palette**:
  - `--maroon: #5c0f1f;` & `--maroon-deep: #3a0812;` (Primary brand accent, headers, main buttons)
  - `--gold: #b8893b;` & `--gold-soft: #e3c98f;` (Secondary luxury accent, eyebrows, badges, highlights)
  - `--ivory: #fbf6ec;` & `--sand: #f3e9d6;` (Primary page background and warm card containers)
  - `--ink: #2a1a16;` & `--muted: #6d5a52;` (Body text, labels, and secondary copy)
  - `--line: #e2d3b8;` (Borders, divider lines, card outlines)
- **Typography**:
  - Headings: `"Cormorant Garamond", Georgia, serif`
  - Body & UI: `"Jost", system-ui, -apple-system, sans-serif`
- **Component Styling**:
  - Pill-shaped buttons (`border-radius: 999px;`) with smooth hover elevations.
  - Eyebrows: Gold, uppercase, tracked (`letter-spacing: 0.2em; font-size: 0.8rem;`).
  - Cards: `--radius: 14px;` with subtle `--line` borders.
  - Header: Frosted glassmorphism on scroll (`backdrop-filter: blur(10px)`).
- **Strict Fluid Responsiveness (NO HARDCODED `px`)**:
  - **Zero Hardcoded Pixels for Layout & Typography**: Do NOT use fixed `px` values for widths, heights, margins, paddings, or font sizes.
  - Use fluid relative units exclusively: `rem`, `clamp()`, `vw`, `%`, `ch`, and flexible grids (`repeat(auto-fit, minmax(min(100%, 20rem), 1fr))`).
  - Font scaling must use `clamp()` (e.g., `font-size: clamp(2rem, 5vw, 3.5rem)`).
  - The entire layout must adapt seamlessly across **mobile phones, tablets, laptops, and ultra-wide desktops** with zero horizontal overflow bugs.

---

## 3. Project Directory Blueprint & Folder Structure
Claude must scaffold the project following this clean modular architecture (see `specs/project_architecture.md` for the exhaustive file-by-file blueprint):

```text
├── app/                  # Next.js App Router (layout, page, products, manufacturing, quote, api routes)
├── components/           # Reusable UI & Layout Components (layout/, home/, catalog/, quote/, ui/)
├── data/                 # Ingested catalog & machinery datasets (products.ts, machinery.ts)
├── lib/                  # Utilities & Integrations (email.ts, cloudinary.ts, validation.ts, tokens.ts)
├── public/               # Static assets (images/logo.jpg, catalog photos)
└── specs/                # Master specifications & reference photos
```

- **Strict Multi-Page Architecture**: This is strictly a **Multi-Page Application (MPA)**, NOT a single-page scrolling site. Each category, product, factory tour, and quote form has its own dedicated URL route (e.g. `/products/security-uniforms` -> `[slug]` -> `/quote?item=...`). Claude must follow the exact user journey flows defined in `specs/project_architecture.md`.

---

## 4. Project Scope & Deliverables
- **In Scope (Current Focus)**:
  - **Public Customer Website**: Responsive showcase of manufacturing capabilities, uniform solutions, garment collections, and interactive quote request engine (English only).
  - **Quotation & Lead Pipeline**: B2B quote request engine capturing client requirements, fabric specs, quantities, and tech pack attachments.
- **Strictly Out of Scope / Deferred (DO NOT IMPLEMENT)**:
  - **Admin Panel**: Deliberately paused/stopped until explicitly instructed.
  - **Payment System**: No payment gateways, no checkout flows, and no payment processing. Purely an enquiry and quotation platform.

---

## 5. Collections & Factory Assets (`specs/frontend/`)
Reference photo folders under `specs/frontend/`:
1. `specs/frontend/security_shirt/` (15 photos: security uniforms, epaulets, flap pockets, heavy-duty poly-cotton)
2. `specs/frontend/premium_formal/` (44 photos: executive wear, high-thread-count formal shirts & trousers)
3. `specs/frontend/premium_180-200gsm_tshirt/` (29 photos: knits & polos, 180–200 GSM combed cotton/biowash)
4. `specs/frontend/sewing_machine/` (19 photos: commercial sewing machinery & factory equipment)

**Instructions for Claude**:
- Ingest key products, styling details, and specifications from the 3 garment collections into the catalog and quote builder.
- Feature selected **sewing machine** photos as the **3rd major section** on the Homepage (1. Hero -> 2. Flagship Collections -> 3. Factory & Machinery Showcase) and on the Manufacturing Capability page.

---

## 6. Mandatory Specifications (Page-by-Page Design Reference)
Do not guess or assume UI layouts, data models, or endpoints. Read and strictly follow the comprehensive specifications located in the `specs/` directory:
- `specs/frontend/customer_website.md`: **Crucial** - Detailed page-by-page design, section-by-section breakdown, UI layout, specifications tables, and copy guidelines for all 11 customer pages.
- `specs/project_architecture.md`: Exhaustive Next.js folder blueprint, component hierarchy, and multi-page routing transitions.
- `specs/backend/architecture_and_api.md`: Next.js Route Handlers (quotes, inquiries), validation, and security.
- `specs/backend/integrations.md`: Cloudinary and Gmail SMTP setup.
- `specs/frontend/admin_dashboard.md`: Marked **ON HOLD**. Do not build.

---

## 7. Execution Workflow for Claude
Execute the project iteratively in 5 structured steps:
1. **Step 1: Setup & Design Tokens** - Scaffold Next.js with TypeScript and App Router; import fonts (Cormorant Garamond & Jost) and lock the CSS design tokens from `styles.css`.
2. **Step 2: Data Ingestion** - Parse key models from the 4 asset folders into `data/products.ts` and `data/machinery.ts`.
3. **Step 3: Website Construction** - Build Homepage (featuring 3rd section machinery tour), product catalog, and interactive quote wizard following the page designs in `specs/frontend/customer_website.md`.
4. **Step 4: API & Integrations** - Implement Route Handlers (`app/api/quotes`, `app/api/enquiries`) with Gmail SMTP and Cloudinary.
5. **Step 5: QA & Optimization** - Verify responsive design, test form validation, and audit build for Vercel deployment.

---

## 8. Strict Operational Rules & Anti-Hallucination Guardrails
1. **95% Confidence Threshold Before Coding**: Do NOT start writing or modifying code unless you are at least **95% certain** of what is expected, the data structure, and the architecture. If requirements are ambiguous, **ask the user clarifying questions first**.
2. **The 2-Error Circuit Breaker**: If you encounter the **same error 2 consecutive times**, you must **STOP immediately**. Do NOT enter a trial-and-error guessing loop. Present the exact error to the user and ask for guidance.
3. **No Autonomous / Unsolicited Testing**: You are **NOT allowed to run tests or execute exploratory scripts on your own** without explicit user permission. Only run the standard build/typecheck command when validating the completed phase.
4. **Strict Scope & Zero Hallucination**: Follow `specs/` faithfully. Never hallucinate fictional APIs, unapproved npm packages, or unrequested features. Never touch or implement deferred features (no Admin Panel, no Payment Gateway).
5. **No Scope Creep or Styling Drift**: Do not divert to unnecessary refactoring or modify the locked design system (`styles.css`).
