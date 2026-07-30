"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SermonCard from "@/components/SermonCard";
import styles from "./page.module.css";

export default function SermonsList({ sermons }) {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState("All");

  const allSeries = useMemo(
    () => ["All", ...new Set(sermons.map((s) => s.series).filter(Boolean))],
    [sermons]
  );

  const filtered = sermons.filter((s) => {
    const matchesSeries = series === "All" || s.series === series;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      s.theme.toLowerCase().includes(q) ||
      s.minister.toLowerCase().includes(q) ||
      s.scriptures.some((ref) => ref.toLowerCase().includes(q));
    return matchesSeries && matchesQuery;
  });

  return (
    <>
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <Search size={17} strokeWidth={2} />
          <input
            type="text"
            placeholder="Search by theme, minister or scripture"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.seriesFilters}>
          {allSeries.map((s) => (
            <button
              key={s}
              onClick={() => setSeries(s)}
              className={series === s ? styles.pillActive : styles.pill}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length ? (
        <div className={styles.grid}>
          {filtered.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          No sermons match that search just yet, try a different theme,
          minister or scripture.
        </p>
      )}
    </>
  );
}
