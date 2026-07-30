import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import MinistryCard from "@/components/MinistryCard";
import Button from "@/components/Button";
import ministries from "@/data/ministries";
import images from "@/data/images";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "Ministries | PEFA Kimana"
};

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ministries"
        title="Serving God and one another"
        description="Every ministry at PEFA Kimana exists to help someone take a next step, in worship, in discipleship, or in service to our community."
        image={images.hero.ministries}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Where You Can Serve"
            title="Our Ministry Families"
          />
          <div className={styles.grid}>
            {ministries.map((ministry, i) => (
              <MinistryCard key={ministry.id} ministry={ministry} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Not sure where to start?</h2>
            <p className={styles.ctaDesc}>
              Reach out and our team will help you find a ministry that
              matches your gifts, your season of life and your schedule.
            </p>
          </div>
          <Button href="/contact" variant="invert" icon={ArrowRight}>
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}
