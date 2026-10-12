"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const unique = Array.from(new Set(images));
  const [active, setActive] = useState(unique[0]);

  return (
    <div className={styles.wrap}>
      <div className={styles.main}>
        <Image
          src={active}
          alt={alt}
          fill
          priority
          sizes="(max-width: 56rem) 100vw, 32rem"
        />
      </div>
      {unique.length > 1 && (
        <div className={styles.thumbs}>
          {unique.map((img, i) => (
            <button
              type="button"
              key={img}
              className={`${styles.thumb} ${active === img ? styles.active : ""}`}
              onClick={() => setActive(img)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={active === img}
            >
              <Image src={img} alt="" fill sizes="5rem" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
