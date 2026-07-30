import { Target, Eye, Heart, Clock, Shirt, Baby } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import leadership from "@/data/leadership";
import styles from "./page.module.css";

export const metadata = {
  title: "About | PEFA Kimana"
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Rooted in Kimana, reaching beyond"
        description="PEFA Kimana is part of the Pentecostal Evangelistic Fellowship of Africa, a family of believers committed to sound teaching, honest worship and practical love for our neighbours."
      />

      {/* STORY */}
      <section className="section">
        <div className={`container ${styles.storyLayout}`}>
          <PlaceholderImage
            label="PEFA Kimana Congregation"
            tone="acacia"
            ratio="4 / 3"
          />
          <div>
            <SectionHeading
              eyebrow="How We Began"
              title="A church built by and for this community"
            />
            <p className={styles.paragraph}>
              PEFA Kimana started as a small fellowship meeting under a tree
              on the edge of town, gathering a handful of families who
              wanted a place to worship, pray and be discipled together.
              Over the years that fellowship grew into a full congregation
              with its own sanctuary, a Sunday school for our children, and
              ministries that now reach well beyond Kimana town.
            </p>
            <p className={styles.paragraph}>
              Today we remain committed to the same vision that started us,
              a church that is thoroughly biblical, warmly Pentecostal, and
              genuinely rooted in the life of Kajiado County.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className={`section ${styles.mvvSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
            align="center"
          />
          <div className={styles.mvvGrid}>
            <div className={styles.mvvCard}>
              <Target size={26} strokeWidth={1.8} className={styles.mvvIcon} />
              <h3>Our Mission</h3>
              <p>
                To make disciples of Jesus Christ in Kimana and the
                surrounding villages, and to send them out to serve.
              </p>
            </div>
            <div className={styles.mvvCard}>
              <Eye size={26} strokeWidth={1.8} className={styles.mvvIcon} />
              <h3>Our Vision</h3>
              <p>
                A Christ centred community where every generation, from
                children to elders, is discipled, equipped and sent.
              </p>
            </div>
            <div className={styles.mvvCard}>
              <Heart size={26} strokeWidth={1.8} className={styles.mvvIcon} />
              <h3>Our Values</h3>
              <p>
                Sound teaching, honest worship, generous giving, and a
                deep, practical love for our neighbours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="First Time Here?"
            title="What To Expect On Sunday"
          />
          <div className={styles.expectGrid}>
            <div className={styles.expectCard}>
              <Clock size={22} strokeWidth={1.8} />
              <h3>Service Flow</h3>
              <p>
                Doors open at 8:30 AM. Worship begins at 9:00 AM, followed
                by the Word and a time of prayer and altar ministry.
                Services typically run for about two and a half hours.
              </p>
            </div>
            <div className={styles.expectCard}>
              <Shirt size={22} strokeWidth={1.8} />
              <h3>What To Wear</h3>
              <p>
                Come as you are. Most people dress smart casual, but you
                will find warmth here whether you arrive in a suit or your
                everyday clothes.
              </p>
            </div>
            <div className={styles.expectCard}>
              <Baby size={22} strokeWidth={1.8} />
              <h3>For Your Children</h3>
              <p>
                Our Sunday school team welcomes children from age two
                through primary school, with lessons built around that
                week's theme in a safe, supervised classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className={`section ${styles.leadershipSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Meet Our Team"
            title="The People Who Serve You"
            align="center"
            tone="light"
          />
          <div className={styles.leadershipGrid}>
            {leadership.map((person) => (
              <div key={person.id} className={styles.leaderCard}>
                <PlaceholderImage
                  label={person.name}
                  tone="indigo"
                  ratio="1 / 1"
                />
                <h3>{person.name}</h3>
                <span className={styles.leaderRole}>{person.role}</span>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
