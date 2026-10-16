import PageBanner from "@/components/ui/PageBanner";
import CatalogGrid from "./CatalogGrid";
import { categoryMeta, getProductsByCategory } from "@/data/products";
import type { CategorySlug } from "@/lib/navigation";
import { banners } from "@/lib/media";

const categoryBanner: Record<string, string> = {
  "premium-formal": banners.custom,
  "premium-tshirts": banners.garments,
  "security-uniforms": banners.uniforms,
};

export default function CategoryListing({ category }: { category: CategorySlug }) {
  const meta = categoryMeta[category];
  const products = getProductsByCategory(category);

  return (
    <>
      <PageBanner
        eyebrow={meta.eyebrow}
        title={meta.title}
        subtitle={meta.subtitle}
        image={categoryBanner[category] ?? banners.products}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: meta.title },
        ]}
      />
      <section className="section">
        <div className="container">
          <CatalogGrid products={products} filters={meta.filters} />
        </div>
      </section>
    </>
  );
}
