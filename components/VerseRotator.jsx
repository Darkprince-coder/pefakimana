"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import verses from "@/data/verses";
import styles from "./VerseRotator.module.css";

export default function VerseRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % verses.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const verse = verses[index];

  return (
    <div className={styles.wrap}>
      <Quote className={styles.quoteIcon} size={26} strokeWidth={1.6} />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.text}>{verse.text}</p>
          <span className={styles.ref}>{verse.ref}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
