import PageHeader from "@/components/PageHeader";
import sermons from "@/data/sermons";
import images from "@/data/images";
import SermonsList from "./SermonsList";

export const metadata = {
  title: "Sermons | PEFA Kimana"
};

export default function SermonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sermon Archive"
        title="Sunday highlights and recordings"
        description="Every message preached at PEFA Kimana, with the theme, scriptures and key points from that Sunday, plus the full recording whenever one is available."
        image={images.hero.sermons}
      />

      <section className="section">
        <div className="container">
          <SermonsList sermons={sermons} />
        </div>
      </section>
    </>
  );
}
