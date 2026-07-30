import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark"
}) {
  return (
    <div
      className={`${styles.wrap} ${align === "center" ? styles.center : ""} ${
        tone === "light" ? styles.light : ""
      }`}
    >
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </div>
  );
}
