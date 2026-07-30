import { FolderHeart, ExternalLink, CalendarDays } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import styles from "./AlbumCard.module.css";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric"
  });
}

const tones = ["terracotta", "acacia", "amber", "indigo"];

export default function AlbumCard({ album, index = 0 }) {
  return (
    <article className={styles.card}>
      <PlaceholderImage
        label={album.category}
        tone={tones[index % tones.length]}
        ratio="4 / 3"
      />
      <div className={styles.body}>
        <span className={styles.date}>
          <CalendarDays size={13} strokeWidth={2} />
          {formatDate(album.date)}
        </span>
        <h3 className={styles.title}>{album.title}</h3>
        <a
          href={album.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FolderHeart size={16} strokeWidth={2} />
          View full album
          <ExternalLink size={13} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}
