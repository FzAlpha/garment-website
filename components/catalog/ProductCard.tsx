import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.category}/${product.slug}`;
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.media} aria-label={product.title}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 48rem) 100vw, 20rem"
        />
        <span className={styles.sku}>{product.sku}</span>
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
            {product.title}
          </Link>
        </h3>
        <p className={styles.summary}>{product.summary}</p>
        <div className={styles.tags}>
          {product.tags.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className={styles.foot}>
          <Link href={href} className="btn btn-small btn-ghost">
            View Details &amp; Specs
          </Link>
        </div>
      </div>
    </article>
  );
}
