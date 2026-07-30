import * as Icons from "lucide-react";
import styles from "./GivingChannelCard.module.css";

export default function GivingChannelCard({ channel }) {
  const Icon = Icons[channel.icon] || Icons.HandCoins;

  return (
    <div className={styles.card}>
      <span className={styles.iconWrap}>
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <h3>{channel.method}</h3>
      <p className={styles.detail}>{channel.detail}</p>
      <p className={styles.note}>{channel.note}</p>
    </div>
  );
}
