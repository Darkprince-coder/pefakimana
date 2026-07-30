import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import AlbumCard from "@/components/AlbumCard";
import { gallery } from "@/data/gallery";
import albums from "@/data/albums";
import images from "@/data/images";
import styles from "./page.module.css";

export const metadata = {
  title: "Gallery | PEFA Kimana"
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Moments"
        title="Life together at PEFA Kimana"
        description="A look at worship, fellowship and outreach through the year, plus full weekly photo albums from every service."
        image={images.hero.gallery}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Highlights" title="Photo Gallery" />
          <GalleryGrid photos={gallery} />
        </div>
      </section>

      <section className={`section ${styles.albumsSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Every Sunday"
            title="Full Weekly Albums"
            description="After every service we share the complete set of photos as a shared album. Tap any album below to view or download the full set."
          />
          <div className={styles.albumGrid}>
            {albums.map((album, i) => (
              <AlbumCard key={album.id} album={album} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
