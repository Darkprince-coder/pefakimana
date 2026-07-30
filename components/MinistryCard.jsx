import * as Icons from "lucide-react";
import styles from "./MinistryCard.module.css";

export default function MinistryCard({ ministry }) {
  const Icon = Icons[ministry.icon] || Icons.Church;

  return (
    <article className={styles.card}>
      <span className={styles.iconWrap}>
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <h3 className={styles.name}>{ministry.name}</h3>
      <p className={styles.desc}>{ministry.description}</p>
      <div className={styles.footer}>
        <span>{ministry.meets}</span>
        <span>{ministry.leader}</span>
      </div>
    </article>
  );
}
