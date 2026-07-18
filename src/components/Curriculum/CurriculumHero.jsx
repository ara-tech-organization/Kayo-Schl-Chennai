import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingShapes from "../common/FloatingShapes";
import "./CurriculumHero.css";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 180, top: "4%", left: "-3%", speed: 0.3, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-secondary-light)", size: 150, bottom: "8%", right: "-2%", speed: 0.24, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 32, top: "16%", right: "9%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "22%", left: "7%", speed: 0.44, float: 14, dur: 5, opacity: 0.8 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "30%", left: "12%", speed: 0.5, float: 22, dur: 6, opacity: 0.7 },
  { type: "squiggle", color: "var(--color-primary)", size: 70, bottom: "16%", right: "14%", speed: 0.3, float: 12, dur: 7, opacity: 0.4 },
];

const LETTERS = [
  { letter: "N", word: "Nurturing", tone: "primary" },
  { letter: "U", word: "Unique", tone: "secondary" },
  { letter: "R", word: "Resources", tone: "gold" },
  { letter: "T", word: "Through", tone: "orange" },
  { letter: "U", word: "Understanding", tone: "primary" },
  { letter: "R", word: "Respect &", tone: "secondary" },
  { letter: "E", word: "Exploration", tone: "gold" },
];

export default function CurriculumHero() {
  const [active, setActive] = useState(null);

  return (
    <section className="curr-hero">
      <div className="curr-hero__backdrop" aria-hidden="true">
        <span className="curr-hero__mesh" />
        <span className="curr-hero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container curr-hero__inner">
        <motion.nav
          className="curr-hero__crumb"
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Link to="/">
            <Home size={13} strokeWidth={2.2} /> Home
          </Link>
          <span>/</span>
          <span>Curriculum</span>
        </motion.nav>

        <motion.span
          className="eyebrow curr-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.04, ease: EASE }}
        >
          <Sparkles size={14} strokeWidth={2.2} /> The NURTURE Lab Curriculum
        </motion.span>

        <motion.h1
          className="curr-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          Where <span className="curr-hero__mark">Montessori Meets STEM</span> in Chennai
        </motion.h1>

        <motion.p
          className="curr-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          At KAYO International, every child is born with extraordinary potential. Our NURTURE Lab
          curriculum in Perungudi is an innovative fusion of Montessori methodology, STEM education,
          play-based learning and Howard Gardner&rsquo;s Multiple Intelligence Theory — thoughtfully
          designed to unlock that potential from the earliest years. A Montessori preschool Chennai
          families trust for a genuine STEM learning experience, serving Perungudi, OMR,
          Thoraipakkam and Sholinganallur.
        </motion.p>

        <motion.p
          className="curr-hero__lead curr-hero__lead--muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22, ease: EASE }}
        >
          Created under the guidance of our founder Veena Sundaramurthy — a qualified professional
          in Early Childhood Education and Child Psychology — our curriculum adapts to your
          child&rsquo;s unique learning style rather than forcing them into a rigid framework.
        </motion.p>

        <motion.p
          className="curr-hero__name-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
        >
          The name <strong>NURTURE</strong> says it all — hover a letter:
        </motion.p>

        <motion.div
          className="curr-hero__letters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
        >
          {LETTERS.map((l, i) => (
            <button
              type="button"
              key={`${l.letter}-${i}`}
              className={`curr-hero__letter curr-hero__letter--${l.tone} ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
            >
              <span className="curr-hero__letter-glyph">{l.letter}</span>
              <span className="curr-hero__letter-word">{l.word}</span>
            </button>
          ))}
        </motion.div>

        <p className="curr-hero__letters-caption">
          Nurturing Unique Resources Through Understanding, Respect &amp; Exploration
        </p>
      </div>

      <svg className="curr-hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,36 C240,68 480,8 720,26 C960,44 1200,64 1440,30 L1440,70 L0,70 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
