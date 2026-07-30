import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.desc}>{description}</p> : null}
      </div>
    </section>
  );
}
