import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import { banners } from "@/lib/media";
import Icon from "@/components/ui/Icon";
import { productionScales, bulkClients } from "@/data/capabilities";
import styles from "./bulk.module.css";

export const metadata: Metadata = {
  title: "Bulk & Institutional Orders",
  description:
    "Flexible small, medium and bulk garment manufacturing for schools, hospitals, hotels, corporates, security firms, factories and government institutions — in India and internationally.",
};

export default function BulkOrdersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Corporate & Institutional Orders"
        title="Bulk Manufacturing, Built Around Your Order"
        subtitle="From pilot runs to high-volume production, we manufacture customized uniforms and garments for organizations of every size — with dependable lead times and consistent quality."
        crumbs={[{ label: "Home", href: "/" }, { label: "Bulk Orders" }]}
      image={banners.bulk}
      />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Production Flexibility</span>
            <h2>Small, Medium &amp; Bulk Production</h2>
            <p className="section-intro">
              We scale to the order — trial a programme with a small run, then
              move to full bulk manufacturing with confidence.
            </p>
          </div>
          <div className={styles.scales} data-reveal-group>
            {productionScales.map((s) => (
              <article className={styles.card} key={s.title}>
                <span className={styles.icon}>
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Who We Supply</span>
            <h2>Trusted by Organizations &amp; Institutions</h2>
          </div>
          <ul className={styles.clients} data-reveal-group>
            {bulkClients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <span className="eyebrow">Plan Your Order</span>
          <h2>Tell us your quantities, timelines and specifications.</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Share your requirements and we&apos;ll respond with a tailored
            quotation, sampling plan and production schedule.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote?type=bulk-manufacturing" className="btn btn-gold">Request a Bulk Quote</Link>
            <Link href="/manufacturing" className="btn btn-ghost-light">See Our Capacity</Link>
          </div>
        </div>
      </section>
    </>
  );
}
