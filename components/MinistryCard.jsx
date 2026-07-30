import * as Icons from "lucide-react";
import images from "@/data/images";
import styles from "./MinistryCard.module.css";

// Tone fallback colors cycle per card so that ministries without a
// photo yet still look intentional rather than all identical.
const tones = ["terracotta", "acacia", "amber", "indigo"];

export default function MinistryCard({ ministry, index = 0 }) {
  const Icon = Icons[ministry.icon] || Icons.Church;
  const photo = images.ministries[ministry.id];
  const tone = tones[index % tones.length];

  return (
    <article
      className={`${styles.card} ${!photo ? styles[tone] : ""}`}
      style={photo ? { backgroundImage: `url(${photo})` } : undefined}
    >
      <div className={styles.overlay}>
        <span className={styles.iconWrap}>
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <h3 className={styles.name}>{ministry.name}</h3>
        <p className={styles.desc}>{ministry.description}</p>
        <div className={styles.footer}>
          <span>{ministry.meets}</span>
          <span>{ministry.leader}</span>
        </div>
      </div>
    </article>
  );
}
