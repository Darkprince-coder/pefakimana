import PageHeader from "@/components/PageHeader";
import events from "@/data/events";
import images from "@/data/images";
import EventsList from "./EventsList";

export const metadata = {
  title: "Events | PEFA Kimana"
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Church Calendar"
        title="What's happening at PEFA Kimana"
        description="From weekly gatherings to seasonal outreach, here is everything on the calendar."
        image={images.hero.events}
      />

      <section className="section">
        <div className="container">
          <EventsList events={events} />
        </div>
      </section>
    </>
  );
}
