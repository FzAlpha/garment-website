"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./QuoteActions.module.css";

const gsmInfo: Record<string, string> = {
  "180": "180 GSM — a light-to-midweight knit with a fluid drape, ideal for summer programmes and high-volume events.",
  "200": "200 GSM — a heavier, more structured knit with a premium hand-feel and excellent shape retention.",
};

export default function QuoteActions({
  quoteItem,
  sku,
  ctaLabel,
  gsmSelector = false,
}: {
  quoteItem: string;
  sku: string;
  ctaLabel: string;
  gsmSelector?: boolean;
}) {
  const [gsm, setGsm] = useState<"180" | "200">("200");

  const params = new URLSearchParams({ item: quoteItem, sku });
  if (gsmSelector) params.set("gsm", gsm);
  const href = `/quote?${params.toString()}`;

  return (
    <div className={styles.wrap}>
      {gsmSelector && (
        <div className={styles.gsm}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            Select Fabric Weight
          </span>
          <div className={styles.toggle} role="group" aria-label="GSM selector">
            {(["180", "200"] as const).map((g) => (
              <button
                key={g}
                type="button"
                aria-pressed={gsm === g}
                onClick={() => setGsm(g)}
              >
                {g} GSM
              </button>
            ))}
          </div>
          <p className={styles.explain}>{gsmInfo[gsm]}</p>
        </div>
      )}

      <Link href={href} className={`btn ${styles.cta}`}>
        {ctaLabel}
      </Link>
      <p className={styles.note}>
        No payment required — this starts a free, no-obligation quotation.
      </p>
    </div>
  );
}
