/**
 * Prolink locked brand design tokens.
 * Source of truth mirrored from the locked `styles.css`. Do NOT introduce blue.
 * Values here are for use in TS/JS (e.g. metadata themeColor, email templates);
 * the live site reads the same tokens from CSS custom properties in globals.css.
 */

export const colors = {
  maroon: "#5c0f1f",
  maroonDeep: "#3a0812",
  gold: "#b8893b",
  goldSoft: "#e3c98f",
  ivory: "#fbf6ec",
  sand: "#f3e9d6",
  ink: "#2a1a16",
  muted: "#6d5a52",
  line: "#e2d3b8",
} as const;

export const fonts = {
  serif: '"Cormorant Garamond", Georgia, serif',
  sans: '"Lato", system-ui, -apple-system, "Segoe UI", sans-serif',
} as const;

export const brand = {
  name: "Prolink",
  tagline: "Garment Manufacturing & Uniform Solutions",
  description:
    "Premier garment manufacturing and customized uniform solutions — engineered in India, trusted worldwide.",
  // Full horizontal lockup (icon + wordmark on white) — for light surfaces / emails.
  logo: "/images/logo.jpg",
  // Isolated icon mark, transparent background — for the header badge and favicon.
  mark: "/images/logo-mark.png",
} as const;

export type BrandColors = typeof colors;
