/**
 * Industries / sectors we serve — drives the /industries grid and the homepage
 * "Industries We Serve" band. Links map to the matching uniform sector page
 * where one exists, otherwise to the Uniform Solutions overview.
 */

import type { IconName } from "@/components/ui/Icon";

export interface Industry {
  label: string;
  icon: IconName;
  blurb: string;
  href: string;
}

export const industries: Industry[] = [
  { label: "Schools & Education", icon: "education", blurb: "School, student, teacher & sports uniforms", href: "/uniforms/education" },
  { label: "Colleges & Universities", icon: "university", blurb: "Campus and institutional uniform programmes", href: "/uniforms/education" },
  { label: "Hospitals & Healthcare", icon: "healthcare", blurb: "Lab coats, scrubs & medical staff wear", href: "/uniforms/healthcare" },
  { label: "Security Services", icon: "security", blurb: "Duty-grade guard & officer uniforms", href: "/uniforms/security" },
  { label: "Police & Institutional", icon: "police", blurb: "Government & departmental uniforms", href: "/uniforms/police-institutional" },
  { label: "Hotels & Hospitality", icon: "hospitality", blurb: "Front-office, chef & housekeeping kit", href: "/uniforms/hospitality" },
  { label: "Corporate", icon: "corporate", blurb: "Office, executive & branded workwear", href: "/uniforms/corporate" },
  { label: "Manufacturing", icon: "industrial", blurb: "Factory uniforms & technician wear", href: "/uniforms/industrial" },
  { label: "Industrial", icon: "industrial", blurb: "Coveralls, hi-vis & safety garments", href: "/uniforms/industrial" },
  { label: "Construction", icon: "construction", blurb: "Durable site workwear & hi-vis", href: "/uniforms/industrial" },
  { label: "Retail", icon: "retail", blurb: "Store & supermarket staff uniforms", href: "/uniforms/retail-services" },
  { label: "Logistics & Delivery", icon: "logistics", blurb: "Delivery, warehouse & field-team kit", href: "/uniforms/retail-services" },
  { label: "Government / Public Sector", icon: "government", blurb: "Departmental & public-sector workwear", href: "/uniforms/police-institutional" },
  { label: "Other Organizations", icon: "organizations", blurb: "Customized uniforms for any organization", href: "/uniforms" },
];
