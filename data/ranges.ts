/**
 * Garment ranges (Pass 2) — Men's, Women's, Traditional/Ethnic and Textiles.
 * Capability landing pages, same B2B pattern as data/uniforms.ts (no per-SKU
 * pages). Flexible labels so the Textiles range can present fabrics rather than
 * garments while sharing one template.
 */

import type { IconName } from "@/components/ui/Icon";

export interface GarmentRange {
  slug: string;
  label: string;
  blurb: string;
  eyebrow: string;
  icon: IconName;
  summary: string;
  /** primary list (garments, or fabrics for the textiles range) */
  itemsLabel: string;
  items: string[];
  /** secondary list (fabrics for garments, finishes for textiles) */
  secondaryLabel: string;
  secondary: string[];
  customization: string[];
}

export const garmentRanges: GarmentRange[] = [
  {
    slug: "mens",
    label: "Men's Wear",
    blurb: "Shirts, trousers & outerwear",
    eyebrow: "Men's Garments",
    icon: "shirt",
    summary:
      "A complete men's garment range — formal, casual, uniform and workwear shirts, trousers and outerwear, manufactured to your fit, fabric and branding specifications.",
    itemsLabel: "Garments We Manufacture",
    items: [
      "Formal shirts",
      "Casual shirts",
      "Uniform shirts",
      "Corporate shirts",
      "Workwear shirts",
      "T-shirts & polo shirts",
      "Formal trousers",
      "Uniform & work trousers",
      "Cargo trousers & shorts",
      "Jackets",
      "Waistcoats & vests",
      "Customized men's garments",
    ],
    secondaryLabel: "Fabric Options",
    secondary: ["Giza / combed cotton", "Wrinkle-free poplin", "Cotton-rich twill", "Pique knit", "Poly-cotton", "Suiting blends"],
    customization: ["Logo embroidery", "Screen & digital printing", "Brand labels & trims", "Custom fit & size programmes"],
  },
  {
    slug: "womens",
    label: "Women's Wear",
    blurb: "Formal, uniform & office wear",
    eyebrow: "Women's Garments",
    icon: "dress",
    summary:
      "Ladies formal, uniform and office wear plus tops, trousers, skirts and tunics — tailored to comfortable, professional fits and your brand's styling.",
    itemsLabel: "Garments We Manufacture",
    items: [
      "Ladies formal wear",
      "Ladies uniforms",
      "Office / corporate wear",
      "Shirts, tops & blouses",
      "Trousers & skirts",
      "Dresses & tunics",
      "Kurtis",
      "Salwar / Churidar",
      "Leggings",
      "Jackets",
      "Customized women's workwear",
    ],
    secondaryLabel: "Fabric Options",
    secondary: ["Cotton shirting", "Poplin", "Poly-viscose", "Rayon & georgette", "Knits", "Suiting blends"],
    customization: ["Tailored fit programmes", "Logo embroidery", "Printing & branding", "Brand colour matching"],
  },
  {
    slug: "ethnic",
    label: "Traditional & Ethnic",
    blurb: "Sarees, kurtis & ethnic wear",
    eyebrow: "Traditional & Ethnic Wear",
    icon: "ethnic",
    summary:
      "Indian ethnic and traditional garments — sarees, kurtis, salwar and churidar materials and customized traditional clothing, produced to your design and fabric brief.",
    itemsLabel: "Garments & Materials",
    items: [
      "Sarees",
      "Salwar materials",
      "Churidar materials",
      "Kurtis",
      "Ethnic & traditional wear",
      "Customized traditional clothing",
      "Other Indian ethnic garments",
    ],
    secondaryLabel: "Fabric Options",
    secondary: ["Cotton", "Silk-blend", "Rayon", "Georgette", "Printed fabrics", "Dyed fabrics"],
    customization: ["Custom prints", "Embroidery & embellishment", "Colour selection", "Made-to-specification garments"],
  },
  {
    slug: "textiles",
    label: "Textiles & Fabrics",
    blurb: "Uniform, workwear & shirting fabrics",
    eyebrow: "Textiles & Fabric Solutions",
    icon: "fabric",
    summary:
      "We work with a wide range of textile and fabric requirements — from uniform and workwear fabrics to shirting, trouser and ladies-wear fabrics, printed, dyed or customized to specification.",
    itemsLabel: "Fabrics We Work With",
    items: [
      "Cotton",
      "Polyester",
      "Cotton-polyester blends",
      "Uniform fabrics",
      "Workwear fabrics",
      "Shirt fabrics",
      "Trouser fabrics",
      "Ladies-wear fabrics",
      "Printed fabrics",
      "Dyed fabrics",
      "Customized fabrics",
    ],
    secondaryLabel: "Finishes & Treatments",
    secondary: ["Dyeing", "Printing", "Biowash & softening", "Colour-fast processing", "Shrinkage control"],
    customization: ["Customized fabric development", "Colour matching", "Weight / GSM to specification", "Printed & dyed to requirement"],
  },
];

export function getRange(slug: string): GarmentRange | undefined {
  return garmentRanges.find((r) => r.slug === slug);
}

export function getAllRangeParams(): { range: string }[] {
  return garmentRanges.map((r) => ({ range: r.slug }));
}
