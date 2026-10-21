import Image from "next/image";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { img, banners } from "@/lib/media";
import styles from "./PageBanner.module.css";

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image = banners.default,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  /** Unsplash photo id from lib/media `banners`. */
  image?: string;
}) {
  return (
    <section className={styles.banner}>
      <div className={styles.panel}>
        <Image
          src={image.startsWith("/") ? image : img(image, 1600)}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.img}
        />
        <span className={styles.scrim} aria-hidden="true" />
        <div className={`container ${styles.inner}`} data-reveal-group>
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
