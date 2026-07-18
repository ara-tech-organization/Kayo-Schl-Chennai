import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./PoliciesJourney.css";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 26, top: "12%", right: "5%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-primary)", size: 16, bottom: "16%", left: "4%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 20, top: "24%", left: "3%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
  { type: "cloud", color: "var(--color-surface)", size: 60, top: "8%", left: "40%", speed: 0.22, float: 14, dur: 9 },
  { type: "squiggle", color: "var(--color-secondary)", size: 58, bottom: "22%", right: "7%", speed: 0.3, float: 12, dur: 7, opacity: 0.4 },
  { type: "dot", color: "var(--color-gold)", size: 14, top: "44%", right: "4%", speed: 0.5, float: 22, dur: 5, opacity: 0.6 },
];

export default function PoliciesJourney({
  items,
  eyebrow,
  title,
  description,
  id,
  summaryTitle,
  summaryPoints = [],
}) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="pol-spotlight" id={id}>
      <span className="deco-blob pol-spotlight__blob" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />
      <div className="container pol-spotlight__container">
        <div className="pol-spotlight__head">
          <Reveal y={18}>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <h2>{title}</h2>
          </Reveal>
          {description && (
            <Reveal y={18} delay={0.14}>
              <p className="pol-spotlight__desc">{description}</p>
            </Reveal>
          )}
        </div>

        <div className="pol-spotlight__panel">
          <div className="pol-spotlight__tabs">
            {items.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.title}
                  type="button"
                  className={`pol-spotlight__tab pol-spotlight__tab--${p.tone} ${
                    isActive ? "is-active" : ""
                  }`}
                  onClick={() => setActive(i)}
                >
                  <motion.span
                    className="pol-spotlight__tab-icon"
                    whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p.icon size={19} strokeWidth={1.8} />
                  </motion.span>
                  <span className="pol-spotlight__tab-text">
                    <strong>{p.title}</strong>
                    <span>{p.tagline}</span>
                  </span>
                  <ArrowRight size={16} strokeWidth={2.2} className="pol-spotlight__tab-arrow" />
                </button>
              );
            })}

            {(summaryTitle || summaryPoints.length > 0) && (
              <div className="pol-spotlight__summary">
                <span className="pol-spotlight__summary-kicker">At a Glance</span>
                {summaryTitle && <p>{summaryTitle}</p>}
                {summaryPoints.length > 0 && (
                  <ul>
                    {summaryPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className={`pol-spotlight__stage pol-spotlight__stage--${current.tone}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className="pol-spotlight__card"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <motion.span
                  className="pol-spotlight__confetti pol-spotlight__confetti--a"
                  aria-hidden="true"
                  animate={{ y: [0, -8, 0], rotate: [0, 14, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star size={20} strokeWidth={0} fill="currentColor" />
                </motion.span>
                <motion.span
                  className="pol-spotlight__confetti pol-spotlight__confetti--b"
                  aria-hidden="true"
                  animate={{ y: [0, 8, 0], rotate: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <Sparkles size={22} strokeWidth={2} />
                </motion.span>
                <span className="pol-spotlight__confetti pol-spotlight__confetti--c" aria-hidden="true" />
                <span className="pol-spotlight__confetti pol-spotlight__confetti--d" aria-hidden="true" />

                <motion.div
                  className="pol-spotlight__medal"
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.span
                    className="pol-spotlight__medal-icon"
                    initial={{ rotate: -12, scale: 0.7 }}
                    animate={{ rotate: [0, -12, 9, 0], scale: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <current.icon size={44} strokeWidth={1.7} />
                  </motion.span>
                  <span className="pol-spotlight__medal-num">{String(active + 1).padStart(2, "0")}</span>
                </motion.div>

                <span className="pol-spotlight__ribbon">{current.tagline}</span>
                <h3>{current.title}</h3>
                <p className="pol-spotlight__bubble">{current.text}</p>
              </motion.div>
            </AnimatePresence>

            <div className="pol-spotlight__dots">
              {items.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  aria-label={`Show ${p.title}`}
                  className={`pol-spotlight__dot ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
