import { Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import GivingChannelCard from "@/components/GivingChannelCard";
import { givingCategories, givingChannels } from "@/data/giving";
import images from "@/data/images";
import styles from "./page.module.css";

export const metadata = {
  title: "Giving | PEFA Kimana"
};

export default function GivingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Giving"
        title="Give cheerfully, sow generously"
        description="Every gift, however small, becomes part of what God is doing through PEFA Kimana, in our sanctuary, our children's ministry, and our outreach to the villages around us."
        image={images.hero.giving}
      />

      <section className={`section ${styles.verseSection}`}>
        <div className="container">
          <div className={styles.verseCard}>
            <Quote size={26} strokeWidth={1.6} className={styles.verseIcon} />
            <p className={styles.verseText}>
              Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.
            </p>
            <span className={styles.verseRef}>2 Corinthians 9:7</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Where It Goes" title="Ways To Give" />
          <div className={styles.categoryGrid}>
            {givingCategories.map((c) => (
              <div key={c.id} className={styles.categoryCard}>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.channelsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="How To Give"
            title="Giving Channels"
            description="Choose whichever method works best for you. Full details for each are below."
            tone="light"
          />
          <div className={styles.channelGrid}>
            {givingChannels.map((channel) => (
              <GivingChannelCard key={channel.id} channel={channel} />
            ))}
          </div>
          <p className={styles.disclaimer}>
            All account and paybill details above will be confirmed and
            updated by the church office. If you are ever in doubt, please
            call the church directly before sending a gift.
          </p>
        </div>
      </section>
    </>
  );
}
