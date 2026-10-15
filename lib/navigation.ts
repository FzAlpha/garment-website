/** Central nav + category registry for the MPA. Keep in sync with data/products.ts slugs. */

import { uniformSectors } from "@/data/uniforms";
import { garmentRanges } from "@/data/ranges";

export type CategorySlug =
  | "security-uniforms"
  | "premium-formal"
  | "premium-tshirts";

export interface CategoryLink {
  slug: CategorySlug;
  label: string;
  href: string;
  blurb: string;
}

export const categories: CategoryLink[] = [
  {
    slug: "security-uniforms",
    label: "Security Uniforms",
    href: "/products/security-uniforms",
    blurb: "Durable duty-grade uniforms",
  },
  {
    slug: "premium-formal",
    label: "Premium Formal",
    href: "/products/premium-formal",
    blurb: "Executive & corporate wear",
  },
  {
    slug: "premium-tshirts",
    label: "Premium T-Shirts",
    href: "/products/premium-tshirts",
    blurb: "180–200 GSM knits & polos",
  },
];

export interface NavMenuEntry {
  label: string;
  href: string;
  blurb: string;
}

export interface NavMenuGroup {
  /** heading for a column in a grouped mega-menu (links to the overview page) */
  label: string;
  href: string;
  items: NavMenuEntry[];
}

export interface NavItem {
  label: string;
  href: string;
  /** optional single-list dropdown / mega-menu entries */
  menu?: NavMenuEntry[];
  /** optional grouped mega-menu (columns with headings) */
  groups?: NavMenuGroup[];
}

const uniformMenu: NavMenuEntry[] = uniformSectors.map((s) => ({
  label: s.label,
  href: `/uniforms/${s.slug}`,
  blurb: s.blurb,
}));

const garmentsMenu: NavMenuEntry[] = [
  ...garmentRanges.map((r) => ({
    label: r.label,
    href: `/garments/${r.slug}`,
    blurb: r.blurb,
  })),
  ...categories.map((c) => ({
    label: c.label,
    href: c.href,
    blurb: c.blurb,
  })),
];

const capabilitiesMenu: NavMenuEntry[] = [
  { label: "Custom Design & Development", href: "/custom", blurb: "Designed to your requirements" },
  { label: "Manufacturing & Quality", href: "/manufacturing", blurb: "In-house production & AQL 2.5" },
  { label: "Bulk Orders", href: "/bulk-orders", blurb: "Institutional & contract manufacturing" },
];

/** Uniforms, Garments and Capabilities are unified under one "What We Make" menu. */
const whatWeMakeGroups: NavMenuGroup[] = [
  { label: "Uniform Solutions", href: "/uniforms", items: uniformMenu },
  { label: "Garments", href: "/garments", items: garmentsMenu },
  { label: "Capabilities", href: "/manufacturing", items: capabilitiesMenu },
];

export const primaryNav: NavItem[] = [
  { label: "What We Make", href: "/uniforms", groups: whatWeMakeGroups },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
