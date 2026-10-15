import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";
import styles from "./GlobalSupply.module.css";

const pillars: { icon: IconName; title: string; body: string }[] = [
  { icon: "industrial", title: "Made in India", body: "Manufactured at our Bhubaneswar unit with full in-house production control." },
  { icon: "palette", title: "Customized for You", body: "Designed to your fabric, colour, logo, size chart and specification." },
  { icon: "globe", title: "Supplied Worldwide", body: "Export-ready for Indian customers, international buyers and sourcing partners." },
];

export default function GlobalSupply() {
  return (
    <section className="section section-tint" id="global">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy} data-reveal>
          <span className="eyebrow">India-Based · Globally Supplied</span>
          <h2>Made in India. Customized for You. Supplied Worldwide.</h2>
          <p className="section-intro">
            Our manufacturing unit is based in India, while our vision is to
            serve customers across India and international markets — supplying
            organizations, distributors, corporates, institutions and uniform
            suppliers wherever they operate.
          </p>
          <div className={styles.actions}>
            <Link href="/global" className="btn btn-gold">
              Our Global Supply Capability
            </Link>
            <Link href="/quote" className="btn btn-ghost">
              Request a Quote
            </Link>
          </div>
        </div>

        <div className={styles.pillars} data-reveal-group>
          {pillars.map((p) => (
            <article className={styles.pillar} key={p.title}>
              <span className={styles.icon}>
                <Icon name={p.icon} />
              </span>
              <div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.body}>{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
