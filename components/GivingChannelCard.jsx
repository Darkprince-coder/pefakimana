"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { Copy, Check } from "lucide-react";
import styles from "./GivingChannelCard.module.css";

export default function GivingChannelCard({ channel }) {
  const Icon = Icons[channel.icon] || Icons.HandCoins;
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(channel.detail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      // Clipboard access can fail in some browsers/contexts, fail quietly.
    }
  }

  return (
    <div className={styles.card}>
      <span className={styles.iconWrap}>
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <h3>{channel.method}</h3>

      {channel.copyable ? (
        <button
          type="button"
          className={styles.copyRow}
          onClick={handleCopy}
          aria-label={`Copy ${channel.method} details`}
        >
          <span className={styles.detail}>{channel.detail}</span>
          {copied ? (
            <Check size={16} strokeWidth={2.4} className={styles.copiedIcon} />
          ) : (
            <Copy size={16} strokeWidth={2} className={styles.copyIcon} />
          )}
        </button>
      ) : (
        <p className={styles.detail}>{channel.detail}</p>
      )}

      {copied ? (
        <span className={styles.copiedTag}>Copied to clipboard</span>
      ) : (
        <p className={styles.note}>{channel.note}</p>
      )}
    </div>
  );
}
