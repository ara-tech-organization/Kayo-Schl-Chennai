import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./CurriculumHero.css";
import heroBg from "../../assets/cirrculum.png";

const EASE = [0.16, 1, 0.3, 1];

const LETTERS = [
  { letter: "N", word: "Nurturing" },
  { letter: "U", word: "Unique" },
  { letter: "R", word: "Resources" },
  { letter: "T", word: "Through" },
  { letter: "U", word: "Understanding" },
  { letter: "R", word: "Respect &" },
  { letter: "E", word: "Exploration" },
];

export default function CurriculumHero() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section className="curr-hero" ref={ref}>
      <div className="curr-hero__bg" aria-hidden="true">
        <motion.img src={heroBg} alt="" className="curr-hero__bg-img" style={{ y: bgY }} />
        <span className="curr-hero__bg-overlay" />
      </div>
      <div className="curr-hero__backdrop" aria-hidden="true">
        <span className="curr-hero__blob curr-hero__blob--a" />
        <span className="curr-hero__blob curr-hero__blob--b" />
      </div>

      <div className="container curr-hero__inner">
        <nav className="curr-hero__crumb" aria-label="Breadcrumb">
          <Link to="/">
            <Home size={13} strokeWidth={2.2} /> Home
          </Link>
          <span>/</span>
          <span>Curriculum</span>
        </nav>

        <motion.span
          className="eyebrow curr-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Sparkles size={14} strokeWidth={2.2} /> The NURTURE Lab Curriculum
        </motion.span>

        <motion.h1
          className="curr-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          <span className="curr-hero__title-prefix">NURTURE Lab Curriculum:</span> Where Montessori
          Meets STEM in Chennai
        </motion.h1>

        <motion.p
          className="curr-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          At KAYO International, we believe every child is born with extraordinary potential. Our
          NURTURE Lab curriculum in Perungudi is an innovative fusion of Montessori methodology,
          STEM education, play-based learning and Howard Gardner&rsquo;s Multiple Intelligence
          Theory in Perungudi, thoughtfully designed to unlock that potential from the earliest
          years. As a Montessori preschool Chennai families trust for a genuine STEM learning
          preschool in Perungudi experience, serving families across Perungudi, OMR, Thoraipakkam
          and Sholinganallur, we have spent over a decade refining a preschool curriculum that
          doesn&rsquo;t just prepare children for primary school, but instills a lifelong love of
          learning.
        </motion.p>

        <motion.p
          className="curr-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
        >
          Created under the expert guidance of our founder Veena Sundaramurthy, a qualified
          professional in Early Childhood Education and Child Psychology, our curriculum recognises
          that no two children learn the same way. That is precisely why we have built an approach
          that adapts to your child&rsquo;s unique learning style rather than forcing them into a
          rigid framework.
        </motion.p>

        <motion.p
          className="curr-hero__lead curr-hero__name-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease: EASE }}
        >
          The name NURTURE itself reflects our core philosophy:
        </motion.p>

        <motion.div
          className="curr-hero__letters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
        >
          {LETTERS.map((l, i) => (
            <button
              type="button"
              key={`${l.letter}-${i}`}
              className={`curr-hero__letter ${active === i ? "is-active" : ""}`}
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
    </section>
  );
}
