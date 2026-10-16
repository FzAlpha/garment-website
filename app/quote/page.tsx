import type { Metadata } from "next";
import { Suspense } from "react";
import PageBanner from "@/components/ui/PageBanner";
import { banners } from "@/lib/media";
import QuoteWizard from "@/components/quote/QuoteWizard";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a B2B garment or uniform quotation from Prolink — share your category, quantity, fabric preferences and tech pack for a tailored response.",
};

export default function QuotePage() {
  return (
    <>
      <PageBanner
        eyebrow="B2B Quotation"
        title="Request a Quote"
        subtitle="Tell us what you need in a few quick steps. There's no payment and no obligation — just a tailored quotation from our team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      image={banners.quote}
      />
      <section className="section">
        <div className="container">
          <Suspense fallback={<p>Loading quote form…</p>}>
            <QuoteWizard />
          </Suspense>
        </div>
      </section>
    </>
  );
}
