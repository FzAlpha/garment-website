import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import { banners } from "@/lib/media";
import Icon from "@/components/ui/Icon";
import { globalAudiences } from "@/data/capabilities";
import { company } from "@/lib/company";
import styles from "./global.module.css";

export const metadata: Metadata = {
  title: "Global Supply Capability",
  description:
    "India-based garment manufacturing with global supply capability — serving Indian customers, international buyers, distributors, corporates, institutions and sourcing partners with export-ready production.",
};

export default function GlobalPage() {
  return (
    <>
      <PageBanner
        eyebrow="India-Based · Globally Supplied"
        title="Made in India. Customized for You. Supplied Worldwide."
        subtitle="Our manufacturing unit is based in India, while our vision is to serve customers across India and international markets."
        crumbs={[{ label: "Home", href: "/" }, { label: "Global Supply" }]}
      image={banners.global}
      />

      <section className="section">
        <div className="container" data-reveal style={{ maxWidth: "48rem", display: "grid", gap: "1.2rem" }}>
          <span className="eyebrow">India Manufacturing, Global Supply</span>
          <h2>One unit, built for domestic and international demand.</h2>
          <p className="section-intro">
            From our production facility in {company.address.city}, India, we
            manufacture customized uniforms and garments and supply them to
            organizations, institutions and businesses — domestically and across
            international markets. Export-ready packaging, barcoded cartons and
            documentation keep international shipment dependable alongside
            domestic delivery.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Who We Serve</span>
            <h2>Built for Buyers Everywhere</h2>
          </div>
          <div className={styles.grid} data-reveal-group>
            {globalAudiences.map((a) => (
              <article className={styles.card} key={a.title}>
                <span className={styles.icon}>
                  <Icon name={a.icon} />
                </span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
          <ul className={styles.compliance} data-reveal>
            {company.compliance.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <h2>Sourcing from India? Let&apos;s talk.</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Whether you&apos;re an institution, a distributor or an international
            buyer, share your requirements for a tailored quotation.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote?type=export" className="btn btn-gold">Request a Quote</Link>
            <Link href="/about" className="btn btn-ghost-light">About Prolink</Link>
          </div>
        </div>
      </section>
    </>
  );
}
