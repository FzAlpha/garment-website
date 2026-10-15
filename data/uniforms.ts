/**
 * Uniform Solutions sector registry — the primary focus of the site.
 * Drives the homepage sector grid, the /uniforms overview, and the dynamic
 * /uniforms/[sector] capability landing pages. Follows the accessor style of
 * data/products.ts. No per-SKU data — these are B2B capability pages.
 */

import type { IconName } from "@/components/ui/Icon";

export interface UniformSector {
  slug: string;
  label: string;
  /** short nav/overview blurb */
  blurb: string;
  eyebrow: string;
  icon: IconName;
  /** landing-page hero line */
  summary: string;
  /** who we outfit within this sector */
  roles: string[];
  /** garment types we manufacture for the sector */
  garments: string[];
  /** fabrics commonly specified */
  fabrics: string[];
  /** customization / branding we apply */
  customization: string[];
}

export const uniformSectors: UniformSector[] = [
  {
    slug: "education",
    label: "Education",
    blurb: "Schools, colleges & campus staff",
    eyebrow: "Education Sector",
    icon: "education",
    summary:
      "Complete school, college and university uniform programmes — durable, colour-fast and sized for every age group, with coordinated staff and sports kit.",
    roles: [
      "School uniforms",
      "College uniforms",
      "University uniforms",
      "Student uniforms",
      "Teachers & staff uniforms",
      "Sports / PE kit",
    ],
    garments: [
      "Shirts & blouses",
      "Trousers, skirts & pinafores",
      "Sweaters & blazers",
      "House / sports T-shirts",
      "Track suits",
      "Ties, belts & accessories",
    ],
    fabrics: ["Poly-cotton suiting", "Cotton shirting", "Pique knit", "Terry-cotton"],
    customization: [
      "School crest embroidery",
      "House colours",
      "Name & class labels",
      "Size-chart programmes",
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    blurb: "Hospitals, clinics & medical staff",
    eyebrow: "Healthcare Sector",
    icon: "healthcare",
    summary:
      "Clinical-grade uniforms for hospitals and clinics — lab coats, scrubs and staff wear built for comfort, hygiene and repeated high-temperature laundering.",
    roles: [
      "Doctor & lab coats",
      "Nurse uniforms",
      "Scrubs & medical staff wear",
      "Hospital support-staff uniforms",
      "Reception & admin wear",
    ],
    garments: [
      "Lab coats & aprons",
      "Scrub tops & trousers",
      "Tunics",
      "Staff shirts & trousers",
      "Housekeeping wear",
    ],
    fabrics: ["Poly-cotton (easy-care)", "Antimicrobial-finish cotton", "Poplin", "Twill"],
    customization: [
      "Department colour-coding",
      "Logo & name embroidery",
      "Reinforced pockets",
      "High-temperature wash fabrics",
    ],
  },
  {
    slug: "security",
    label: "Security & Protection",
    blurb: "Guards & private security firms",
    eyebrow: "Security Sector",
    icon: "security",
    summary:
      "Duty-grade security uniforms engineered for demanding field use — reinforced seams, epaulets and badge tabs in heavyweight poly-cotton and drill.",
    roles: [
      "Security guard uniforms",
      "Security company uniforms",
      "Private protection uniforms",
      "Industrial security uniforms",
      "Supervisory / officer uniforms",
    ],
    garments: [
      "Duty shirts & trousers",
      "Two-tone duty shirts",
      "Officer / ceremonial uniforms",
      "Jackets & bush shirts",
      "Caps, belts & epaulets",
    ],
    fabrics: ["Heavy poly-cotton 65/35", "Drill", "Terry-Rubia", "Ripstop"],
    customization: [
      "Company name & badge tabs",
      "Epaulets & rank insignia",
      "Reflective tape",
      "Radio & pen loops",
    ],
  },
  {
    slug: "police-institutional",
    label: "Police & Institutional",
    blurb: "Government & departmental wear",
    eyebrow: "Institutional Sector",
    icon: "police",
    summary:
      "Police-style, government and departmental uniforms manufactured to institutional specifications, subject to applicable requirements and approvals.",
    roles: [
      "Police-style uniforms (subject to requirements)",
      "Government & institutional uniforms",
      "Departmental uniforms",
      "Public-sector workwear",
    ],
    garments: [
      "Uniform shirts & trousers",
      "Jackets & outerwear",
      "Ceremonial dress",
      "Caps & accessories",
    ],
    fabrics: ["Drill", "Terry-cotton suiting", "Gabardine", "Poly-viscose"],
    customization: [
      "Departmental insignia",
      "Rank & name tapes",
      "Specification compliance",
      "Bulk sizing programmes",
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    blurb: "Hotels, resorts & restaurants",
    eyebrow: "Hospitality Sector",
    icon: "hospitality",
    summary:
      "Front-of-house and kitchen uniforms that carry a property's brand — from tailored reception wear to chef jackets and housekeeping kit.",
    roles: [
      "Hotel & resort uniforms",
      "Restaurant uniforms",
      "Chef & kitchen staff",
      "Housekeeping uniforms",
      "Front-office uniforms",
    ],
    garments: [
      "Chef coats & aprons",
      "Waistcoats & tailored shirts",
      "Reception blazers & tunics",
      "Housekeeping sets",
      "Polos & service tees",
    ],
    fabrics: ["Cotton-rich poplin", "Twill", "Pique knit", "Poly-viscose suiting"],
    customization: [
      "Property logo embroidery",
      "Brand colour matching",
      "Role-based styling",
      "Name badges & trims",
    ],
  },
  {
    slug: "corporate",
    label: "Corporate",
    blurb: "Offices, executives & brands",
    eyebrow: "Corporate Sector",
    icon: "corporate",
    summary:
      "Executive and office uniform programmes — formal shirts, tailored trousers and branded polos that keep a workforce consistent and on-brand.",
    roles: [
      "Corporate & office uniforms",
      "Company shirts & formal wear",
      "Executive / management wear",
      "Customized corporate workwear",
    ],
    garments: [
      "Formal shirts & blouses",
      "Tailored trousers & skirts",
      "Blazers & waistcoats",
      "Branded polos & tees",
    ],
    fabrics: ["Giza / combed cotton", "Wrinkle-free poplin", "Cotton-rich twill", "Suiting blends"],
    customization: [
      "Chest & cuff embroidery",
      "Contrast inner-collar tape",
      "Brand colour matching",
      "Coordinated shirt + trouser sets",
    ],
  },
  {
    slug: "industrial",
    label: "Industrial & Workwear",
    blurb: "Factories, technicians & sites",
    eyebrow: "Industrial Sector",
    icon: "industrial",
    summary:
      "Rugged factory and site workwear built to take abuse — reinforced construction, functional pockets and high-visibility options for safety-first environments.",
    roles: [
      "Factory uniforms",
      "Technician & engineering uniforms",
      "Warehouse uniforms",
      "Construction workwear",
      "Safety / work garments",
    ],
    garments: [
      "Coveralls & boiler suits",
      "Work shirts & cargo trousers",
      "Hi-vis vests & jackets",
      "Aprons & dungarees",
    ],
    fabrics: ["Heavy drill", "Canvas-cotton", "Poly-cotton twill", "Hi-vis polyester"],
    customization: [
      "Reflective tape & panels",
      "Reinforced knees & pockets",
      "Logo & department ID",
      "Durable industrial-wash fabrics",
    ],
  },
  {
    slug: "retail-services",
    label: "Retail & Services",
    blurb: "Stores, delivery & service teams",
    eyebrow: "Retail & Services Sector",
    icon: "retail",
    summary:
      "Customer-facing uniforms for retail, supermarket, delivery and service teams — approachable, brand-aligned and comfortable through long shifts.",
    roles: [
      "Retail & supermarket staff",
      "Delivery / logistics uniforms",
      "Cleaning & service staff",
      "Customized uniforms for organizations",
    ],
    garments: [
      "Branded polos & T-shirts",
      "Staff shirts & aprons",
      "Caps & visors",
      "Jackets & body-warmers",
    ],
    fabrics: ["Pique knit", "Single-jersey cotton", "Poly-cotton", "Poplin"],
    customization: [
      "Front & back branding",
      "Screen & DTF printing",
      "Name & role tags",
      "Brand colour matching",
    ],
  },
];

export function getSector(slug: string): UniformSector | undefined {
  return uniformSectors.find((s) => s.slug === slug);
}

export function getAllSectorParams(): { sector: string }[] {
  return uniformSectors.map((s) => ({ sector: s.slug }));
}
