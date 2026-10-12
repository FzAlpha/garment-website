/** Single source of truth for Prolink contact + company facts used across the site. */

export const company = {
  name: "Prolink",
  legalName: "Prolink Garments",
  tagline: "Garment Manufacturing & Uniform Solutions",
  address: {
    line1: "Industrial Garment Manufacturing Unit",
    line2: "Export Production Facility",
    city: "India",
    country: "India",
  },
  phone: "+91 00000 00000",
  whatsapp: "+910000000000",
  email: "theswaque@gmail.com",
  hours: "Mon–Sat · 9:30 AM – 7:00 PM IST",
  compliance: [
    "AQL 2.5 Quality Standard",
    "Export-Ready Packaging",
    "Ethical Manufacturing",
  ],
} as const;

export const whatsappLink = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`;
export const mailtoLink = `mailto:${company.email}`;
export const telLink = `tel:${company.phone.replace(/\s+/g, "")}`;
