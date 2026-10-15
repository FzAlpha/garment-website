import Link from "next/link";
import Hero from "@/components/home/Hero";
import UniformSolutions from "@/components/home/UniformSolutions";
import MachineryShowcase from "@/components/home/MachineryShowcase";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import CapabilitiesBand from "@/components/home/CapabilitiesBand";
import FlagshipShowcase from "@/components/home/FlagshipShowcase";
import GlobalSupply from "@/components/home/GlobalSupply";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="home">
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Uniform Solutions (primary focus) */}
      <UniformSolutions />

      {/* Section 3 — Factory Machinery (mandatory 3rd section per claude.md) */}
      <MachineryShowcase />

      {/* Section 4 — Industries We Serve */}
      <IndustriesGrid />

      {/* Section 5 — Capability (custom / manufacturing / bulk) */}
      <CapabilitiesBand />

      {/* Section 6 — Garment Collections */}
      <FlagshipShowcase />

      {/* Section 7 — India-based, global supply */}
      <GlobalSupply />

      {/* Section 8 — Why Prolink */}
      <WhyChooseUs />

      {/* Section 9 — Conversion CTA */}
      <section className="section section-dark" id="cta">
        <div className="container" data-reveal style={{ textAlign: "center", maxWidth: "48rem", marginInline: "auto" }}>
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
    </div>
  );
}
