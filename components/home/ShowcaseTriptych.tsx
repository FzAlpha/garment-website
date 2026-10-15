import styles from "./clone.module.css";

export default function ShowcaseTriptych() {
  return (
    <section className={styles.wrap}>
      <span className={styles.ghost} aria-hidden="true" data-anim="drift-l">
        Workout
      </span>
      <div className={styles.inner}>
        <div className={styles.triptych}>
          <div className={styles.triLeft}>
            <div className={styles.photo} data-anim="rise" />
            <p className={styles.copy} data-anim="rise">
              Performance-driven gear for men—built for summer heat and winter
              cold.
            </p>
          </div>

          <div className={styles.triCenter}>
            <div className={styles.photo} data-anim="scale" />
          </div>

          <div className={styles.triRight}>
            <p className={styles.copy} data-anim="rise">
              Stay warm, stay fit. Our winter workout wear blends insulation with
              flexibility to keep you going in the toughest conditions
            </p>
            <div className={styles.photo} data-anim="rise" />
          </div>
        </div>
      </div>
    </section>
  );
}
