import type { ColorSwatch } from "@/data/products";
import styles from "./ColorSwatches.module.css";

export default function ColorSwatches({ colors }: { colors: ColorSwatch[] }) {
  return (
    <div className={styles.wrap}>
      <span className="eyebrow" style={{ marginBottom: 0 }}>
        Available Colours
      </span>
      <div className={styles.row}>
        {colors.map((c) => (
          <span className={styles.swatch} key={c.name}>
            <span
              className={styles.dot}
              style={{ background: c.hex }}
              aria-hidden="true"
            />
            {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}
