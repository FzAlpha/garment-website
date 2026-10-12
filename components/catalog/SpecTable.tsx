import type { SpecRow } from "@/data/products";
import styles from "./SpecTable.module.css";

export default function SpecTable({
  rows,
  caption = "Technical Specifications",
}: {
  rows: SpecRow[];
  caption?: string;
}) {
  return (
    <table className={styles.table}>
      <caption>{caption}</caption>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <th scope="row">{r.label}</th>
            <td>{r.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
