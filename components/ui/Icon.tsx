/**
 * Inline-SVG icon set (stroke, currentColor — no dependencies).
 * Used across the design-led sector / industry / capability cards so the site
 * stays photo-light where real product imagery does not exist yet.
 */

import type { ReactNode } from "react";

export type IconName =
  // sectors
  | "education"
  | "healthcare"
  | "security"
  | "police"
  | "hospitality"
  | "corporate"
  | "industrial"
  | "retail"
  // industries (extra)
  | "university"
  | "construction"
  | "logistics"
  | "government"
  | "organizations"
  // capabilities
  | "scissors"
  | "needle"
  | "sparkles"
  | "quality"
  | "press"
  | "packing"
  | "globe"
  | "ruler"
  | "palette"
  | "printer"
  | "label"
  | "pattern"
  // garment ranges
  | "shirt"
  | "dress"
  | "ethnic"
  | "fabric";

const paths: Record<IconName, ReactNode> = {
  education: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 10v5" />
    </>
  ),
  healthcare: (
    <>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M6 3H4m2 0h2M18 3h-2m2 0h2" />
      <path d="M12 15v3a4 4 0 0 0 8 0v-1" />
      <circle cx="20" cy="17" r="2" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  police: (
    <>
      <path d="M12 2 4 5v6c0 4.5 3.3 8.4 8 9.5 4.7-1.1 8-5 8-9.5V5l-8-3Z" />
      <path d="m12 7 1.3 2.7 2.9.4-2.1 2 .5 2.9L12 15.6 9.5 17l.5-2.9-2.1-2 2.9-.4L12 7Z" />
    </>
  ),
  hospitality: (
    <>
      <path d="M5 21h14" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3" />
      <path d="M12 6V3m-1.5 1.5h3" />
      <path d="M4 14h16" />
    </>
  ),
  corporate: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  industrial: (
    <>
      <path d="M3 21V9l6 4V9l6 4V4l6 3v14H3Z" />
      <path d="M7 21v-4m5 4v-4m5 4v-4" />
    </>
  ),
  retail: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  university: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M15 11h.01" />
    </>
  ),
  construction: (
    <>
      <path d="M4 17h16v3H4z" />
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M12 9V5m0 0a2 2 0 0 0-2 2m2-2a2 2 0 0 1 2 2" />
      <path d="M12 9v8" />
    </>
  ),
  logistics: (
    <>
      <path d="M1 6h13v9H1z" />
      <path d="M14 9h4l3 3v3h-7" />
      <circle cx="5.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  government: (
    <>
      <path d="M3 21h18" />
      <path d="M4 10h16M5 10 12 4l7 6" />
      <path d="M6 10v8m4-8v8m4-8v8m4-8v8" />
    </>
  ),
  organizations: (
    <>
      <circle cx="12" cy="7" r="3" />
      <circle cx="5" cy="17" r="2.5" />
      <circle cx="19" cy="17" r="2.5" />
      <path d="M12 10v3m0 0-4.5 2M12 13l4.5 2" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 8 20 18M8 16 20 6" />
    </>
  ),
  needle: (
    <>
      <path d="M3 21 15 9" />
      <path d="M14 4a3 3 0 0 1 4 4l-2 2-4-4 2-2Z" />
      <path d="M16 6a1.5 1.5 0 0 0-2 0" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.9L18.7 9l-4.9 1.1L12 15l-1.8-4.9L5.3 9l4.9-1.1L12 3Z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
    </>
  ),
  quality: (
    <>
      <path d="M12 3a4 4 0 0 1 3 1.4A4 4 0 0 1 20 9a4 4 0 0 1 0 6 4 4 0 0 1-5 4.6A4 4 0 0 1 9 19.6 4 4 0 0 1 4 15a4 4 0 0 1 0-6 4 4 0 0 1 5-4.6A4 4 0 0 1 12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  press: (
    <>
      <path d="M4 7h11l3 3v2H4z" />
      <path d="M6 12v3a2 2 0 0 0 2 2h6" />
      <path d="M8 7V5h5" />
      <path d="M18 17h.01" />
    </>
  ),
  packing: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 17 17 3l4 4L7 21l-4-4Z" />
      <path d="m7 9 2 2m1-5 2 2m1-5 2 2M6 12l2 2" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.7 0 2-1.3 1.2-2.2-.8-.9-.3-2.3 1-2.3H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7" r="1" />
      <circle cx="15" cy="7.5" r="1" />
    </>
  ),
  printer: (
    <>
      <path d="M6 9V3h12v6" />
      <rect x="4" y="9" width="16" height="8" rx="1.5" />
      <path d="M7 17h10v4H7z" />
      <path d="M17 12h.01" />
    </>
  ),
  label: (
    <>
      <path d="M3 6a2 2 0 0 1 2-2h7l9 9-8 8-9-9V6Z" />
      <circle cx="8" cy="9" r="1.4" />
    </>
  ),
  pattern: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
      <path d="M13 13h4v4h-4z" />
    </>
  ),
  shirt: (
    <>
      <path d="M8 3 4 6l2 2.5 1.5-1V21h9V7.5L18 8.5 20 6l-4-3-1.5 1.5a3 3 0 0 1-5 0L8 3Z" />
    </>
  ),
  dress: (
    <>
      <path d="M9 3a3 3 0 0 0 6 0" />
      <path d="M9 3 8 7 5.5 13c4 2.5 9 2.5 13 0L16 7l-1-4" />
      <path d="M8 7h8" />
    </>
  ),
  ethnic: (
    <>
      <path d="M12 3c4.5 1.8 6.5 5 6.5 9A6.5 6.5 0 0 1 6 12c0-2.2 1.3-3.5 3.3-3.5S12.6 10 12.6 12a2.1 2.1 0 0 1-4.2 0" />
    </>
  ),
  fabric: (
    <>
      <path d="M3 7c3-2 6-2 9 0s6 2 9 0" />
      <path d="M3 12c3-2 6-2 9 0s6 2 9 0" />
      <path d="M3 17c3-2 6-2 9 0s6 2 9 0" />
    </>
  ),
};

export default function Icon({
  name,
  className,
  size = "1.5rem",
}: {
  name: IconName;
  className?: string;
  size?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
