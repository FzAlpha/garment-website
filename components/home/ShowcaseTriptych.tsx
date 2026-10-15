import Image from "next/image";
import styles from "./clone.module.css";

export default function ShowcaseTriptych() {
  return (
    <section className={styles.wrap}>
      <span className={styles.ghost} aria-hidden="true">
        Workout
      </span>
      <div className={styles.inner}>
        <div className={styles.triptych} data-reveal-group>
          <div className={styles.triLeft}>
            <div className={styles.photo}>
              <Image src="/images/hero-factory.jpg" alt="" width={400} height={533} />
            </div>
            <p className={styles.copy}>
              Performance-driven gear for men—built for summer heat and winter
              cold.
            </p>
          </div>

          <div className={styles.triCenter}>
            <div className={styles.photo}>
              <Image src="/images/hero-factory.jpg" alt="" width={520} height={760} />
            </div>
          </div>

          <div className={styles.triRight}>
            <p className={styles.copy}>
              Stay warm, stay fit. Our winter workout wear blends insulation with
              flexibility to keep you going in the toughest conditions
            </p>
            <div className={styles.photo}>
              <Image src="/images/hero-factory.jpg" alt="" width={400} height={533} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
