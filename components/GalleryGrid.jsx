"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { galleryCategories } from "@/data/gallery";
import images from "@/data/images";
import styles from "./GalleryGrid.module.css";

const tones = ["terracotta", "acacia", "amber", "indigo"];

export default function GalleryGrid({ photos }) {
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered =
    active === "All" ? photos : photos.filter((p) => p.category === active);

  const openLightbox = (i) => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  return (
    <div>
      <div className={styles.filters}>
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={active === cat ? styles.filterActive : styles.filter}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((photo, i) => (
          <button
            key={photo.id}
            className={styles.item}
            onClick={() => openLightbox(i)}
          >
            <PlaceholderImage
              label={photo.label}
              tone={tones[i % tones.length]}
              ratio="1 / 1"
              src={images.gallery[photo.id]}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button className={styles.close} onClick={close} aria-label="Close">
              <X size={22} strokeWidth={2} />
            </button>
            <button
              className={styles.navLeft}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={26} strokeWidth={2} />
            </button>

            <motion.div
              className={styles.lightboxBox}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
            >
              <PlaceholderImage
                label={filtered[openIndex].label}
                tone={tones[openIndex % tones.length]}
                ratio="4 / 3"
                src={images.gallery[filtered[openIndex].id]}
              />
              <p className={styles.caption}>{filtered[openIndex].label}</p>
            </motion.div>

            <button
              className={styles.navRight}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={26} strokeWidth={2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
