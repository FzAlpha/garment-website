/* Remote imagery (Unsplash CDN). Kept in one place so photos are easy to swap.
   All are rendered with a monochrome treatment in CSS to match the site's
   blue-grey design language. `img()` returns a plain URL (for CSS backgrounds);
   `bg()` wraps it in a css url() value for the SlatReveal `img` prop. */

const unsplash = (id: string, w = 1200, q = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = (id: string, w?: number) => unsplash(id, w);
export const bg = (id: string, w?: number) => `url("${unsplash(id, w)}")`;

/** Homepage (garment manufacturing / uniforms & apparel theme). */
export const home = {
  hero: unsplash("photo-1489987707025-afc232f7ea0f", 1400),
  triptych: [
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1581655353564-df123a1eb820",
    "photo-1441986300917-64674bd600d8",
  ],
  duo: ["photo-1581655353564-df123a1eb820", "photo-1556905055-8f358a7a47b2"],
  products: [
    "photo-1489987707025-afc232f7ea0f",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1441986300917-64674bd600d8",
    "photo-1556821840-3a63f95609a7",
    "photo-1581655353564-df123a1eb820",
    "photo-1588117260148-b47818741c74",
    "photo-1520975954732-35dd22299614",
    "photo-1434389677669-e08b4cac3105",
  ],
  poster: "photo-1588117260148-b47818741c74",
  lookbook: [
    "photo-1556821840-3a63f95609a7",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1581655353564-df123a1eb820",
    "photo-1489987707025-afc232f7ea0f",
  ],
};

/** Per-page banner photography (apparel / manufacturing theme). */
export const banners = {
  default: "photo-1581655353564-df123a1eb820",
  about: "photo-1581655353564-df123a1eb820",
  manufacturing: "photo-1588117260148-b47818741c74",
  products: "photo-1489987707025-afc232f7ea0f",
  garments: "photo-1441986300917-64674bd600d8",
  uniforms: "photo-1556821840-3a63f95609a7",
  industries: "photo-1520975954732-35dd22299614",
  custom: "photo-1507003211169-0a1dd7228f2d",
  quote: "photo-1556905055-8f358a7a47b2",
  contact: "photo-1556905055-8f358a7a47b2",
  global: "photo-1441986300917-64674bd600d8",
  bulk: "photo-1434389677669-e08b4cac3105",
};
