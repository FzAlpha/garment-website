import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import { company, mailtoLink, telLink, whatsappLink } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Prolink for garment manufacturing and uniform enquiries — phone, WhatsApp, email and factory address.",
};

const channels = [
  { label: "Phone", value: company.phone, href: telLink },
  { label: "Email", value: company.email, href: mailtoLink },
  { label: "WhatsApp", value: "Chat with our team", href: whatsappLink, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Talk to the Prolink Team"
        subtitle="For bulk garment and uniform enquiries, reach us directly or send a message — we typically respond within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container two-col">
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div>
              <span className="eyebrow">Direct Channels</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}>
                We&apos;re ready to quote your next order.
              </h2>
            </div>

            <div style={{ display: "grid", gap: "0.9rem" }}>
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  style={{
                    display: "grid",
                    gap: "0.2rem",
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderLeft: "3px solid var(--gold)",
                    borderRadius: "var(--radius)",
                    padding: "0.9rem 1.2rem",
                    textDecoration: "none",
                  }}
                >
                  <span className="eyebrow" style={{ marginBottom: 0 }}>{c.label}</span>
                  <span style={{ color: "var(--ink)", fontSize: "1.05rem" }}>{c.value}</span>
                </a>
              ))}
            </div>

            <div
              style={{
                background: "var(--sand)",
                borderRadius: "var(--radius)",
                padding: "1.2rem 1.4rem",
                display: "grid",
                gap: "0.3rem",
              }}
            >
              <span className="eyebrow" style={{ marginBottom: 0 }}>Factory Address</span>
              <address style={{ fontStyle: "normal", color: "var(--ink)", lineHeight: 1.6 }}>
                {company.address.line1}<br />
                {company.address.line2}<br />
                {company.address.country}
              </address>
              <span style={{ color: "var(--muted)", marginTop: "0.4rem" }}>
                Working hours: {company.hours}
              </span>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
