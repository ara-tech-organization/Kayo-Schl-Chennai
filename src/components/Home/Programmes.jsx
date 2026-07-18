import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpenCheck, Home as HomeIcon, PenTool, PuzzleIcon, Rocket } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./Programmes.css";
import playgroupImg from "../../assets/Play group.png";
import nurseryImg from "../../assets/Nursery.png";
import lkgImg from "../../assets/LKG.png";
import ukgImg from "../../assets/UKG.png";
import primaryImg from "../../assets/Primary.png";
import dayCareImg from "../../assets/Day Care.png";

const SHAPES = [
  { type: "blob", color: "var(--color-gold-light)", size: 140, top: "6%", right: "2%", speed: 0.3, float: 18, dur: 8 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "30%", left: "3%", speed: 0.46, float: 20, dur: 5, opacity: 0.7 },
  { type: "star", color: "var(--color-orange)", size: 28, bottom: "12%", right: "6%", speed: 0.38, float: 18, dur: 6, rotate: -16 },
  { type: "squiggle", color: "var(--color-primary)", size: 66, bottom: "20%", left: "6%", speed: 0.34, float: 12, dur: 7, opacity: 0.4 },
];

const PROGRAMMES = [
  {
    icon: HomeIcon,
    tone: "secondary",
    age: "6 Months+",
    title: "Day Care",
    image: dayCareImg,
    text: "A safe, nurturing home-away-from-home for babies from 6 months — caring attendants, age-appropriate activities, nutritious meals, and restful nap times for the children of working parents.",
  },
  {
    icon: PuzzleIcon,
    tone: "primary",
    age: "1.5 – 3 Yrs",
    title: "Playgroup",
    image: playgroupImg,
    text: "A gentle first step into joyful learning. Through sensory play, music, movement, and social interaction, your little one builds confidence, language, and early cognitive skills while feeling safe and loved.",
  },
  {
    icon: PenTool,
    tone: "orange",
    age: "3 – 4 Yrs",
    title: "Nursery",
    image: nurseryImg,
    text: "Children dive deeper into structured learning through the Montessori approach. Practical life skills, early numeracy, pre-writing activities, and language development form the core of this enriching year.",
  },
  {
    icon: BookOpenCheck,
    tone: "gold",
    age: "4 – 5 Yrs",
    title: "LKG",
    image: lkgImg,
    text: "Foundational literacy and numeracy grow through hands-on, play-based learning. Children explore science concepts, develop fine motor skills, and build the social confidence needed for formal schooling.",
  },
  {
    icon: Rocket,
    tone: "primary",
    age: "5 – 6 Yrs",
    title: "UKG",
    image: ukgImg,
    text: "The final preschool year gets your child fully ready for primary school — emphasising reading fluency, mathematical thinking, scientific curiosity, and independent learning for a confident head start.",
  },
  {
    icon: PuzzleIcon,
    tone: "secondary",
    age: "6 – 12 Yrs",
    title: "Primary Enrichment",
    image: primaryImg,
    text: "Learning stays alive beyond the classroom. Through activity-based sessions, critical thinking, and creative projects, children build communication, digital literacy, and real problem-solving skills.",
  },
];

const REVEAL_EASE = [0.16, 1, 0.3, 1];

export default function Programmes() {
  const [active, setActive] = useState(1);

  return (
    <section className="programmes" id="programmes">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading
          eyebrow="Early Learning Pathways"
          title="Explore Every Programme — One Tap Away"
          description="From our littlest daycare babies to primary enrichment, hover or tap a card to peek inside each stage of your child's growth at Kayo International."
        />

        <div className="showcase" role="tablist" aria-label="Our programmes">
          {PROGRAMMES.map((p, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={p.title}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                aria-label={`${p.title}, ${p.age}`}
                className={`showcase__panel showcase__panel--${p.tone} ${isActive ? "is-active" : ""}`}
                style={{ flexGrow: isActive ? 3.6 : 1 }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <img className="showcase__img" src={p.image} alt={`${p.title} programme at Kayo International Preschool, Perungudi Chennai`} />
                <span className="showcase__scrim" aria-hidden="true" />

                <span className="showcase__tab" aria-hidden={isActive}>
                  <span className="showcase__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="showcase__tab-icon">
                    <p.icon strokeWidth={1.9} />
                  </span>
                  <span className="showcase__tab-title">{p.title}</span>
                </span>

                <span className="showcase__content" aria-hidden={!isActive}>
                  <motion.span
                    className="showcase__content-inner"
                    initial={false}
                    animate={isActive ? "show" : "hide"}
                    variants={{
                      show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
                      hide: {},
                    }}
                  >
                    <motion.span
                      className="showcase__age"
                      variants={{ hide: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: REVEAL_EASE } } }}
                    >
                      <span className="showcase__age-icon"><p.icon size={15} strokeWidth={2.2} /></span>
                      {p.age}
                    </motion.span>
                    <motion.span
                      className="showcase__title"
                      variants={{ hide: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: REVEAL_EASE } } }}
                    >
                      {p.title}
                    </motion.span>
                    <motion.span
                      className="showcase__text"
                      variants={{ hide: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: REVEAL_EASE } } }}
                    >
                      {p.text}
                    </motion.span>
                    <motion.span
                      className="showcase__cta"
                      variants={{ hide: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: REVEAL_EASE } } }}
                    >
                      <a href="#enquiry" className="showcase__cta-link">
                        Enquire about {p.title} <ArrowUpRight size={17} strokeWidth={2.4} />
                      </a>
                    </motion.span>
                  </motion.span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
