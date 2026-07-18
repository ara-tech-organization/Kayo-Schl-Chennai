import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./Testimonials.css";

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 34, top: "14%", left: "4%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "blob", color: "var(--color-secondary-light)", size: 120, bottom: "8%", right: "3%", speed: 0.28, float: 16, dur: 8 },
  { type: "squiggle", color: "var(--color-orange)", size: 70, top: "20%", right: "8%", speed: 0.4, float: 12, dur: 7, opacity: 0.5 },
  { type: "dot", color: "var(--color-primary)", size: 16, bottom: "22%", left: "8%", speed: 0.46, float: 20, dur: 5, opacity: 0.7 },
];

const TESTIMONIALS = [
  {
    quote:
      "Kayo International is hands down the best preschool in Perungudi. My daughter has transformed from a shy toddler into a confident little speaker. The teachers are incredibly loving, and the daily updates give me so much peace of mind.",
    author: "Parent",
    platform: "Google Review",
    initial: "G",
  },
  {
    quote:
      "We enrolled our son in the daycare programme when he was just 11 months old. The staff treated him like family. The CCTV access and live monitoring made it so much easier for me to focus at work. I highly recommend this daycare in OMR Chennai!",
    author: "Parent",
    platform: "Justdial Review",
    initial: "J",
  },
  {
    quote:
      "The NURTURE Lab curriculum is truly unique. My child comes home excited about something new every day, whether it is a science experiment, a theatre performance, or a new song. Kayo has set the foundation for a lifetime of learning.",
    author: "Parent",
    platform: "Facebook Review",
    initial: "F",
  },
];

function TestimonialCard({ t, i }) {
  return (
    <Reveal delay={0.1 * i} y={40} className="testimonials__slot">
      <motion.figure
        className={`testimonials__note testimonials__note--${i}`}
        whileHover={{ y: -12, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        <span className="testimonials__pin" aria-hidden="true" />
        <span className="testimonials__mark" aria-hidden="true">&ldquo;</span>

        <div className="testimonials__stars" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        <blockquote>{t.quote}</blockquote>

        <figcaption className="testimonials__who">
          <span className="testimonials__avatar" aria-hidden="true">{t.initial}</span>
          <span className="testimonials__meta">
            <strong>{t.author}</strong>
            <em>{t.platform}</em>
          </span>
        </figcaption>
      </motion.figure>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <span className="deco-blob testimonials__blob testimonials__blob--a" aria-hidden="true" />
      <span className="deco-blob testimonials__blob testimonials__blob--b" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading eyebrow="Parent Voices" title="What Parents Say About Kayo International" />

        <div className="testimonials__board">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.platform} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
