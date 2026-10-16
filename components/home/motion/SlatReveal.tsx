/* Presentational "Venetian-blind" container. The container is sliced into 12
   horizontal strips, each showing its own slice of the same background
   image/gradient (background-size:100% 1200% + stepped position). The deck's
   per-section entrance timeline animates [data-strip] (scaleY 0→1) and
   [data-slat-content]; this component only renders the markup. */

import type { CSSProperties, ReactNode } from "react";
import styles from "./SlatReveal.module.css";

const STRIPS = 12;

export default function SlatReveal({
  img,
  className,
  style,
  children,
}: {
  /** Any CSS background value (gradient now; a url() when photos land). */
  img: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className={`${styles.wrap} ${className ?? ""}`}
      style={{ ...style, ["--img" as string]: img }}
      data-slat
    >
      <div className={styles.slats} aria-hidden="true">
        {Array.from({ length: STRIPS }).map((_, i) => (
          <span
            key={i}
            className={styles.slat}
            data-strip
            style={{ ["--i" as string]: i, ["--n" as string]: STRIPS - 1 }}
          />
        ))}
      </div>
      {children != null && (
        <div className={styles.content} data-slat-content>
          {children}
        </div>
      )}
    </div>
  );
}
