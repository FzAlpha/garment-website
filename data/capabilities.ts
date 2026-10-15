/**
 * Manufacturing & customization capability data.
 * Feeds the /custom, /manufacturing and /bulk-orders pages plus the homepage
 * capabilities band. Content only — no imagery (design-led cards).
 */

import type { IconName } from "@/components/ui/Icon";

export interface Capability {
  icon: IconName;
  title: string;
  body: string;
}

/** End-to-end in-house production stages. */
export const manufacturingSteps: { step: number; title: string; detail: string }[] = [
  { step: 1, title: "Sampling & Development", detail: "Pattern making, CAD markers and pre-production samples approved before bulk." },
  { step: 2, title: "Fabric & Material Sourcing", detail: "Sourcing cotton, polyester, blends and specialised uniform fabrics to spec." },
  { step: 3, title: "Cutting", detail: "Multi-ply, marker-optimised straight-knife and band-knife cutting for accuracy and yield." },
  { step: 4, title: "Stitching", detail: "Lockstitch, overlock, flatlock and bar-tack lines balanced for consistent output." },
  { step: 5, title: "Embroidery, Printing & Branding", detail: "Logo embroidery, screen / digital printing, labels and trims applied in-house." },
  { step: 6, title: "Finishing & Pressing", detail: "Thread trimming, steam / heat-press finishing and garment presentation." },
  { step: 7, title: "Quality Inspection", detail: "In-line and end-line checks to an AQL 2.5 standard with measurement audits." },
  { step: 8, title: "Packing & Dispatch", detail: "Size-wise packing, barcoded export-ready cartons and delivery coordination." },
];

/** Custom design & development services. */
export const customServices: Capability[] = [
  { icon: "palette", title: "Custom Garment & Uniform Design", body: "We design to your brief — silhouettes, styling and colourways for garments and complete uniform programmes." },
  { icon: "pattern", title: "Pattern Development", body: "Customer-specific patterns and graded size sets developed from your samples, sketches or specifications." },
  { icon: "ruler", title: "Fabric, Colour & Size Specification", body: "Fabric selection, colour matching and size / measurement customization, including full size charts." },
  { icon: "sparkles", title: "Embroidery", body: "Precision logo and crest embroidery with digitised files and brand-accurate thread matching." },
  { icon: "printer", title: "Screen & Digital Printing", body: "Screen, digital and DTF printing for logos, graphics and large-run promotional garments." },
  { icon: "label", title: "Labels, Branding & Trims", body: "Woven / printed labels, brand tags, custom buttons, zips and accessories applied to spec." },
];

/** Inputs a buyer can bring — "designed to your requirements". */
export const customInputs: string[] = [
  "Your design",
  "Fabric requirement",
  "Colour",
  "Logo",
  "Measurements",
  "Size chart",
  "Quantity",
  "Specification",
];

/** Production scale flexibility. */
export const productionScales: Capability[] = [
  { icon: "sparkles", title: "Small Runs & Pilots", body: "Low-quantity pilot batches so you can trial fit, fabric and finishing before committing to volume." },
  { icon: "corporate", title: "Medium Orders", body: "Mid-volume production for growing organizations, multi-site teams and seasonal programmes." },
  { icon: "industrial", title: "Bulk Manufacturing", body: "High-volume, line-balanced manufacturing with dependable lead times and consistent quality." },
];

/** Who bulk / institutional orders are for. */
export const bulkClients: string[] = [
  "Schools",
  "Colleges & Universities",
  "Hospitals & Healthcare",
  "Hotels & Hospitality",
  "Security companies",
  "Corporates",
  "Factories & Industrial",
  "Government / Institutions",
  "Retail businesses",
  "Other organizations",
];

/** Audiences served by India-based, globally-supplying manufacturing. */
export const globalAudiences: Capability[] = [
  { icon: "organizations", title: "Indian Customers", body: "Organizations, institutions and businesses across India, served from our Bhubaneswar unit." },
  { icon: "globe", title: "International Buyers", body: "Export-ready manufacturing and documentation for buyers in international markets." },
  { icon: "logistics", title: "Distributors & Sourcing Partners", body: "Reliable contract manufacturing for distributors, resellers and international sourcing partners." },
  { icon: "corporate", title: "Corporate & Institutional Clients", body: "Uniform programmes for multi-site corporates, institutions and uniform suppliers." },
];
