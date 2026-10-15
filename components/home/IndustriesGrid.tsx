import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { industries } from "@/data/industries";
import styles from "./IndustriesGrid.module.css";

export default function IndustriesGrid() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Industries We Serve</span>
          <h2>One Manufacturing Partner, Every Sector</h2>
          <p className="section-intro">
            From classrooms to construction sites, we outfit the teams that keep
            organizations running — with uniforms built for the demands of each
            industry.
          </p>
        </div>

        <div className={styles.grid} data-reveal-group>
          {industries.map((ind) => (
            <Link key={ind.label} href={ind.href} className={styles.tile}>
              <span className={styles.icon}>
                <Icon name={ind.icon} size="1.35rem" />
              </span>
              <span className={styles.text}>
                <span className={styles.label}>{ind.label}</span>
                <span className={styles.blurb}>{ind.blurb}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
