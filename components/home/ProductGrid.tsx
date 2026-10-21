"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./clone.module.css";
import SplitHeading from "./motion/SplitHeading";
import Reveal from "./motion/Reveal";
import { useEnter } from "./motion/deck/useEnter";
import { addSplit, addAnim } from "./motion/deck/enterHelpers";
import { bg, home } from "@/lib/media";

const Arrow = () => (
  <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const Label = ({ name, meta }: { name: string; meta: string }) => (
  <span className={styles.label}>
    <span>
      <b>{name}</b>
      <small>{meta}</small>
    </span>
    <Arrow />
  </span>
);

// 8 representative products across the manufacturing lines.
const PRODUCTS = [
  { name: "Executive Oxford Shirt", meta: "Premium Formal", href: "/products/premium-formal" },
  { name: "Security Guard Uniform", meta: "Made to Order", href: "/products/security-uniforms" },
  { name: "Healthcare Scrub Set", meta: "Service Sector", href: "/uniforms/healthcare" },
  { name: "Corporate Polo Shirt", meta: "Premium Knit", href: "/products/premium-tshirts" },
  { name: "School Uniform Set", meta: "Institutional", href: "/uniforms/education" },
  { name: "Industrial Workwear", meta: "Protective", href: "/uniforms/industrial" },
  { name: "Hospitality Apparel", meta: "Service Sector", href: "/uniforms/hospitality" },
  { name: "Combed Cotton Tee", meta: "Premium Knit", href: "/products/premium-tshirts" },
];

// Local image overrides for specific product cards (index → CSS url()).
const productImageOverride: Record<number, string> = {
  1: 'url("/images/showcase/security-guard.jpg")', // Security Guard Uniform
  3: 'url("/images/showcase/corporate-polo.jpg")', // Corporate Polo Shirt
  4: 'url("/images/showcase/school-uniform.jpg")', // School Uniform Set
  5: 'url("/images/showcase/industrial-workwear.jpg")', // Industrial Workwear
  6: 'url("/images/showcase/hospitality-apparel.jpg")', // Hospitality Apparel
};
const productImage = (i: number) =>
  productImageOverride[i] ?? bg(home.products[i], 500);

export default function ProductGrid() {
  const root = useRef<HTMLElement>(null);
  const row1 = [0, 1, 2, 3];
  const row2 = [4, 5, 6, 7];

  useEnter(root, (tl, r) => {
    addSplit(tl, r, 0);
    addAnim(tl, r, "rise", 0.15, 0.07); // 8-card left→right wave
    addAnim(tl, r, "fade", ">-0.1");
  });

  return (
    <section className={styles.wrap} data-fit="panel" ref={root}>
      <div className={styles.inner}>
        <SplitHeading
          as="h2"
          text="Our Garment & Uniform Range!"
          className={styles.gridHead}
        />

        <div className={styles.grid} data-grid>
          {row1.map((i) => (
            <Link key={i} href={PRODUCTS[i].href} className={styles.product} data-anim="rise">
              <span
                className={styles.media}
                aria-hidden="true"
                style={{ backgroundImage: productImage(i) }}
              />
              <Label name={PRODUCTS[i].name} meta={PRODUCTS[i].meta} />
            </Link>
          ))}
          {row2.map((i) => (
            <Link key={i} href={PRODUCTS[i].href} className={styles.product} data-anim="rise">
              <span
                className={styles.media}
                aria-hidden="true"
                style={{ backgroundImage: productImage(i) }}
              />
              <span className={styles.tag}>
                <span className={styles.pill}>Bulk MOQ</span>
              </span>
              <Label name={PRODUCTS[i].name} meta={PRODUCTS[i].meta} />
            </Link>
          ))}
        </div>

        <Reveal className={styles.seeAll} variant="fade">
          <Link href="/garments" className="btn">
            View All Garments
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
