import type { Metadata } from "next";
import CategoryListing from "@/components/catalog/CategoryListing";
import { categoryMeta } from "@/data/products";

export const metadata: Metadata = {
  title: categoryMeta["premium-tshirts"].title,
  description: categoryMeta["premium-tshirts"].subtitle,
};

export default function PremiumTshirtsPage() {
  return <CategoryListing category="premium-tshirts" />;
}
