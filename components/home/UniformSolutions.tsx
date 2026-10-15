import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { uniformSectors } from "@/data/uniforms";
import styles from "./UniformSolutions.module.css";

export default function UniformSolutions() {
  return (
    <section className="section section-tint" id="uniforms">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Uniform Solutions</span>
          <h2>Customized Uniforms for Every Sector</h2>
          <p className="section-intro">
            Our core focus — complete, brand-aligned uniform programmes
            manufactured to your specifications for institutions, companies and
            organizations across India and worldwide.
          </p>
        </div>

        <div className={styles.grid} data-reveal-group>
          {uniformSectors.map((s) => (
            <Link key={s.slug} href={`/uniforms/${s.slug}`} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={s.icon} />
              </span>
              <h3 className={styles.title}>{s.label}</h3>
              <p className={styles.blurb}>{s.blurb}</p>
              <span className={styles.cta}>View solutions →</span>
            </Link>
          ))}
        </div>

        <div className={styles.foot} data-reveal>
          <Link href="/uniforms" className="btn btn-gold">
            Explore All Uniform Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
