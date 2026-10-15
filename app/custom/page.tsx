import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import Icon from "@/components/ui/Icon";
import { customServices, customInputs } from "@/data/capabilities";
import styles from "./custom.module.css";

export const metadata: Metadata = {
  title: "Custom Design & Development",
  description:
    "Custom garment and uniform design, pattern development, embroidery, screen & digital printing, branding and labels — designed to your requirements and manufactured to your specifications.",
};

const process = [
  { n: "01", title: "Share Your Brief", body: "Send your design, reference sample, fabric, colour, logo and size chart." },
  { n: "02", title: "Pattern & Sample", body: "We develop patterns and a pre-production sample for your approval." },
  { n: "03", title: "Approve", body: "Refine fit, fabric, branding and finishing until it is exactly right." },
  { n: "04", title: "Bulk Production", body: "We manufacture to specification with consistent quality and on-time dispatch." },
];

export default function CustomPage() {
  return (
    <>
      <PageBanner
        eyebrow="Custom Design & Development"
        title="Designed to Your Requirements, Manufactured to Your Specifications"
        subtitle="Approach us with your own design, fabric, colour, logo, measurements, size chart, quantity and specification — and we develop and manufacture accordingly."
        crumbs={[{ label: "Home", href: "/" }, { label: "Custom Design" }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Bring Us Your</span>
            <h2>Everything We Need to Build Your Garment</h2>
            <p className="section-intro">
              Start with as much or as little as you have — our team fills the
              gaps with fabric, pattern and finishing recommendations.
            </p>
          </div>
          <ul className={styles.inputs} data-reveal-group>
            {customInputs.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Services</span>
            <h2>Custom Design &amp; Branding Capability</h2>
          </div>
          <div className={styles.services} data-reveal-group>
            {customServices.map((svc) => (
              <article className={styles.card} key={svc.title}>
                <span className={styles.icon}>
                  <Icon name={svc.icon} />
                </span>
                <h3>{svc.title}</h3>
                <p>{svc.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">How It Works</span>
            <h2>From Brief to Bulk</h2>
          </div>
          <div className={styles.process} data-reveal-group>
            {process.map((p) => (
              <article className={styles.step} key={p.n}>
                <div className={styles.stepNum}>{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <h2>Have a design in mind?</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Send it over and we&apos;ll respond with a development and sampling plan.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote?type=custom-design" className="btn btn-gold">Start a Custom Order</Link>
            <Link href="/manufacturing" className="btn btn-ghost-light">See Our Manufacturing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
