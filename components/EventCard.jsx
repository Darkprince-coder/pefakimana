import { CalendarDays, Clock, MapPin } from "lucide-react";
import images from "@/data/images";
import PlaceholderImage from "./PlaceholderImage";
import styles from "./EventCard.module.css";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    month: d.toLocaleDateString("en-US", { month: "short" })
  };
}

export default function EventCard({ event }) {
  const { day, month } = formatDate(event.date);
  const poster = images.events[event.id];

  return (
    <article className={styles.card}>
      <div className={styles.poster}>
        <PlaceholderImage
          label="Event Poster"
          tone="amber"
          ratio="3 / 4"
          src={poster}
        />
        <div className={styles.dateBlock}>
          <span className={styles.day}>{day}</span>
          <span className={styles.month}>{month}</span>
        </div>
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{event.category}</span>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.desc}>{event.description}</p>

        <div className={styles.meta}>
          <span>
            <Clock size={14} strokeWidth={2} />
            {event.time}
          </span>
          <span>
            <MapPin size={14} strokeWidth={2} />
            {event.location}
          </span>
        </div>
      </div>
    </article>
  );
}
