/**
 * Prolink catalog dataset.
 * Parsed from the ingested collection assets (specs/frontend/*), with branding
 * removed. Served directly to Server Components for SEO + instant loads.
 */

import type { CategorySlug } from "@/lib/navigation";

export interface SpecRow {
  label: string;
  value: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface Product {
  slug: string;
  category: CategorySlug;
  title: string;
  sku: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  tags: string[];
  badges: string[];
  colors: ColorSwatch[];
  specs: SpecRow[];
  sizes: string;
  featured?: boolean;
  /** category facets used by listing-page filters */
  facets: Record<string, string>;
}

export interface CategoryMeta {
  slug: CategorySlug;
  title: string;
  subtitle: string;
  eyebrow: string;
  /** quote pre-fill token used in /quote?item=... */
  quoteItem: string;
  heroImage: string;
  filters: { key: string; label: string; options: string[] }[];
}

const SKY = { name: "Sky Blue", hex: "#a9c7e0" };
const NAVY = { name: "Classic Navy", hex: "#1f2a44" };
const KHAKI = { name: "Khaki", hex: "#b7a06a" };
const BLACK = { name: "Midnight Black", hex: "#1c1c1c" };
const GREY = { name: "Steel Grey", hex: "#6b7280" };
const WHITE = { name: "White", hex: "#f4f1e8" };
const BROWN = { name: "Mocha Brown", hex: "#5a4632" };
const MAROON = { name: "Maroon", hex: "#5c0f1f" };
const TAN = { name: "Sandstone", hex: "#c2a173" };
const LILAC = { name: "Lavender", hex: "#c9b6d6" };
const LIME = { name: "Citron", hex: "#a7c04a" };
const OLIVE = { name: "Olive", hex: "#6f7a3a" };
const RED = { name: "Crimson", hex: "#9e2b25" };

export const categoryMeta: Record<CategorySlug, CategoryMeta> = {
  "security-uniforms": {
    slug: "security-uniforms",
    title: "Institutional & Security Uniforms",
    subtitle:
      "Durable, smart-fit security uniforms engineered for demanding duty.",
    eyebrow: "Duty-Grade Workwear",
    quoteItem: "security-shirt",
    heroImage: "/catalog/security/security-skyblue.jpg",
    filters: [
      { key: "fabric", label: "Fabric", options: ["Poly-Cotton 65/35", "Heavy Drill", "Ripstop"] },
      { key: "sleeve", label: "Sleeve", options: ["Full Sleeve", "Half Sleeve"] },
      { key: "color", label: "Color", options: ["Classic Navy", "Khaki", "Midnight Black", "Sky Blue", "Steel Grey"] },
    ],
  },
  "premium-formal": {
    slug: "premium-formal",
    title: "Corporate & Executive Formal Wear",
    subtitle:
      "High-thread-count shirts and tailored trousers for the modern workforce.",
    eyebrow: "Executive Styling",
    quoteItem: "premium-formal",
    heroImage: "/catalog/formal/formal-white.jpg",
    filters: [
      { key: "garment", label: "Garment", options: ["Formal Shirt", "Shirt + Trouser", "Business Casual"] },
      { key: "collar", label: "Collar", options: ["Spread", "Cutaway", "Semi-Spread", "Button-Down"] },
      { key: "fabric", label: "Fabric", options: ["Giza Cotton", "Cotton-Rich Twill", "Wrinkle-Free Poplin"] },
    ],
  },
  "premium-tshirts": {
    slug: "premium-tshirts",
    title: "Premium Knits & T-Shirts (180–200 GSM)",
    subtitle:
      "Combed-cotton polos and tees with biowash softness and reactive color fastness.",
    eyebrow: "Knits & Polos",
    quoteItem: "premium-tshirt",
    heroImage: "/catalog/tshirts/polo-range.jpg",
    filters: [
      { key: "gsm", label: "GSM", options: ["180 GSM", "200 GSM"] },
      { key: "silhouette", label: "Silhouette", options: ["Polo (Pique)", "Crew Neck", "V-Neck"] },
      { key: "treatment", label: "Treatment", options: ["Biowash", "Silicone Softened", "Anti-Pilling"] },
    ],
  },
};

/* ── Shared spec fragments ───────────────────────────────────────────────── */

const securityColors = [NAVY, KHAKI, BLACK, SKY, GREY];
const securityBase: SpecRow[] = [
  { label: "Fabric Composition", value: "65% Polyester / 35% Cotton" },
  { label: "Weave Type", value: "Heavy Oxford / Drill" },
  { label: "Pockets", value: "Dual chest pleated flap pockets with pen slot" },
  { label: "Reinforcements", value: "Double-needle shoulder & armhole stitching" },
  { label: "Available Sizes", value: "36 (S) to 48 (4XL)" },
];

const formalColors = [WHITE, BLACK, NAVY, SKY, GREY, BROWN, MAROON];
const formalBase: SpecRow[] = [
  { label: "Fabric", value: "100% Giza / Egyptian Cotton" },
  { label: "Thread Count", value: "80s / 100s 2-ply" },
  { label: "Shrinkage", value: "< 2% (pre-shrunk, controlled)" },
  { label: "Collar Fusing", value: "Premium structured interlining" },
  { label: "Available Sizes", value: "S (38) to XXL (46) · Pant 28–36" },
];

const teeColors = [NAVY, SKY, TAN, LILAC, LIME, WHITE, BLACK, RED, OLIVE, MAROON];
const teeBase: SpecRow[] = [
  { label: "GSM", value: "180–200 GSM (up to 220 GSM)" },
  { label: "Composition", value: "100% Super Combed Cotton / PC blend" },
  { label: "Knit", value: "Single Jersey / Pique" },
  { label: "Collar", value: "1×1 heavy ribbed, curl-resistant" },
  { label: "Finish", value: "Biowash · Silicone softened · Reactive dyed" },
];

/* ── Products ────────────────────────────────────────────────────────────── */

export const products: Product[] = [
  // ─── Security Uniforms ───
  {
    slug: "heavy-duty-patrol-uniform",
    category: "security-uniforms",
    title: "Heavy-Duty Patrol Uniform",
    sku: "SEC-01",
    summary: "Navy duty shirt and trouser set built for all-day field patrol.",
    description:
      "A full duty set in heavyweight poly-cotton with reinforced seams, epaulets and dual flap pockets. Engineered to hold shape and colour through repeated industrial laundering.",
    image: "/catalog/security/security-navy.jpg",
    gallery: ["/catalog/security/security-navy.jpg"],
    tags: ["Epaulets", "Flap Pockets", "Badge Tab"],
    badges: ["Color Fastness 4.5+", "Breathable Fabric", "AQL 2.5"],
    colors: securityColors,
    specs: securityBase,
    sizes: "36 (S) – 48 (4XL)",
    featured: true,
    facets: { fabric: "Poly-Cotton 65/35", sleeve: "Full Sleeve", color: "Classic Navy" },
  },
  {
    slug: "ceremonial-officer-uniform",
    category: "security-uniforms",
    title: "Ceremonial Officer Uniform",
    sku: "SEC-02",
    summary: "Khaki officer uniform with aiguillette and peaked-cap styling.",
    description:
      "A supervisory-grade uniform with aiguillette cord, structured shoulders and crisp drill fabric — designed for guarding officers, event security leads and ceremonial duty.",
    image: "/catalog/security/security-officer.jpg",
    gallery: ["/catalog/security/security-officer.jpg"],
    tags: ["Aiguillette", "Epaulets", "Peaked Cap Ready"],
    badges: ["Structured Shoulder", "Color Fastness 4.5+"],
    colors: [KHAKI, NAVY, GREY],
    specs: [
      { label: "Fabric Composition", value: "Heavy Drill / Terry-Rubia blend" },
      { label: "Detailing", value: "Aiguillette cord, rank-ready epaulets" },
      { label: "Pockets", value: "Flap chest pockets with badge tab" },
      { label: "Reinforcements", value: "Double-needle construction" },
      { label: "Available Sizes", value: "36 (S) to 48 (4XL)" },
    ],
    sizes: "36 (S) – 48 (4XL)",
    facets: { fabric: "Heavy Drill", sleeve: "Half Sleeve", color: "Khaki" },
  },
  {
    slug: "tactical-guard-shirt",
    category: "security-uniforms",
    title: "Tactical Guard Shirt",
    sku: "SEC-03",
    summary: "Black tactical shirt with SECURITY badge tab and radio loop.",
    description:
      "A sharp, duty-first black shirt with epaulets, embroidered SECURITY tab, pen slot and radio loop. A modern alternative to classic navy for premium private-security contracts.",
    image: "/catalog/security/security-patrol.jpg",
    gallery: ["/catalog/security/security-patrol.jpg"],
    tags: ["Badge Tab", "Radio Loop", "Epaulets"],
    badges: ["Modern Fit", "Breathable Fabric"],
    colors: [BLACK, NAVY, GREY],
    specs: securityBase,
    sizes: "36 (S) – 48 (4XL)",
    facets: { fabric: "Poly-Cotton 65/35", sleeve: "Half Sleeve", color: "Midnight Black" },
  },
  {
    slug: "classic-security-guard-shirt",
    category: "security-uniforms",
    title: "Classic Security Guard Shirt",
    sku: "SEC-04",
    summary: "Sky-blue guard shirt with navy trouser — the institutional standard.",
    description:
      "The most-requested guard combination: a breathable sky-blue shirt with flap pockets and badge loop, paired with a durable navy trouser. Ideal for facility, retail and campus security.",
    image: "/catalog/security/security-skyblue.jpg",
    gallery: ["/catalog/security/security-skyblue.jpg"],
    tags: ["Flap Pockets", "Badge Loop", "Shoulder Strap"],
    badges: ["Breathable Fabric", "Color Fastness 4.5+", "AQL 2.5"],
    colors: [SKY, NAVY, GREY, KHAKI],
    specs: securityBase,
    sizes: "36 (S) – 48 (4XL)",
    featured: true,
    facets: { fabric: "Poly-Cotton 65/35", sleeve: "Full Sleeve", color: "Sky Blue" },
  },
  {
    slug: "two-tone-duty-shirt",
    category: "security-uniforms",
    title: "Two-Tone Duty Shirt",
    sku: "SEC-05",
    summary: "Light-blue body with contrast navy yoke, pockets and shoulder tabs.",
    description:
      "A contemporary two-tone construction — light-blue body with navy yoke and flap pockets — for institutions that want a distinctive, brand-aligned security look.",
    image: "/catalog/security/security-twotone.jpg",
    gallery: ["/catalog/security/security-twotone.jpg"],
    tags: ["Contrast Yoke", "Flap Pockets", "Badge Tab"],
    badges: ["Modern Fit", "Breathable Fabric"],
    colors: [SKY, NAVY],
    specs: securityBase,
    sizes: "36 (S) – 48 (4XL)",
    facets: { fabric: "Poly-Cotton 65/35", sleeve: "Full Sleeve", color: "Sky Blue" },
  },

  // ─── Premium Formal ───
  {
    slug: "executive-oxford-shirt",
    category: "premium-formal",
    title: "Executive Oxford Formal Shirt",
    sku: "FOR-01",
    summary: "Crisp white Giza-cotton shirt with structured spread collar.",
    description:
      "The boardroom staple: a 2-ply Giza-cotton shirt with a structured spread collar, reinforced placket and mother-of-pearl-style buttons. Ready for chest embroidery and contrast inner-collar tape.",
    image: "/catalog/formal/formal-white.jpg",
    gallery: ["/catalog/formal/formal-white.jpg"],
    tags: ["Spread Collar", "Giza Cotton", "Wrinkle Resistant"],
    badges: ["Thread Count 100s", "Shrinkage < 2%"],
    colors: formalColors,
    specs: formalBase,
    sizes: "S (38) – XXL (46)",
    featured: true,
    facets: { garment: "Formal Shirt", collar: "Spread", fabric: "Giza Cotton" },
  },
  {
    slug: "midnight-twill-shirt",
    category: "premium-formal",
    title: "Midnight Twill Formal Shirt",
    sku: "FOR-02",
    summary: "Deep black twill shirt with a sharp cutaway collar.",
    description:
      "A rich black twill with subtle sheen and a cutaway collar — the go-to for hospitality front-of-house, chauffeur fleets and premium corporate uniforms.",
    image: "/catalog/formal/formal-black.jpg",
    gallery: ["/catalog/formal/formal-black.jpg"],
    tags: ["Cutaway Collar", "Cotton-Rich Twill", "Easy Care"],
    badges: ["Thread Count 80s", "Shrinkage < 2%"],
    colors: [BLACK, NAVY, GREY, MAROON],
    specs: [
      { label: "Fabric", value: "Cotton-Rich Twill (easy-care)" },
      { label: "Thread Count", value: "80s 2-ply" },
      { label: "Shrinkage", value: "< 2% (pre-shrunk)" },
      { label: "Collar", value: "Cutaway, structured fusing" },
      { label: "Available Sizes", value: "S (38) to XXL (46)" },
    ],
    sizes: "S (38) – XXL (46)",
    facets: { garment: "Formal Shirt", collar: "Cutaway", fabric: "Cotton-Rich Twill" },
  },
  {
    slug: "mocha-premium-shirt",
    category: "premium-formal",
    title: "Mocha Premium Formal Shirt",
    sku: "FOR-03",
    summary: "Warm brown formal shirt with semi-spread collar and khaki pairing.",
    description:
      "A versatile mocha-brown shirt in soft cotton-rich poplin, built to pair with khaki or charcoal trousers for a relaxed executive look.",
    image: "/catalog/formal/formal-brown.jpg",
    gallery: ["/catalog/formal/formal-brown.jpg"],
    tags: ["Semi-Spread Collar", "Wrinkle-Free Poplin", "Soft Hand"],
    badges: ["Shrinkage < 2%", "Breathable"],
    colors: [BROWN, KHAKI, OLIVE, WHITE],
    specs: [
      { label: "Fabric", value: "Wrinkle-Free Poplin (cotton-rich)" },
      { label: "Thread Count", value: "80s 2-ply" },
      { label: "Shrinkage", value: "< 2% (pre-shrunk)" },
      { label: "Collar", value: "Semi-spread" },
      { label: "Available Sizes", value: "S (38) to XXL (46)" },
    ],
    sizes: "S (38) – XXL (46)",
    facets: { garment: "Formal Shirt", collar: "Semi-Spread", fabric: "Wrinkle-Free Poplin" },
  },
  {
    slug: "checked-business-casual-shirt",
    category: "premium-formal",
    title: "Checked Business-Casual Shirt",
    sku: "FOR-04",
    summary: "Green tartan-check shirt bridging formal and smart-casual.",
    description:
      "A yarn-dyed green check in brushed cotton, finished with a button-down collar. Perfect for creative teams, hospitality and Friday-dress corporate programmes.",
    image: "/catalog/formal/formal-plaid.jpg",
    gallery: ["/catalog/formal/formal-plaid.jpg"],
    tags: ["Button-Down Collar", "Yarn-Dyed Check", "Brushed Cotton"],
    badges: ["Color Fastness 4.5+", "Soft Hand"],
    colors: [OLIVE, NAVY, MAROON, GREY],
    specs: [
      { label: "Fabric", value: "Yarn-dyed brushed cotton" },
      { label: "Pattern", value: "Tonal tartan check" },
      { label: "Shrinkage", value: "< 2.5% (pre-shrunk)" },
      { label: "Collar", value: "Button-down" },
      { label: "Available Sizes", value: "S (38) to XXL (46)" },
    ],
    sizes: "S (38) – XXL (46)",
    facets: { garment: "Business Casual", collar: "Button-Down", fabric: "Cotton-Rich Twill" },
  },
  {
    slug: "sky-poplin-shirt-trouser",
    category: "premium-formal",
    title: "Sky Poplin Shirt + Trouser Set",
    sku: "FOR-05",
    summary: "Coordinated sky-blue poplin shirt with tailored navy trouser.",
    description:
      "A complete corporate set — a wrinkle-free sky-blue poplin shirt with a tailored navy flat-front trouser. Supplied as a coordinated uniform package for front-desk and admin teams.",
    image: "/catalog/formal/formal-blue.jpg",
    gallery: ["/catalog/formal/formal-blue.jpg"],
    tags: ["Shirt + Trouser", "Wrinkle-Free Poplin", "Coordinated Set"],
    badges: ["Shrinkage < 2%", "Easy Care"],
    colors: [SKY, WHITE, GREY, NAVY],
    specs: [
      { label: "Shirt Fabric", value: "Wrinkle-free poplin (cotton-rich)" },
      { label: "Trouser Fabric", value: "Poly-viscose tailored suiting" },
      { label: "Collar", value: "Semi-spread" },
      { label: "Fit", value: "Slim / Regular / Custom corporate" },
      { label: "Available Sizes", value: "Shirt S–XXL · Pant 28–36" },
    ],
    sizes: "Shirt S–XXL · Pant 28–36",
    facets: { garment: "Shirt + Trouser", collar: "Semi-Spread", fabric: "Wrinkle-Free Poplin" },
  },

  // ─── Premium T-Shirts ───
  {
    slug: "signature-pique-polo-navy",
    category: "premium-tshirts",
    title: "Signature Pique Polo — Navy",
    sku: "TEE-01",
    summary: "200 GSM combed-cotton pique polo with ribbed collar and side slits.",
    description:
      "Our flagship corporate polo in 200 GSM pique — premium button binding, a curl-resistant 1×1 ribbed collar and comfort side slits. Ready for embroidery, screen, DTF or high-density print.",
    image: "/catalog/tshirts/polo-navy.jpg",
    gallery: ["/catalog/tshirts/polo-navy.jpg", "/catalog/tshirts/polo-range.jpg"],
    tags: ["Pique Knit", "Ribbed Collar", "Side Slits"],
    badges: ["180–200 GSM", "Combed Cotton", "Biowash"],
    colors: teeColors,
    specs: teeBase,
    sizes: "XS – 4XL",
    featured: true,
    facets: { gsm: "200 GSM", silhouette: "Polo (Pique)", treatment: "Biowash" },
  },
  {
    slug: "sky-combed-cotton-polo",
    category: "premium-tshirts",
    title: "Sky Combed-Cotton Polo",
    sku: "TEE-02",
    summary: "Light, breathable 180 GSM sky-blue pique polo.",
    description:
      "A lighter 180 GSM pique in a fresh sky tone — soft, breathable and colour-fast. A favourite for summer uniform programmes and event teams.",
    image: "/catalog/tshirts/polo-sky.jpg",
    gallery: ["/catalog/tshirts/polo-sky.jpg", "/catalog/tshirts/polo-range.jpg"],
    tags: ["Pique Knit", "Ribbed Collar", "Lightweight"],
    badges: ["180 GSM", "Combed Cotton", "Biowash"],
    colors: teeColors,
    specs: teeBase,
    sizes: "XS – 4XL",
    facets: { gsm: "180 GSM", silhouette: "Polo (Pique)", treatment: "Silicone Softened" },
  },
  {
    slug: "sandstone-pique-polo",
    category: "premium-tshirts",
    title: "Sandstone Pique Polo",
    sku: "TEE-03",
    summary: "Earthy tan 200 GSM polo with premium button binding.",
    description:
      "A warm sandstone 200 GSM pique polo with durable button binding and anti-pilling finish — an on-trend neutral for retail and hospitality brand uniforms.",
    image: "/catalog/tshirts/polo-tan.jpg",
    gallery: ["/catalog/tshirts/polo-tan.jpg", "/catalog/tshirts/polo-range.jpg"],
    tags: ["Pique Knit", "Button Binding", "Anti-Pilling"],
    badges: ["200 GSM", "Combed Cotton", "Biowash"],
    colors: teeColors,
    specs: teeBase,
    sizes: "XS – 4XL",
    facets: { gsm: "200 GSM", silhouette: "Polo (Pique)", treatment: "Anti-Pilling" },
  },
  {
    slug: "lavender-pique-polo",
    category: "premium-tshirts",
    title: "Lavender Pique Polo",
    sku: "TEE-04",
    summary: "Soft lilac 180 GSM polo, silicone-softened for all-day comfort.",
    description:
      "A gentle lavender 180 GSM pique with a silicone-softened hand and reactive-dyed colour fastness — a distinctive choice for salons, clinics and boutique retail.",
    image: "/catalog/tshirts/polo-lilac.jpg",
    gallery: ["/catalog/tshirts/polo-lilac.jpg", "/catalog/tshirts/polo-range.jpg"],
    tags: ["Pique Knit", "Silicone Softened", "Ribbed Collar"],
    badges: ["180 GSM", "Combed Cotton", "Biowash"],
    colors: teeColors,
    specs: teeBase,
    sizes: "XS – 4XL",
    facets: { gsm: "180 GSM", silhouette: "Polo (Pique)", treatment: "Silicone Softened" },
  },
  {
    slug: "citron-pique-polo",
    category: "premium-tshirts",
    title: "Citron Pique Polo",
    sku: "TEE-05",
    summary: "Vivid lime-green 200 GSM polo with comfort side slits.",
    description:
      "A high-visibility citron 200 GSM pique with comfort side slits and a structured ribbed collar — great for promotions, sports staff and events where the brand needs to pop.",
    image: "/catalog/tshirts/polo-lime.jpg",
    gallery: ["/catalog/tshirts/polo-lime.jpg", "/catalog/tshirts/polo-range.jpg"],
    tags: ["Pique Knit", "Side Slits", "High-Visibility"],
    badges: ["200 GSM", "Combed Cotton", "Biowash"],
    colors: teeColors,
    specs: teeBase,
    sizes: "XS – 4XL",
    facets: { gsm: "200 GSM", silhouette: "Polo (Pique)", treatment: "Anti-Pilling" },
  },
];

/* ── Accessors ───────────────────────────────────────────────────────────── */

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(category: CategorySlug, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getAllProductParams(): { category: CategorySlug; slug: string }[] {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}
