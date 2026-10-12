import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumbs">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} aria-current={last ? "page" : undefined}>
              {c.href && !last ? <Link href={c.href}>{c.label}</Link> : c.label}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
