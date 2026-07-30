"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import styles from "./page.module.css";

export default function EventsList({ events }) {
  const [tab, setTab] = useState("upcoming");
  const filtered = events.filter((e) => e.status === tab);

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={tab === "upcoming" ? styles.tabActive : styles.tab}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={tab === "past" ? styles.tabActive : styles.tab}
          onClick={() => setTab("past")}
        >
          Past
        </button>
      </div>

      <div className={styles.list}>
        {filtered.length ? (
          filtered.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className={styles.empty}>Nothing to show here yet.</p>
        )}
      </div>
    </>
  );
}
