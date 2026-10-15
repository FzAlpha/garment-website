import styles from "./clone.module.css";

export default function PosterThermal() {
  return (
    <section className={styles.wrap}>
      <span className={styles.ghost} aria-hidden="true" data-anim="drift-l">
        Your Next Workout
      </span>
      <div className={styles.inner}>
        <div className={styles.poster} data-anim="scale">
          <div className={styles.meta}>
            <span className={styles.kicker}>Liner Short &amp; Inner Thermal</span>
            <div className={styles.rows} style={{ marginTop: "0.75rem" }}>
              <span>Liner Short &amp; Inner Thermal</span>
              <span>12 / 06 / 2024 Delivery</span>
            </div>
            <div className={styles.rows}>
              <span>Fall / Winter 2024</span>
              <span>Shocks Shoe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
