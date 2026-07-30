"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import styles from "./Countdown.module.css";

function getNextSunday9am() {
  const now = new Date();
  const result = new Date(now);
  const day = now.getDay();
  let daysToAdd = (7 - day) % 7;
  result.setDate(now.getDate() + daysToAdd);
  result.setHours(9, 0, 0, 0);
  if (result <= now) {
    result.setDate(result.getDate() + 7);
  }
  return result;
}

function diff(target) {
  const now = new Date();
  const ms = Math.max(target - now, 0);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  return { days, hours, minutes };
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const target = getNextSunday9am();
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Clock size={18} strokeWidth={2} />
        <span>Next Sunday Service</span>
      </div>
      {time ? (
        <div className={styles.blocks}>
          <div className={styles.block}>
            <strong>{time.days}</strong>
            <span>days</span>
          </div>
          <div className={styles.block}>
            <strong>{time.hours}</strong>
            <span>hrs</span>
          </div>
          <div className={styles.block}>
            <strong>{time.minutes}</strong>
            <span>mins</span>
          </div>
        </div>
      ) : (
        <div className={styles.blocks} aria-hidden="true">
          <div className={styles.block}><strong>-</strong><span>days</span></div>
          <div className={styles.block}><strong>-</strong><span>hrs</span></div>
          <div className={styles.block}><strong>-</strong><span>mins</span></div>
        </div>
      )}
      <p className={styles.note}>9:00 AM, PEFA Kimana Main Sanctuary</p>
    </div>
  );
}
