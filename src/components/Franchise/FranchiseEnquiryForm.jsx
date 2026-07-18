import { useState } from "react";
import { CheckCircle2, Clock3, Phone, Send } from "lucide-react";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseEnquiryForm.css";

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 160, top: "6%", left: "-3%", speed: 0.28, float: 18, dur: 8 },
  { type: "star", color: "var(--color-gold)", size: 28, top: "16%", right: "6%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "16%", left: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
];

export default function FranchiseEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="fr-enquiry" id="enquiry">
      <FloatingShapes items={SHAPES} />
      <div className="container fr-enquiry__grid">
        <Reveal x={-30} y={0} className="fr-enquiry__intro">
          <span className="eyebrow">Enquire Now</span>
          <h2>Let&rsquo;s Grow Together</h2>
          <p>
            Ready to build a rewarding business in early childhood education? Share your details
            and our franchise team will reach out within 48 hours.
          </p>

          <div className="fr-enquiry__point">
            <span>
              <Clock3 strokeWidth={1.8} />
            </span>
            <div>
              <strong>Response Within 48 Hours</strong>
              <p>Our franchise team reviews every enquiry personally</p>
            </div>
          </div>

          <a href="tel:+919884004650" className="fr-enquiry__call">
            <Phone size={18} strokeWidth={2} />
            Prefer to speak with us directly? Call <strong>+91 98840 04650</strong>
          </a>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="fr-enquiry__form-wrap">
          <div className="fr-enquiry__form-card">
            {submitted ? (
              <div className="fr-enquiry__success">
                <CheckCircle2 size={44} strokeWidth={1.5} />
                <h3>Thank You!</h3>
                <p>Your franchise enquiry has been received. Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="fr-enquiry__form" onSubmit={handleSubmit}>
                <h3>Franchise Enquiry Form</h3>
                <label>
                  Full Name
                  <input type="text" name="fullName" required placeholder="Your full name" />
                </label>
                <div className="fr-enquiry__row">
                  <label>
                    Phone Number
                    <input type="tel" name="phone" required placeholder="+91 00000 00000" />
                  </label>
                  <label>
                    Email Address
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                </div>
                <label>
                  Preferred City / Location
                  <input type="text" name="location" required placeholder="e.g. Chennai, OMR" />
                </label>
                <label>
                  Your Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your background, investment capacity, and why you are interested in a preschool franchise..."
                  />
                </label>

                <button type="submit" className="btn btn-primary fr-enquiry__submit">
                  Submit Enquiry <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
