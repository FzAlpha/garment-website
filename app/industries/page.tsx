import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import { banners } from "@/lib/media";
import Icon from "@/components/ui/Icon";
import { industries } from "@/data/industries";
import styles from "./industries.module.css";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Prolink manufactures uniforms and garments for education, healthcare, security, hospitality, corporate, manufacturing, industrial, construction, retail, logistics and government institutions across India and worldwide.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Industries We Serve"
        title="One Manufacturing Partner for Every Sector"
        subtitle="From classrooms to construction sites, we outfit the teams that keep organizations running — with uniforms and garments built for the demands of each industry."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      image={banners.industries}
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid} data-reveal-group>
            {industries.map((ind) => (
              <Link key={ind.label} href={ind.href} className={styles.card}>
                <span className={styles.icon}>
                  <Icon name={ind.icon} />
                </span>
                <h2 className={styles.label}>{ind.label}</h2>
                <p className={styles.blurb}>{ind.blurb}</p>
                <span className={styles.cta}>View uniforms →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "46rem", marginInline: "auto" }}>
          <span className="eyebrow">Can&apos;t See Your Sector?</span>
          <h2>We manufacture customized uniforms for any organization.</h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Tell us about your team and requirements — we build a uniform
            programme to fit.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/quote?type=uniforms" className="btn btn-gold">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
