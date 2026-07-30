import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowRight,
  PlayCircle,
  Music,
  Baby,
  Sparkles,
  HandHeart
} from "lucide-react";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import Countdown from "@/components/Countdown";
import VerseRotator from "@/components/VerseRotator";
import EventCard from "@/components/EventCard";
import SermonCard from "@/components/SermonCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import events from "@/data/events";
import sermons from "@/data/sermons";
import styles from "./page.module.css";

export default function HomePage() {
  const upcoming = events
    .filter((e) => e.status === "upcoming")
    .slice(0, 3);
  const latestSermons = sermons.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroEyebrow}>PEFA Kimana</span>
            <h1 className={styles.heroTitle}>
              A family of faith, worshipping together in Kimana
            </h1>
            <p className={styles.heroDesc}>
              We are a Christ centred church in the heart of Kajiado County,
              built on the Word, alive in worship, and devoted to serving our
              neighbours. Come as you are, there is a seat for you.
            </p>
            <div className={styles.heroActions}>
              <Button href="/about" variant="primary" icon={ArrowRight}>
                Plan Your Visit
              </Button>
              <Button href="/sermons" variant="secondary" icon={PlayCircle}>
                Watch Latest Sermon
              </Button>
            </div>
            <div className={styles.heroInfo}>
              <span>
                <Clock size={16} strokeWidth={2} />
                Sundays, 9:00 AM &amp; Wednesdays, 5:30 PM
              </span>
              <span>
                <MapPin size={16} strokeWidth={2} />
                Kimana Town, Kajiado County
              </span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <PlaceholderImage
              label="Sunday Worship Service, PEFA Kimana"
              tone="terracotta"
              ratio="4 / 5"
            />
            <div className={styles.heroBadge}>
              <Image
                src="/pefa-ring-logo.png"
                alt="PEFA Kimana logo"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VERSE OF THE WEEK */}
      <section className={`section ${styles.verseSection}`}>
        <div className="container">
          <VerseRotator />
        </div>
      </section>

      {/* NEXT SERVICE + UPCOMING EVENTS */}
      <section className="section">
        <div className={`container ${styles.eventsLayout}`}>
          <Countdown />

          <div className={styles.eventsList}>
            <div className={styles.eventsHead}>
              <SectionHeading
                eyebrow="What's Happening"
                title="Upcoming at PEFA Kimana"
              />
              <Link href="/events" className={styles.viewAll}>
                View all events <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
            <div className={styles.eventsGrid}>
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST SERMONS */}
      <section className={`section ${styles.sermonSection}`}>
        <div className="container">
          <div className={styles.eventsHead}>
            <SectionHeading
              eyebrow="Recent Messages"
              title="Latest From The Pulpit"
              description="Catch up on this month's Sunday highlights, scriptures and recordings."
            />
            <Link href="/sermons" className={styles.viewAll}>
              All sermons <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
          <div className={styles.sermonGrid}>
            {latestSermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRIES TEASER */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Get Involved"
            title="Find Your Place To Belong"
            align="center"
            description="From the youngest child to the oldest elder, there is a ministry family waiting for you."
          />
          <div className={styles.ministryTeaserGrid}>
            {[
              { icon: Music, name: "Worship & Music" },
              { icon: Baby, name: "Children's Ministry" },
              { icon: Sparkles, name: "Youth Ministry" },
              { icon: HandHeart, name: "Outreach & Missions" }
            ].map((m) => (
              <Link href="/ministries" key={m.name} className={styles.teaserCard}>
                <span className={styles.teaserIcon}>
                  <m.icon size={22} strokeWidth={1.8} />
                </span>
                <span>{m.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GIVING BANNER */}
      <section className={styles.givingBanner}>
        <div className={`container ${styles.givingInner}`}>
          <div>
            <h2 className={styles.givingTitle}>
              Give cheerfully, sow generously
            </h2>
            <p className={styles.givingDesc}>
              Your tithes, offerings and seed giving keep the ministry of
              PEFA Kimana alive, from Sunday worship to outreach in the
              villages around us.
            </p>
          </div>
          <Button href="/giving" variant="primary">
            Give Now
          </Button>
        </div>
      </section>
    </>
  );
}
