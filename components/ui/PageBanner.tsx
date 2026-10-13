import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import styles from "./PageBanner.module.css";

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.inner} data-reveal-group>
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
