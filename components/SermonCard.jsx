import Image from "next/image";
import { Play, CalendarDays, User, BookOpen } from "lucide-react";
import { getYouTubeThumbnail, getYouTubeWatchUrl } from "@/lib/youtube";
import PlaceholderImage from "./PlaceholderImage";
import styles from "./SermonCard.module.css";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

export default function SermonCard({ sermon }) {
  const thumb = getYouTubeThumbnail(sermon.youtubeUrl);

  const media = thumb ? (
    <a
      href={getYouTubeWatchUrl(sermon.youtubeUrl)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.thumbLink}
    >
      <Image
        src={thumb}
        alt={`Watch: ${sermon.theme}`}
        fill
        sizes="(max-width: 700px) 100vw, 360px"
        className={styles.thumbImg}
      />
      <span className={styles.playBadge}>
        <Play size={18} strokeWidth={2.4} fill="currentColor" />
      </span>
    </a>
  ) : (
    <div className={styles.pendingWrap}>
      <PlaceholderImage
        label="Recording coming soon"
        tone="indigo"
        ratio="16 / 9"
        className={styles.pendingImg}
      />
    </div>
  );

  return (
    <article className={styles.card}>
      <div className={styles.media}>{media}</div>

      <div className={styles.body}>
        {sermon.series ? (
          <span className={styles.series}>{sermon.series}</span>
        ) : null}
        <h3 className={styles.theme}>{sermon.theme}</h3>

        <div className={styles.meta}>
          <span>
            <CalendarDays size={14} strokeWidth={2} />
            {formatDate(sermon.date)}
          </span>
          <span>
            <User size={14} strokeWidth={2} />
            {sermon.minister}
          </span>
        </div>

        {sermon.scriptures?.length ? (
          <div className={styles.scriptures}>
            <BookOpen size={14} strokeWidth={2} />
            <span>{sermon.scriptures.join(" · ")}</span>
          </div>
        ) : null}

        {sermon.highlights?.length ? (
          <ul className={styles.highlights}>
            {sermon.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
