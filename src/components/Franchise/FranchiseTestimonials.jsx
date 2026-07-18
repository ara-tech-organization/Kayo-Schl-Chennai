import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseTestimonials.css";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-gold-light)", size: 170, top: "6%", left: "-3%", speed: 0.26, float: 18, dur: 8 },
  { type: "star", color: "var(--color-primary)", size: 26, top: "18%", right: "6%", speed: 0.38, float: 18, dur: 6, rotate: -16, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "16%", left: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
];

const TESTIMONIALS = [
  {
    avatar: "C",
    tone: "primary",
    quote:
      "Partnering with Kayo International was the best decision I made for my entrepreneurial journey. The no-royalty model meant I could reinvest in my centre, and the support from the head office team has been exceptional. Within 18 months, I had not only recovered my investment but was operating a profitable, beloved preschool in my community.",
    author: "Franchise Partner",
    place: "Chennai",
  },
  {
    avatar: "T",
    tone: "secondary",
    quote:
      "What drew me to Kayo was their genuine commitment to quality education and their transparent business model. The NURTURE Lab curriculum is outstanding, parents trust the brand, and my centre now has a long waiting list. I am proud to be part of a brand that truly puts children first.",
    author: "Franchise Partner",
    place: "Tamil Nadu",
  },
  {
    avatar: "S",
    tone: "orange",
    quote:
      "Coming from a corporate background, I had no experience in education. Kayo's training and operational support gave me the confidence to launch and run my preschool successfully. The 2X ROI promise was not just marketing — it was my reality within the first two years.",
    author: "Franchise Partner",
    place: "South India",
  },
];

const CONFETTI = ["a", "b", "c", "d", "e", "f"];

export default function FranchiseTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = TESTIMONIALS[active];

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, active]);

  return (
    <section className="fr-testi" id="testimonials">
      <FloatingShapes items={SHAPES} />

      <div className="container fr-testi__inner">
        <SectionHeading
          eyebrow="In Their Words"
          title="Success Stories from Our Franchise Partners"
          description="Real experiences from entrepreneurs who built a rewarding business with Kayo International."
        />

        <div
          className={`fr-testi__spotlight fr-testi__spotlight--${current.tone}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Playful decoration */}
          <span className="fr-testi__tape fr-testi__tape--l" aria-hidden="true" />
          <span className="fr-testi__tape fr-testi__tape--r" aria-hidden="true" />
          <Quote className="fr-testi__watermark" strokeWidth={1.5} aria-hidden="true" />
          {CONFETTI.map((c) => (
            <span key={c} className={`fr-testi__confetti fr-testi__confetti--${c}`} aria-hidden="true" />
          ))}

          <motion.span
            className="fr-testi__badge"
            aria-hidden="true"
            animate={{ y: [0, -7, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote size={26} strokeWidth={2.2} />
            <motion.i
              className="fr-testi__badge-spark"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={13} strokeWidth={2} />
            </motion.i>
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              className="fr-testi__feature"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="fr-testi__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={17} strokeWidth={0} fill="currentColor" />
                ))}
                <span className="fr-testi__rating">5.0</span>
              </div>
              <p>&ldquo;{current.quote}&rdquo;</p>
              <footer className="fr-testi__author">
                <span className="fr-testi__author-avatar">{current.avatar}</span>
                <span className="fr-testi__author-copy">
                  <strong>{current.author}</strong>
                  <small className="fr-testi__author-place">{current.place}</small>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="fr-testi__picker" role="tablist" aria-label="Choose a testimonial">
            {TESTIMONIALS.map((t, i) => (
              <button
                type="button"
                key={t.place}
                role="tab"
                aria-selected={active === i}
                aria-label={`${t.author}, ${t.place}`}
                className={`fr-testi__pick fr-testi__pick--${t.tone} ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {t.avatar}
                {active === i && (
                  <svg className="fr-testi__progress" viewBox="0 0 48 48" aria-hidden="true">
                    <circle
                      className={`fr-testi__progress-bar ${paused ? "is-paused" : ""}`}
                      cx="24"
                      cy="24"
                      r="22"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
