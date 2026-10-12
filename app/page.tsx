import Link from "next/link";
import Hero from "@/components/home/Hero";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import MachineryShowcase from "@/components/home/MachineryShowcase";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Flagship Collections */}
      <FlagshipShowcase />

      {/* Section 3 — Factory Machinery (mandatory 3rd section) */}
      <MachineryShowcase />

      {/* Section 4 — Why Prolink */}
      <WhyChooseUs />

      {/* Section 5 — Conversion CTA */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "48rem", marginInline: "auto" }}>
          <span className="eyebrow">Let&apos;s Build Your Order</span>
          <h2>
            Ready to discuss your bulk garment or customized uniform
            requirements?
          </h2>
          <p className="section-intro" style={{ marginInline: "auto" }}>
            Share your tech pack, quantities, and timelines — our team responds
            with a tailored quotation and sampling plan.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/quote" className="btn btn-gold">
              Get Custom Quotation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
