import type { Metadata } from "next";
import CategoryListing from "@/components/catalog/CategoryListing";
import { categoryMeta } from "@/data/products";

export const metadata: Metadata = {
  title: categoryMeta["security-uniforms"].title,
  description: categoryMeta["security-uniforms"].subtitle,
};

export default function SecurityUniformsPage() {
  return <CategoryListing category="security-uniforms" />;
}
