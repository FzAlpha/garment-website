import styles from "./WhyChooseUs.module.css";

const icons = {
  techpack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  ),
  moq: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h18M3 12h18M3 17h18" /><path d="M7 4v3M17 10v3M11 14v3" />
    </svg>
  ),
  sampling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8z" />
    </svg>
  ),
  dispatch: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 4h13v10H1zM14 8h4l3 3v3h-7" /><circle cx="6" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" />
    </svg>
  ),
};

const values = [
  { icon: icons.techpack, title: "Custom Tech-Pack Execution", body: "Send a spec sheet or sketch — we translate it into a production-ready garment with accurate fabric, GSM and trims." },
  { icon: icons.moq, title: "Flexible MOQs for Institutions", body: "Order tiers from pilot runs to 2,000+ pieces, with sizing programmes tuned for schools, security firms and corporates." },
  { icon: icons.sampling, title: "End-to-End Sampling", body: "In-house pattern making, CAD markers and pre-production samples so you approve before bulk begins." },
  { icon: icons.dispatch, title: "On-Time Dispatch", body: "Line-balanced production and barcoded, export-ready packaging keep delivery dates dependable." },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-tint" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Prolink</span>
          <h2>Built for Institutions &amp; Brands at Scale</h2>
          <p className="section-intro">
            A single partner for design, sampling, bulk manufacturing and
            dispatch — with the quality controls demanding buyers expect.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((v) => (
            <article className={styles.card} key={v.title}>
              <div className={styles.icon}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
