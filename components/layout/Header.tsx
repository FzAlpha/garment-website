"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/tokens";
import { categories, primaryNav } from "@/lib/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Header is transparent only at the top of the homepage; solid everywhere else.
  const solid = !isHome || scrolled;

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${brand.name} home`}>
          <Image
            src={brand.logo}
            alt=""
            width={40}
            height={40}
            className={styles.logo}
            priority
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{brand.name}</span>
            <span className={styles.brandSub}>Garment Manufacturing</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
        </button>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          {primaryNav.map((item) =>
            item.hasMenu ? (
              <div key={item.href} className={styles.hasMenu}>
                <Link
                  href={item.href}
                  className={styles.link}
                  data-active={pathname.startsWith("/products")}
                >
                  {item.label}
                </Link>
                <div className={styles.menu} role="menu">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.href}
                      className={styles.menuLink}
                      role="menuitem"
                    >
                      {c.label}
                      <small>{c.blurb}</small>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={styles.link}
                data-active={pathname === item.href}
              >
                {item.label}
              </Link>
            )
          )}

          <Link href="/quote" className={`btn ${styles.cta}`}>
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
