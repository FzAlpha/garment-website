"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/tokens";
import { primaryNav, type NavItem } from "@/lib/navigation";
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

  const isActive = (item: NavItem) =>
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href)) ||
    (item.menu?.some((m) => pathname.startsWith(m.href)) ?? false) ||
    (item.groups?.some(
      (g) =>
        pathname.startsWith(g.href) ||
        g.items.some((m) => pathname.startsWith(m.href))
    ) ??
      false);

  return (
    <header
      className={`${styles.header} ${solid ? styles.solid : ""} ${
        isHome ? styles.homeHeader : ""
      }`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={`${brand.name} home`}>
          <span className={styles.logo}>
            <Image
              src={brand.mark}
              alt=""
              width={40}
              height={40}
              className={styles.logoImg}
              priority
            />
          </span>
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
            item.groups ? (
              <div key={item.label} className={styles.hasMenu}>
                <Link
                  href={item.href}
                  className={styles.link}
                  data-active={isActive(item)}
                >
                  {item.label}
                </Link>
                <div className={`${styles.menu} ${styles.mega}`} role="menu">
                  {item.groups.map((g) => (
                    <div key={g.href} className={styles.megaCol}>
                      <Link href={g.href} className={styles.megaHead}>
                        {g.label}
                      </Link>
                      {g.items.map((m) => (
                        <Link
                          key={m.href}
                          href={m.href}
                          className={styles.menuLink}
                          role="menuitem"
                        >
                          {m.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : item.menu ? (
              <div key={item.label} className={styles.hasMenu}>
                <Link
                  href={item.href}
                  className={styles.link}
                  data-active={isActive(item)}
                >
                  {item.label}
                </Link>
                <div
                  className={`${styles.menu} ${item.menu.length > 5 ? styles.menuWide : ""}`}
                  role="menu"
                >
                  {item.menu.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      className={styles.menuLink}
                      role="menuitem"
                    >
                      {m.label}
                      <small>{m.blurb}</small>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={styles.link}
                data-active={isActive(item)}
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
