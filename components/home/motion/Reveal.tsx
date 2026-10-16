/* Presentational reveal wrapper: tags an element with data-anim so the deck's
   per-section entrance timeline animates it (rise / fade / pop). */

import type { ElementType, ReactNode } from "react";

export default function Reveal({
  as: Tag = "div",
  variant = "rise",
  className,
  children,
  ...rest
}: {
  as?: ElementType;
  variant?: "rise" | "fade" | "pop";
  className?: string;
  children?: ReactNode;
} & Record<string, unknown>) {
  return (
    <Tag className={className} data-anim={variant} {...rest}>
      {children}
    </Tag>
  );
}
