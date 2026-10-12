/**
 * Prolink factory machinery dataset.
 * Parsed from the ingested equipment assets (specs/frontend/sewing_machine),
 * with manufacturer branding cropped out. Machine types/model codes retained
 * as factual equipment references.
 */

export type MachineCategory =
  | "Lockstitch"
  | "Overlock"
  | "Flatlock & Interlock"
  | "Buttonholing & Bartack"
  | "Cutting"
  | "Finishing & Pressing";

export interface Machine {
  id: string;
  name: string;
  model?: string;
  category: MachineCategory;
  blurb: string;
  image: string;
  featured?: boolean;
}

export const machines: Machine[] = [
  {
    id: "button-holing",
    name: "High-Speed Computerized Button-Holing Machine",
    model: "YJ-1790ES-D",
    category: "Buttonholing & Bartack",
    blurb: "Programmable buttonhole patterns with touchscreen control for shirts and uniforms.",
    image: "/catalog/machinery/machine-01.jpg",
    featured: true,
  },
  {
    id: "blind-stitch",
    name: "Direct-Drive Blind-Stitch Machine",
    model: "YJ-101-D",
    category: "Finishing & Pressing",
    blurb: "Invisible hemming for trousers and formal garments with clean, low-impression seams.",
    image: "/catalog/machinery/machine-02.jpg",
  },
  {
    id: "lockstitch-c5dg",
    name: "Direct-Drive Lockstitch Machine",
    model: "YJ-C5DG08",
    category: "Lockstitch",
    blurb: "Energy-efficient single-needle lockstitch for everyday assembly of shirts and tees.",
    image: "/catalog/machinery/machine-03.jpg",
  },
  {
    id: "cloth-cutting",
    name: "Straight-Knife Cloth-Cutting Machine",
    model: "YJ-D08-3",
    category: "Cutting",
    blurb: "High-throughput straight-knife cutting for multi-ply fabric lays with precision edges.",
    image: "/catalog/machinery/machine-04.jpg",
    featured: true,
  },
  {
    id: "lockstitch-c7fg",
    name: "Fully-Automatic Computerized Lockstitch",
    model: "YJ-C7FG08",
    category: "Lockstitch",
    blurb: "Auto thread-trim, back-tack and needle-positioning for consistent high-speed output.",
    image: "/catalog/machinery/machine-05.jpg",
    featured: true,
  },
  {
    id: "lockstitch-c5bg",
    name: "Fully-Computerized Lockstitch Machine",
    model: "YJ-C5BG08",
    category: "Lockstitch",
    blurb: "Computer-controlled stitch density for repeatable seam quality across large runs.",
    image: "/catalog/machinery/machine-07.jpg",
  },
  {
    id: "lockstitch-c5ag",
    name: "High-Speed Computerized Lockstitch",
    model: "YJ-C5AG08",
    category: "Lockstitch",
    blurb: "Direct-drive single-needle lockstitch tuned for light-to-medium woven fabrics.",
    image: "/catalog/machinery/machine-08.jpg",
  },
  {
    id: "interlock-500ed",
    name: "Flatlock / Interlock Machine",
    model: "YJ-500ED",
    category: "Flatlock & Interlock",
    blurb: "Stretch flatlock seams for knit polos and tees — flat, comfortable and durable.",
    image: "/catalog/machinery/machine-09.jpg",
    featured: true,
  },
  {
    id: "auto-trim-lockstitch",
    name: "Auto-Trimming Lockstitch Machine",
    model: "YJ-C5FG08",
    category: "Lockstitch",
    blurb: "Automatic under-bed trimmer keeps seam tails clean and reduces finishing time.",
    image: "/catalog/machinery/machine-10.jpg",
  },
  {
    id: "bartack",
    name: "Computerized Bar-Tack Machine",
    model: "YJ-1377DT",
    category: "Buttonholing & Bartack",
    blurb: "Reinforcement bartacks at pockets, loops and stress points for duty-grade durability.",
    image: "/catalog/machinery/machine-11.jpg",
  },
  {
    id: "overlock-7s4",
    name: "High-Speed Integrated Overlock",
    model: "YJ-7S4-02",
    category: "Overlock",
    blurb: "3/4/5-thread overlock edging to prevent fraying on wovens and knits.",
    image: "/catalog/machinery/machine-12.jpg",
    featured: true,
  },
  {
    id: "lockstitch-station",
    name: "High-Speed Lockstitch Station",
    category: "Lockstitch",
    blurb: "Line-balanced lockstitch stations for scalable shirt and trouser assembly.",
    image: "/catalog/machinery/machine-13.jpg",
  },
  {
    id: "top-bottom-feed",
    name: "Direct-Drive Top & Bottom-Feed Lockstitch",
    model: "YJ-0303D",
    category: "Lockstitch",
    blurb: "Walking-foot feed for heavy, multi-layer seams on drill and workwear fabrics.",
    image: "/catalog/machinery/machine-14.jpg",
  },
  {
    id: "overlock-10sq4",
    name: "High-Speed Overlock Machine",
    model: "YJ-10SQ4-37",
    category: "Overlock",
    blurb: "High-RPM overlock for fast, clean edge finishing on knit production.",
    image: "/catalog/machinery/machine-15.jpg",
  },
  {
    id: "heat-press",
    name: "Heat-Press & Fusing Station",
    category: "Finishing & Pressing",
    blurb: "Transfer printing and interlining fusing with controlled heat, time and pressure.",
    image: "/catalog/machinery/machine-16.jpg",
  },
  {
    id: "twin-heat-press",
    name: "Twin-Bed Heat-Press Station",
    category: "Finishing & Pressing",
    blurb: "Dual-bed pressing for continuous throughput on branding and finishing.",
    image: "/catalog/machinery/machine-17.jpg",
  },
  {
    id: "cylinder-interlock",
    name: "Direct-Drive Cylinder-Bed Interlock",
    model: "YJ-W600D-35ZD",
    category: "Flatlock & Interlock",
    blurb: "Cylinder-bed interlock for collar, cuff and hem finishing on tubular knits.",
    image: "/catalog/machinery/machine-18.jpg",
    featured: true,
  },
];

export const machineCategories: MachineCategory[] = [
  "Lockstitch",
  "Overlock",
  "Flatlock & Interlock",
  "Buttonholing & Bartack",
  "Cutting",
  "Finishing & Pressing",
];

export function getFeaturedMachines(): Machine[] {
  return machines.filter((m) => m.featured);
}

/** Factory workflow, per customer_website.md Page 8. */
export const factoryWorkflow: { step: number; title: string; detail: string }[] = [
  { step: 1, title: "Pattern Making & CAD Marker Planning", detail: "Digitised patterns and optimised markers minimise fabric wastage before cutting." },
  { step: 2, title: "Precision Cutting Line", detail: "Straight-knife and multi-ply cutting deliver accurate, repeatable panels." },
  { step: 3, title: "Semi-Automated Stitching & Assembly", detail: "Line-balanced lockstitch, overlock and flatlock stations assemble each garment." },
  { step: 4, title: "100% In-Line & End-Line Inspection", detail: "AQL 2.5 inspection at every stage catches defects before they move on." },
  { step: 5, title: "Steam Pressing & Vacuum Ironing", detail: "Vacuum ironing and steam finishing give a crisp, retail-ready presentation." },
  { step: 6, title: "Barcoded Export Packaging & Dispatch", detail: "Barcoded, export-compliant packing for domestic and international shipment." },
];

/** Plant credentials / metric counters. */
export const plantMetrics: { value: string; label: string }[] = [
  { value: "50,000+", label: "Pieces / Month Capacity" },
  { value: "AQL 2.5", label: "Quality Inspection Standard" },
  { value: "6-Stage", label: "In-House Production Line" },
  { value: "Global", label: "Export Across India & Abroad" },
];
