import { brand } from "@/lib/tokens";
import styles from "./clone.module.css";

export default function PosterLevelUp() {
  return (
    <section className={styles.wrap}>
      <span className={styles.ghost} aria-hidden="true" data-anim="drift-r">
        Fresh Fit
      </span>
      <div className={styles.inner}>
        <div className={styles.poster} data-anim="scale">
          <div className={styles.meta}>
            <span className={styles.brandTag}>{brand.name}</span>
            <span className={styles.kicker}>Level Up</span>
            <h2>With The Latest In Workout Wear</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
