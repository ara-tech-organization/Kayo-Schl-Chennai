import { Quote, Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Kayo International is hands down the best preschool in Perungudi. My daughter has transformed from a shy toddler into a confident little speaker. The teachers are incredibly loving, and the daily updates give me so much peace of mind.",
    source: "Parent, Google Review",
  },
  {
    quote:
      "We enrolled our son in the daycare programme when he was just 11 months old. The staff treated him like family. The CCTV access and live monitoring made it so much easier for me to focus at work. I highly recommend this daycare in OMR Chennai!",
    source: "Parent, Justdial Review",
  },
  {
    quote:
      "The NURTURE Lab curriculum is truly unique. My child comes home excited about something new every day, whether it is a science experiment, a theatre performance, or a new song. Kayo has set the foundation for a lifetime of learning.",
    source: "Parent, Facebook Review",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <SectionHeading eyebrow="Parent Voices" title="What Parents Say About Kayo International" />

        <div className="testimonials__row">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.source} delay={0.08 * i} y={36}>
              <div className={`testimonials__card testimonials__card--${i}`}>
                <Quote className="testimonials__quote-icon" strokeWidth={1.5} />
                <div className="testimonials__stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <span className="testimonials__source">&mdash; {t.source}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
