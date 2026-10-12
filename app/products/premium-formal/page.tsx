import type { Metadata } from "next";
import CategoryListing from "@/components/catalog/CategoryListing";
import { categoryMeta } from "@/data/products";

export const metadata: Metadata = {
  title: categoryMeta["premium-formal"].title,
  description: categoryMeta["premium-formal"].subtitle,
};

export default function PremiumFormalPage() {
  return <CategoryListing category="premium-formal" />;
}
