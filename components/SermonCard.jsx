"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Play,
  CalendarDays,
  User,
  BookOpen,
  X,
  ArrowRight,
  Youtube
} from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const thumb = getYouTubeThumbnail(sermon.youtubeUrl);
  const watchUrl = getYouTubeWatchUrl(sermon.youtubeUrl);

  const media = thumb ? (
    <a
      href={watchUrl}
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
    <PlaceholderImage
      label="Recording coming soon"
      tone="indigo"
      ratio="16 / 9"
    />
  );

  return (
    <>
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

          {sermon.intro?.length ? (
            <p className={styles.preview}>{sermon.intro[0]}</p>
          ) : null}

          <button
            type="button"
            className={styles.readMore}
            onClick={() => setOpen(true)}
          >
            Read full highlight
            <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>
      </article>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className={styles.modalClose}
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X size={20} strokeWidth={2} />
              </button>

              <div className={styles.modalScroll}>
                {sermon.series ? (
                  <span className={styles.series}>{sermon.series}</span>
                ) : null}
                <h2 className={styles.modalTheme}>{sermon.theme}</h2>

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

                {watchUrl ? (
                  <a
                    href={watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.watchLink}
                  >
                    <Youtube size={17} strokeWidth={2} />
                    Watch the full service
                  </a>
                ) : null}

                {sermon.intro?.length ? (
                  <ul className={styles.bulletList}>
                    {sermon.intro.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {sermon.sections?.map((section, i) => (
                  <div key={i} className={styles.section}>
                    <h3 className={styles.sectionHeading}>
                      {section.heading}
                    </h3>
                    <ul className={styles.bulletList}>
                      {section.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                    {section.application ? (
                      <p className={styles.application}>
                        <ArrowRight size={14} strokeWidth={2.4} />
                        {section.application}
                      </p>
                    ) : null}
                  </div>
                ))}

                {sermon.conclusion?.length ? (
                  <div className={styles.conclusion}>
                    <h3 className={styles.sectionHeading}>Conclusion</h3>
                    <ul className={styles.bulletList}>
                      {sermon.conclusion.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {sermon.closingQuote ? (
                  <p className={styles.closingQuote}>
                    &ldquo;{sermon.closingQuote}&rdquo;
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
