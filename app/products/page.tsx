import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import { banners } from "@/lib/media";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import ProductCard from "@/components/catalog/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products & Collections",
  description:
    "Explore Prolink's manufacturing lines — security uniforms, premium formal wear, and 180–200 GSM knits & t-shirts.",
};

export default function ProductsPage() {
  const featured = getFeaturedProducts();
  return (
    <>
      <PageBanner
        eyebrow="Our Collections"
        title="Products & Manufacturing Lines"
        subtitle="Three specialised collections, each built around dedicated fabric programmes, sizing and finishing. Browse a category to see detailed specs and request a quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      image={banners.products}
      />

      <FlagshipShowcase />

      <section className="section section-tint">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Signature Styles</span>
            <h2>Featured Products</h2>
            <p className="section-intro">
              A selection of our most-requested models across all three lines.
            </p>
          </div>
          <div className="grid-auto" data-reveal-group>
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
