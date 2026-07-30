import { ImageIcon } from "lucide-react";
import styles from "./PlaceholderImage.module.css";

const tones = {
  terracotta: styles.terracotta,
  acacia: styles.acacia,
  amber: styles.amber,
  indigo: styles.indigo
};

export default function PlaceholderImage({
  label,
  tone = "terracotta",
  ratio = "4 / 3",
  className = ""
}) {
  return (
    <div
      className={`${styles.wrap} ${tones[tone] || tones.terracotta} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <ImageIcon className={styles.icon} strokeWidth={1.4} />
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
