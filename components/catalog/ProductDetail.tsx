import type { Product } from "@/data/products";
import { categoryMeta } from "@/data/products";
import type { CategorySlug } from "@/lib/navigation";
import ProductGallery from "./ProductGallery";
import SpecTable from "./SpecTable";
import ColorSwatches from "./ColorSwatches";
import QuoteActions from "./QuoteActions";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import styles from "./ProductDetail.module.css";

const customization: Record<CategorySlug, string[]> = {
  "security-uniforms": [
    "Custom badge & number embroidery",
    "Reflective safety tape",
    "Branded buttons & shoulder tabs",
    "Institution name screen printing",
  ],
  "premium-formal": [
    "Custom chest embroidery",
    "Branded engraved buttons",
    "Contrast inner-collar tape",
    "Monogram & size tagging",
  ],
  "premium-tshirts": [
    "Screen printing",
    "High-density print",
    "DTF transfer",
    "Fine-thread embroidery",
  ],
};

const ctaLabel: Record<CategorySlug, string> = {
  "security-uniforms": "Request Quote for this Uniform",
  "premium-formal": "Request Corporate Quote",
  "premium-tshirts": "Request Bulk T-Shirt Quote",
};

export default function ProductDetail({
  product,
  crumbs,
}: {
  product: Product;
  crumbs: Crumb[];
}) {
  const meta = categoryMeta[product.category];
  return (
    <section>
      <div className={`container ${styles.top}`}>
        <Breadcrumbs items={crumbs} />
      </div>
      <div className="container" style={{ paddingBottom: "clamp(3.5rem, 8vw, 6rem)" }}>
        <div className={styles.layout}>
          <ProductGallery images={product.gallery} alt={product.title} />

          <div className={styles.info}>
            <div className={styles.head}>
              <span className={styles.category}>
                {meta.title} · {product.sku}
              </span>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.summary}>{product.summary}</p>
              <div className={styles.badges}>
                {product.badges.map((b) => (
                  <span className="badge badge-gold" key={b}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <p className={styles.description}>{product.description}</p>

            <SpecTable rows={product.specs} />

            <ColorSwatches colors={product.colors} />

            <div className={styles.custom}>
              <span className="eyebrow" style={{ marginBottom: 0 }}>
                Customization &amp; Branding
              </span>
              <ul className={styles.customList}>
                {customization[product.category].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <p className={styles.sizes}>
              <strong>Available Sizes:</strong> {product.sizes}
            </p>

            <div className={styles.actionCard}>
              <QuoteActions
                quoteItem={meta.quoteItem}
                sku={product.sku}
                ctaLabel={ctaLabel[product.category]}
                gsmSelector={product.category === "premium-tshirts"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
