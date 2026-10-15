import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Prolink is an India-based garment manufacturer delivering precision-engineered uniforms and apparel for domestic and international markets.",
};

const pillars = [
  {
    title: "Production Facility",
    body: "A vertically integrated unit housing CAD pattern-making, multi-ply cutting, computerized stitching lines and in-house finishing — so every stage, from sample to dispatch, stays under one roof.",
  },
  {
    title: "Quality Assurance",
    body: "100% in-line and end-line inspection to an AQL 2.5 standard, with tensile and tear-strength testing and colour-fastness checks (4.5+) on every production run.",
  },
  {
    title: "Export Capabilities",
    body: "Export-compliant packaging, barcoded cartons, port-clearance handling and customs documentation for dependable international shipment alongside domestic supply.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Prolink"
        title="Precision Garment Manufacturing, Engineered in India"
        subtitle="We produce durable, specification-accurate uniforms and apparel for institutions and brands across India and international markets."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="section">
        <div className="container" data-reveal style={{ display: "grid", gap: "1.5rem", maxWidth: "48rem" }}>
          <span className="eyebrow">Mission &amp; Vision</span>
          <h2>Dependable apparel, built to specification and delivered on time.</h2>
          <p className="section-intro">
            Prolink exists to take the uncertainty out of bulk garment sourcing.
            We translate a tech pack, a sketch or a reference sample into a
            production-ready garment — with the right fabric, GSM, trims and
            sizing — then manufacture it at scale with consistent quality.
          </p>
          <p className="section-intro">
            Our core focus is customized uniforms and garment manufacturing —
            from institutional security and healthcare wear to corporate formal
            and premium knits. The priority is always the same: precision,
            durability and reliability that demanding buyers can plan around.
          </p>
          <p className="section-intro">
            Our manufacturing unit is based in India, while our vision is to
            serve customers across India and international markets — supplying
            organizations, distributors, corporates and institutions worldwide.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>Capability Across the Full Production Cycle</h2>
          </div>
          <div className="grid-auto" data-reveal-group>
            {pillars.map((p) => (
              <article
                key={p.title}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderTop: "3px solid var(--gold)",
                  borderRadius: "var(--radius)",
                  padding: "1.6rem 1.5rem",
                }}
              >
                <h3 style={{ color: "var(--maroon)", marginBottom: "0.6rem" }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--muted)" }}>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <h2>Let&apos;s manufacture your next order together.</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Share your requirements and we&apos;ll respond with a tailored
            quotation and sampling plan.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote" className="btn btn-gold">Request a Quote</Link>
            <Link href="/global" className="btn btn-ghost-light">Global Supply</Link>
          </div>
        </div>
      </section>
    </>
  );
}
