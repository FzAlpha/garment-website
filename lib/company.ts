/** Single source of truth for Prolink contact + company facts used across the site. */

export const company = {
  name: "Prolink",
  legalName: "Prolink Staffing Consultancy Pvt Ltd",
  founder: "Dr. Satyajit Mohanty",
  founderTitle: "Founder & CEO",
  tagline: "Garment Manufacturing & Uniform Solutions",
  address: {
    line1: "Plot No. 3010, Near Sapta Sati Mandir",
    line2: "Hi-Tech Square, Palasuni Overbridge, Bhubaneswar – 751010",
    city: "Bhubaneswar",
    country: "India",
  },
  phone: "+91 99370 47733",
  phoneAlt: "+91 78478 78898",
  whatsapp: "+919937047733",
  email: "admin@prolinkconsultancy.in",
  website: "https://prolinkconsultancy.in",
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
export const telLinkAlt = `tel:${company.phoneAlt.replace(/\s+/g, "")}`;
