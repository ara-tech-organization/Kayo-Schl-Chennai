import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, RotateCw } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./PoliciesCarousel.css";

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 150, top: "8%", left: "-2%", speed: 0.3, float: 18, dur: 8 },
  { type: "blob", color: "var(--color-secondary-light)", size: 130, bottom: "6%", right: "-3%", speed: 0.24, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 26, bottom: "14%", right: "5%", speed: 0.34, float: 18, dur: 6, rotate: -16 },
  { type: "star", color: "var(--color-orange)", size: 20, top: "12%", left: "7%", speed: 0.4, float: 16, dur: 7, rotate: 14 },
  { type: "dot", color: "var(--color-secondary)", size: 16, top: "26%", right: "7%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 20, bottom: "22%", left: "6%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
  { type: "squiggle", color: "var(--color-primary)", size: 62, top: "62%", left: "3%", speed: 0.3, float: 12, dur: 7, opacity: 0.4 },
];

const TILTS = [-2, 2, -1.6, 2.4, -2.2];

export default function PoliciesCarousel({
  items,
  eyebrow,
  title,
  description,
  id,
  summaryTitle,
  summaryPoints = [],
}) {
  const [flipped, setFlipped] = useState(() => new Set());

  function toggle(i) {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section className="pol-wb" id={id}>
      <FloatingShapes items={SHAPES} />

      <div className="container pol-wb__container">
        <div className="pol-wb__head">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />

          {(summaryTitle || summaryPoints.length > 0) && (
            <Reveal className="pol-wb__facts" y={20} delay={0.12}>
              <span className="pol-wb__facts-tape" aria-hidden="true" />
              <span className="pol-wb__facts-kicker">At a Glance</span>
              {summaryTitle && <p>{summaryTitle}</p>}
              {summaryPoints.length > 0 && (
                <ul>
                  {summaryPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          )}
        </div>

        <p className="pol-wb__hint">
          <RotateCw size={15} strokeWidth={2.2} /> Tap a card to flip it over
        </p>

        <div className="pol-wb__flipgrid">
          {items.map((p, i) => {
            const isFlipped = flipped.has(i);
            return (
              <motion.div
                key={p.title}
                className="pol-wb__flip-cell"
                initial={{ opacity: 0, y: 44, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: (i % 3) * 0.09 }}
              >
              <div
                className={`pol-wb__flip pol-wb__flip--${p.tone} ${isFlipped ? "is-flipped" : ""}`}
                style={{ "--tilt": `${TILTS[i % TILTS.length]}deg` }}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${p.title} — flip for details`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
              >
                <div className="pol-wb__flip-inner">
                  <div className="pol-wb__face pol-wb__face--front">
                    <span className="pol-wb__flip-glow" aria-hidden="true" />
                    <span className="pol-wb__flip-watermark" aria-hidden="true">
                      <p.icon size={150} strokeWidth={1} />
                    </span>
                    <span className="pol-wb__flip-dots" aria-hidden="true" />
                    <span className="pol-wb__flip-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pol-wb__flip-icon">
                      <p.icon size={30} strokeWidth={1.7} />
                    </span>
                    <span className="pol-wb__flip-tag">{p.tagline}</span>
                    <h3>{p.title}</h3>
                    <span className="pol-wb__flip-cue">
                      <RotateCw size={14} strokeWidth={2.4} /> Tap to read
                    </span>
                  </div>

                  <div className="pol-wb__face pol-wb__face--back">
                    <span className="pol-wb__back-icon">
                      <p.icon size={20} strokeWidth={1.8} />
                    </span>
                    <strong className="pol-wb__back-title">{p.title}</strong>
                    <p>{p.text}</p>
                    <span className="pol-wb__flip-cue pol-wb__flip-cue--back">
                      <RotateCcw size={14} strokeWidth={2.4} /> Flip back
                    </span>
                  </div>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
