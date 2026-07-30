import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>
              <Image
                src="/pefa-ring-logo.png"
                alt="PEFA Kimana logo"
                width={40}
                height={40}
              />
            </span>
            <span className={styles.logoText}>PEFA Kimana</span>
          </div>
          <p>
            A Christ centred family of believers in Kimana, Kajiado County,
            worshipping, growing and serving together.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.8} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={18} strokeWidth={1.8} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.links}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/ministries">Ministries</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/sermons">Sermons</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Connect</h4>
          <ul className={styles.links}>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/giving">Give Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Visit Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={16} strokeWidth={1.8} />
              <span>Kimana Town, Kajiado County, Kenya</span>
            </li>
            <li>
              <Phone size={16} strokeWidth={1.8} />
              <span>+254 700 000 000</span>
            </li>
            <li>
              <Mail size={16} strokeWidth={1.8} />
              <span>info@pefakimana.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© 2026 PEFA Kimana. All rights reserved.</span>
        <span className={styles.tagline}>Pentecostal Evangelistic Fellowship of Africa</span>
      </div>
    </footer>
  );
}
