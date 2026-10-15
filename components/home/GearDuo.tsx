import Link from "next/link";
import styles from "./clone.module.css";

export default function GearDuo() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.duoHead} data-anim="rise">
          <h2>Top Workout Gear For Peak Performance!</h2>
          <p>
            Discover the best of our collection, designed to power your workouts
            all year round
          </p>
        </div>

        <div className={styles.duo}>
          <Link href="/products" className={styles.bigCard} data-anim="rise">
            <span className={styles.index}>01 / Winter _2025</span>
            <h3>Top Workout Gear For Peak Performance!</h3>
            <span className={styles.pill}>Top Selling Gear</span>
          </Link>

          <Link href="/products" className={styles.bigCard} data-anim="rise">
            <span className={styles.index}>02 / Summer _2025</span>
            <h3>Latest Styles And Innovations In Workout Gear!</h3>
            <span className={styles.pill}>New Arrival</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
