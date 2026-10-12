/** Central nav + category registry for the MPA. Keep in sync with data/products.ts slugs. */

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

export const primaryNav = [
  { label: "Collections", href: "/products", hasMenu: true },
  { label: "Manufacturing", href: "/manufacturing", hasMenu: false },
  { label: "About Us", href: "/about", hasMenu: false },
  { label: "Contact", href: "/contact", hasMenu: false },
] as const;
