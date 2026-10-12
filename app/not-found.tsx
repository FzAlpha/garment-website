import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 4rem)" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "36rem", marginInline: "auto" }}>
        <span className="eyebrow">404</span>
        <h1 style={{ color: "var(--maroon)" }}>Page not found</h1>
        <p className="section-intro" style={{ marginInline: "auto" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn">Back to Home</Link>
          <Link href="/products" className="btn btn-ghost">Browse Products</Link>
        </div>
      </div>
    </section>
  );
}
