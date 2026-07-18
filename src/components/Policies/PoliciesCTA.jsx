import { CalendarCheck, MapPin, Phone, Users2 } from "lucide-react";
import Reveal from "../common/Reveal";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import "./PoliciesCTA.css";

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 150, top: "8%", left: "-2%", speed: 0.3, float: 18, dur: 8 },
  { type: "blob", color: "var(--color-primary-light)", size: 120, bottom: "6%", right: "-2%", speed: 0.24, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 26, top: "16%", right: "5%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 20, bottom: "18%", left: "6%", speed: 0.42, float: 14, dur: 5, opacity: 0.7 },
  { type: "dot", color: "var(--color-primary)", size: 16, bottom: "24%", right: "8%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "ring", color: "var(--color-secondary)", size: 60, top: "24%", left: "4%", speed: 0.4, float: 14, dur: 7, opacity: 0.4 },
];

export default function PoliciesCTA() {
  return (
    <section className="pol-cta" id="policies-cta">
      <FloatingShapes items={SHAPES} />

      <div className="container pol-cta__grid">
        <Reveal x={-30} y={0} className="pol-cta__intro">
          <span className="pol-cta__eyebrow">
            <Phone size={13} strokeWidth={2.4} /> We Are Here to Help
          </span>
          <h2>Have Questions About Our Policies?</h2>
          <p>
            Sometimes you simply want to speak with a real person who can address your specific
            concerns. Whether you would like clarification on our safety procedures, want to discuss
            your child&rsquo;s individual needs, or are ready to explore enrollment, our friendly
            team is here to assist you.
          </p>
          <p>
            Every family is welcome to visit our centre, meet our qualified educators, and see our
            preschool safety policies in action.
          </p>

          <Magnetic strength={0.3}>
            <a href="tel:+919884004650" className="btn btn-primary pol-cta__call">
              <Phone size={17} strokeWidth={2.2} /> Call Now
            </a>
          </Magnetic>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="pol-cta__card-wrap">
          <span className="pol-cta__stack" aria-hidden="true" />
          <div className="pol-cta__card">
            <span className="pol-cta__tape" aria-hidden="true" />
            <span className="pol-cta__card-icon">
              <Users2 strokeWidth={1.7} />
            </span>
            <h3>Visit Our Campus</h3>
            <p className="pol-cta__card-text">
              Meet our founder and educators, tour our classrooms and play areas, and experience our
              safety policies in action.
            </p>

            <div className="pol-cta__point pol-cta__point--map">
              <span>
                <MapPin strokeWidth={1.8} />
              </span>
              <div>
                <strong>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096</strong>
                <p>Open for guided visits every day</p>
              </div>
            </div>

            <div className="pol-cta__point pol-cta__point--time">
              <span>
                <CalendarCheck strokeWidth={1.8} />
              </span>
              <div>
                <strong>Book a Guided Tour</strong>
                <p>Meet the team and see every policy in practice</p>
              </div>
            </div>

            <a href="tel:+919884004650" className="pol-cta__phone">
              <Phone size={16} strokeWidth={2} />
              <span>
                Prefer to speak with us directly? Call <strong>+91 98840 04650</strong>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
