import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";
import images from "@/data/images";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | PEFA Kimana"
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="We would love to hear from you"
        description="Whether it's a prayer request, a question about visiting, or a way to get involved, reach out and someone from our team will respond."
        image={images.hero.contact}
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.formCard}>
            <ContactForm />
          </div>

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3>Visit Us</h3>
              <ul>
                <li>
                  <MapPin size={18} strokeWidth={1.8} />
                  <span>Kimana Town, Kajiado County, Kenya</span>
                </li>
                <li>
                  <Clock size={18} strokeWidth={1.8} />
                  <span>Sundays, 9:00 AM &amp; Wednesdays, 5:30 PM</span>
                </li>
                <li>
                  <Phone size={18} strokeWidth={1.8} />
                  <span>+254 700 000 000</span>
                </li>
                <li>
                  <Mail size={18} strokeWidth={1.8} />
                  <span>info@pefakimana.org</span>
                </li>
              </ul>
              <div className={styles.social}>
                <a href="#" aria-label="Facebook"><Facebook size={18} strokeWidth={1.8} /></a>
                <a href="#" aria-label="YouTube"><Youtube size={18} strokeWidth={1.8} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} strokeWidth={1.8} /></a>
              </div>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                title="PEFA Kimana location map"
                src="https://maps.google.com/maps?q=Kimana%2C%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
