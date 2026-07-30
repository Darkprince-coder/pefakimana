import { ImageIcon } from "lucide-react";
import styles from "./PlaceholderImage.module.css";

const tones = {
  terracotta: styles.terracotta,
  acacia: styles.acacia,
  amber: styles.amber,
  indigo: styles.indigo
};

// Renders a real photo when src is given, otherwise a tone-colored box
// with an icon and label. Uses a plain CSS background-image rather than
// next/image on purpose: if the src path 404s, the browser simply does
// not paint it and the tone's background-color (the fallback) shows
// through underneath, no broken image icon, no JS needed to detect it.
export default function PlaceholderImage({
  label,
  tone = "terracotta",
  ratio = "4 / 3",
  className = "",
  src,
  caption
}) {
  const toneClass = tones[tone] || tones.terracotta;

  return (
    <div
      className={`${styles.wrap} ${toneClass} ${className}`}
      style={{
        aspectRatio: ratio,
        backgroundImage: src ? `url(${src})` : undefined,
        backgroundSize: src ? "cover" : undefined,
        backgroundPosition: src ? "center" : undefined,
        backgroundRepeat: src ? "no-repeat" : undefined
      }}
    >
      {!src ? (
        <>
          <ImageIcon className={styles.icon} strokeWidth={1.4} />
          {label ? <span className={styles.label}>{label}</span> : null}
        </>
      ) : null}

      {src && caption ? (
        <span className={styles.caption}>{caption}</span>
      ) : null}
    </div>
  );
}
