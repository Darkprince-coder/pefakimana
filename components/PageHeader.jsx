import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, description, image }) {
  return (
    <section
      className={styles.header}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(23, 28, 48, 0.6), rgba(23, 28, 48, 0.78)), url(${image})`
            }
          : undefined
      }
    >
      <div className={`container ${styles.inner}`}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.desc}>{description}</p> : null}
      </div>
    </section>
  );
}
