"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, HandCoins } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/sermons", label: "Sermons" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>
            <Image
              src="/pefa-ring-logo.png"
              alt="PEFA Kimana logo"
              width={44}
              height={44}
              priority
            />
          </span>
          <span className={styles.logoText}>
            PEFA <em>Kimana</em>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? styles.activeLink : styles.link
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/giving"
            className={styles.giveBtn}
            onClick={() => setOpen(false)}
          >
            <HandCoins size={17} strokeWidth={2} />
            Give
          </Link>
        </nav>

        <button
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
