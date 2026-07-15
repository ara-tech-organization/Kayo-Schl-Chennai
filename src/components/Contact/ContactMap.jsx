import { Navigation2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./ContactMap.css";

const MAP_QUERY = "No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai 600096";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAP_QUERY
)}`;

export default function ContactMap() {
  return (
    <section className="contact-map">
      <svg
        className="contact-map__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,28 C240,58 480,4 720,18 C960,32 1200,56 1440,26 L1440,0 L0,0 Z"
          fill="var(--color-bg-alt)"
        />
      </svg>

      <div className="container">
        <SectionHeading
          eyebrow="Visit Our Campus"
          title="Find Us on the Map"
          description="Our Perungudi campus is easily accessible from OMR and Rajiv Nagar. Drop in for a guided tour, or get directions right from here."
        />

        <Reveal y={32} className="contact-map__frame">
          <iframe
            title="KAYO International Preschool — Perungudi Campus Map"
            src={MAP_SRC}
            className="contact-map__iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="contact-map__card">
            <strong>KAYO International &mdash; Perungudi Campus</strong>
            <p>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai &ndash; 600096</p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary contact-map__directions"
            >
              Get Directions <Navigation2 size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
