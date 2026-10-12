import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/catalog/ProductDetail";
import { getProduct, getProductsByCategory, categoryMeta } from "@/data/products";

const CATEGORY = "premium-tshirts" as const;

export function generateStaticParams() {
  return getProductsByCategory(CATEGORY).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(CATEGORY, slug);
  if (!product) return { title: "Product Not Found" };
  return { title: product.title, description: product.summary };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(CATEGORY, slug);
  if (!product) notFound();

  return (
    <ProductDetail
      product={product}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: categoryMeta[CATEGORY].title, href: `/products/${CATEGORY}` },
        { label: product.title },
      ]}
    />
  );
}
