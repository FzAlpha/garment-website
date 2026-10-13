import Link from "next/link";
import Image from "next/image";
import { getFeaturedMachines, plantMetrics } from "@/data/machinery";
import styles from "./MachineryShowcase.module.css";

export default function MachineryShowcase() {
  const machines = getFeaturedMachines();

  return (
    <section className="section section-dark" id="machinery">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Direct From the Factory Floor</span>
          <h2>Industrial Production Capacity &amp; Advanced Machinery</h2>
          <p className="section-intro">
            High-speed commercial sewing lines, computerized lockstitch,
            overlock and flatlock stations, cutting and finishing — the
            infrastructure behind every Prolink order.
          </p>
        </div>

        <div className={styles.grid} data-reveal-group>
          {machines.map((m) => (
            <figure className={styles.tile} key={m.id}>
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(max-width: 48rem) 50vw, 18rem"
              />
              <figcaption>
                {m.name}
                {m.model && <small>{m.model}</small>}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.metrics} data-reveal-group>
          {plantMetrics.map((m) => (
            <div className={styles.metric} key={m.label}>
              <div className={styles.metricValue}>{m.value}</div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>

        <Link href="/manufacturing" className="btn btn-gold" data-reveal>
          View Full Factory Infrastructure
        </Link>
      </div>
    </section>
  );
}
