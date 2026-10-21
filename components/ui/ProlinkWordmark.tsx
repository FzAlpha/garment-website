import React from "react";

export interface ProlinkWordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Cap height of the logotype in px (or any CSS length). Drives font-size. */
  height?: number | string;
  width?: number | string;
  className?: string;
  color?: string;
}

/**
 * The PROLINK logotype, set in Jost — a clean geometric ("linear") sans — in
 * uppercase with wide tracking. Replaces the earlier ornate SVG wordmark.
 */
export default function ProlinkWordmark({
  height = 24,
  width,
  className = "",
  color = "currentColor",
  style,
  ...props
}: ProlinkWordmarkProps) {
  const fontSize = typeof height === "number" ? `${height}px` : height;
  return (
    <span
      className={className}
      aria-label="Prolink"
      role="img"
      style={{
        display: "inline-block",
        fontFamily: "var(--font-jost), system-ui, -apple-system, Segoe UI, sans-serif",
        fontWeight: 600,
        fontSize,
        lineHeight: 1,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
        width,
        /* letter-spacing adds trailing space; pad so the K isn't clipped and the
           word stays optically centred. */
        paddingLeft: "0.1em",
        ...style,
      }}
      {...props}
    >
      Prolink
    </span>
  );
}
