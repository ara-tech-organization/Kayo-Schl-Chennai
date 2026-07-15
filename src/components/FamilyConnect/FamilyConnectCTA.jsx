import { Phone, Sparkles } from "lucide-react";
import Reveal from "../common/Reveal";
import "./FamilyConnectCTA.css";

export default function FamilyConnectCTA() {
  return (
    <section className="fc-cta">
      <div className="container">
        <Reveal y={26} className="fc-cta__card">
          <span className="fc-cta__icon">
            <Sparkles strokeWidth={1.6} />
          </span>
          <h2>Ready to Become Part of Our Kayo Family?</h2>
          <p>
            Experience the warmth of a school community where you are always kept close to your
            child&rsquo;s everyday journey.
          </p>
          <div className="fc-cta__actions">
            <a href="/#enquiry" className="btn btn-primary">
              Book a Visit
            </a>
            <a href="tel:+919884004650" className="btn btn-outline">
              <Phone size={17} strokeWidth={2} /> +91 98840 04650
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
