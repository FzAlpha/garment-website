import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/ui/PageBanner";
import { banners } from "@/lib/media";
import Icon from "@/components/ui/Icon";
import { machines, factoryWorkflow, plantMetrics } from "@/data/machinery";
import { productionScales } from "@/data/capabilities";
import styles from "./manufacturing.module.css";

export const metadata: Metadata = {
  title: "Manufacturing & Quality",
  description:
    "Inside the Prolink factory — cutting, computerized stitching, embroidery, printing, finishing and AQL 2.5 quality control, with flexible small, medium and bulk production for customized garments and uniforms.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageBanner
        eyebrow="Inside the Factory"
        title="Manufacturing Capabilities & Advanced Machinery"
        subtitle="A vertically integrated plant — from CAD pattern-making and precision cutting to computerized stitching lines and export-ready finishing."
        crumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
      image={banners.manufacturing}
      />

      {/* Machinery gallery */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Shop-Floor Equipment</span>
            <h2>Industrial Sewing &amp; Finishing Machinery</h2>
            <p className="section-intro">
              Single-needle lockstitch, 4/5-thread overlock, flatlock, bar-tack
              and buttonholing, straight-knife cutting, and steam/heat-press
              finishing stations.
            </p>
          </div>
          <div className={styles.gallery} data-reveal-group>
            {machines.map((m) => (
              <figure className={styles.tile} key={m.id}>
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 48rem) 50vw, 18rem"
                />
                <span className={styles.cat}>{m.category}</span>
                <figcaption>
                  {m.name}
                  {m.model && <small>{m.model}</small>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Factory workflow */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">How Orders Are Made</span>
            <h2>Six-Stage Production Workflow</h2>
          </div>
          <div className={styles.workflow} data-reveal-group>
            {factoryWorkflow.map((s) => (
              <article className={styles.step} key={s.step}>
                <div className={styles.stepNum}>{String(s.step).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p>{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Production flexibility */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Production Flexibility</span>
            <h2>Small, Medium &amp; Bulk Production</h2>
            <p className="section-intro">
              We handle small, medium and bulk requirements depending on the
              product and order — so you can trial a programme before scaling to
              volume.
            </p>
          </div>
          <div className={styles.scales} data-reveal-group>
            {productionScales.map((s) => (
              <article className={styles.scaleCard} key={s.title}>
                <span className={styles.scaleIcon}>
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plant credentials */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Plant Credentials</span>
            <h2>Capacity You Can Plan Around</h2>
          </div>
          <div className={styles.metrics} data-reveal-group>
            {plantMetrics.map((m) => (
              <div className={styles.metric} key={m.label}>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/quote?type=bulk-manufacturing" className="btn btn-gold">
              Inquire for Contract Manufacturing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
