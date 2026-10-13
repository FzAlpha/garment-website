"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import styles from "./CatalogGrid.module.css";

export interface FilterConfig {
  key: string;
  label: string;
  options: string[];
}

export default function CatalogGrid({
  products,
  filters,
}: {
  products: Product[];
  filters: FilterConfig[];
}) {
  // active[key] = Set of selected option values
  const [active, setActive] = useState<Record<string, string[]>>({});

  function toggle(key: string, value: string) {
    setActive((prev) => {
      const cur = prev[key] ?? [];
      const next = cur.includes(value)
        ? cur.filter((v) => v !== value)
        : [...cur, value];
      return { ...prev, [key]: next };
    });
  }

  const hasFilters = Object.values(active).some((a) => a.length > 0);

  const visible = useMemo(() => {
    return products.filter((p) =>
      filters.every((f) => {
        const sel = active[f.key] ?? [];
        if (sel.length === 0) return true;
        return sel.includes(p.facets[f.key]);
      })
    );
  }, [products, filters, active]);

  return (
    <>
      <div className={styles.toolbar}>
        {filters.map((f) => (
          <div className={styles.row} key={f.key}>
            <span className={styles.rowLabel}>{f.label}</span>
            {f.options.map((opt) => {
              const on = (active[f.key] ?? []).includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  className={`${styles.chip} ${on ? styles.chipActive : ""}`}
                  aria-pressed={on}
                  onClick={() => toggle(f.key, opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ))}
        <div className={styles.foot}>
          <span className={styles.count}>
            Showing {visible.length} of {products.length}
          </span>
          {hasFilters && (
            <button type="button" className={styles.clear} onClick={() => setActive({})}>
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {visible.length > 0 ? (
        <div className={styles.grid} data-reveal-group>
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          No products match those filters. Try clearing a filter or{" "}
          <a href="/quote">request a custom quote</a>.
        </p>
      )}
    </>
  );
}
