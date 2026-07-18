import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpenText,
  Calculator,
  Leaf,
  Music,
  PersonStanding,
  Shapes,
  UserCircle,
  Users,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./IntelligencesRail.css";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-gold-light)", size: 160, top: "8%", right: "-3%", speed: 0.26, float: 18, dur: 8 },
  { type: "star", color: "var(--color-primary)", size: 28, bottom: "16%", left: "5%", speed: 0.38, float: 18, dur: 6, rotate: -16, opacity: 0.6 },
  { type: "dot", color: "var(--color-orange)", size: 18, top: "24%", left: "9%", speed: 0.48, float: 20, dur: 6, opacity: 0.6 },
];

const TONES = ["primary", "secondary", "gold", "orange"];

const INTELLIGENCES = [
  {
    icon: BookOpenText,
    tag: "Word Smart",
    title: "Verbal-Linguistic",
    text: "Storytelling circles, phonics, vocabulary games, show-and-tell and poetry recitation build strong language skills in children who learn best through words.",
  },
  {
    icon: Calculator,
    tag: "Number Smart",
    title: "Logical-Mathematical",
    text: "Sorting activities, pattern games, building challenges and Montessori maths materials develop reasoning and problem-solving in children who think logically.",
  },
  {
    icon: Shapes,
    tag: "Picture Smart",
    title: "Visual-Spatial",
    text: "Arty Crafty sessions, block building, puzzles and drawing activities let children express themselves visually through colour, shape and design.",
  },
  {
    icon: Music,
    tag: "Music Smart",
    title: "Musical-Rhythmic",
    text: "Music and movement sessions, rhythmic activities, instruments, and our Bharatanatyam and Western Dance programmes develop a natural feel for melody and rhythm.",
  },
  {
    icon: PersonStanding,
    tag: "Body Smart",
    title: "Bodily-Kinesthetic",
    text: "Outdoor play, yoga, Kayo Sports, sandpit, splash pool and climbing equipment give active learners endless ways to explore through movement.",
  },
  {
    icon: Users,
    tag: "People Smart",
    title: "Interpersonal",
    text: "Group projects, collaborative games, circle time and empathy-building exercises help children develop strong social skills and meaningful relationships.",
  },
  {
    icon: UserCircle,
    tag: "Self Smart",
    title: "Intrapersonal",
    text: "Reflection time, emotional coaching, mindfulness practices and freedom of choice help children understand themselves and manage their emotions confidently.",
  },
  {
    icon: Leaf,
    tag: "Nature Smart",
    title: "Naturalist",
    text: "Nature walks, gardening, outdoor learning spaces and environmental projects connect children who are drawn to the natural world around them.",
  },
];

export default function IntelligencesRail() {
  const [active, setActive] = useState(0);
  const current = INTELLIGENCES[active];
  const currentTone = TONES[active % TONES.length];

  return (
    <section className="mi-showcase" id="intelligences">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading
          eyebrow="Multiple Intelligence Theory"
          title="Nurturing Every Child's Unique Gifts"
          description="Howard Gardner's Multiple Intelligence Theory tells us every child is smart in their own unique way. At KAYO INTERNATIONAL, we celebrate this by nurturing all eight intelligences in every child — because true learning happens when education sees the whole child, not just one side."
        />

        <div className="mi-showcase__layout">
          <div className="mi-showcase__grid" role="tablist" aria-label="Multiple intelligences">
            {INTELLIGENCES.map((mi, i) => (
              <button
                type="button"
                key={mi.title}
                role="tab"
                aria-selected={active === i}
                className={`mi-showcase__pick mi-showcase__pick--${TONES[i % TONES.length]} ${
                  active === i ? "is-active" : ""
                }`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="mi-showcase__pick-icon">
                  <mi.icon strokeWidth={1.7} />
                </span>
                <span className="mi-showcase__pick-text">
                  <strong>{mi.title}</strong>
                  <small>{mi.tag}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="mi-showcase__stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className={`mi-showcase__detail mi-showcase__detail--${currentTone}`}
                initial={{ opacity: 0, y: 16, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <span className="mi-showcase__detail-index" aria-hidden="true">
                  {String(active + 1).padStart(2, "0")}
                  <small>/08</small>
                </span>
                <span className="mi-showcase__detail-icon">
                  <current.icon strokeWidth={1.5} />
                </span>
                <span className="mi-showcase__detail-tag">{current.tag}</span>
                <h3>{current.title}</h3>
                <p>{current.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal y={20} delay={0.15} className="mi-showcase__closing">
          <p>
            By nurturing all eight intelligences, we ensure every child at KAYO INTERNATIONAL finds
            their strength, builds confidence and discovers their own path to excellence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
