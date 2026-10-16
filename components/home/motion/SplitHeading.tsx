/* Presentational split heading: characters wrapped in spans ([data-char]) so the
   deck's per-section entrance timeline can stagger them. Words stay intact. */

import type { ElementType } from "react";

export default function SplitHeading({
  text,
  as: Tag = "h2",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className} data-split aria-label={text}>
      {words.map((word, w) => (
        <span key={w} className="splitWord" aria-hidden="true">
          {Array.from(word).map((ch, i) => (
            <span key={i} className="splitChar" data-char>
              {ch}
            </span>
          ))}
          {w < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
