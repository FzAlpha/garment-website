import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";
import styles from "./CapabilitiesBand.module.css";

const items: { icon: IconName; title: string; body: string; href: string; cta: string }[] = [
  {
    icon: "palette",
    title: "Custom Design & Development",
    body: "Bring your design, fabric, colour, logo and size chart — we develop patterns, samples and branding, then manufacture to specification.",
    href: "/custom",
    cta: "Explore customization",
  },
  {
    icon: "scissors",
    title: "In-House Manufacturing",
    body: "Cutting, stitching, embroidery, printing, finishing and quality control under one roof — from sampling to export-ready dispatch.",
    href: "/manufacturing",
    cta: "See our capability",
  },
  {
    icon: "packing",
    title: "Bulk & Institutional Orders",
    body: "Flexible small, medium and bulk production for schools, hospitals, hotels, corporates, security firms and government institutions.",
    href: "/bulk-orders",
    cta: "Plan a bulk order",
  },
];

export default function CapabilitiesBand() {
  return (
    <section className="section section-dark" id="capabilities">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Our Capability</span>
          <h2>Designed to Your Requirements, Manufactured to Your Specifications</h2>
          <p className="section-intro">
            A single partner across the full garment journey — custom design,
            in-house production and dependable bulk manufacturing.
          </p>
        </div>

        <div className={styles.grid} data-reveal-group>
          {items.map((it) => (
            <article className={styles.card} key={it.title}>
              <span className={styles.icon}>
                <Icon name={it.icon} />
              </span>
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.body}>{it.body}</p>
              <Link href={it.href} className={styles.link}>
                {it.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
