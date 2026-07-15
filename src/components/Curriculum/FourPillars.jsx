import { ArrowRight, Blocks, FlaskConical, Layers, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FourPillars.css";

const EASE = [0.16, 1, 0.3, 1];

const PILLARS = [
  {
    icon: Blocks,
    title: "Montessori Methodology",
    text: "Independence through purposeful, hands-on activity in a prepared environment.",
    tone: "primary",
  },
  {
    icon: FlaskConical,
    title: "STEM Integration",
    text: "Hands-on science, technology, engineering and maths that spark curiosity.",
    tone: "secondary",
  },
  {
    icon: Palette,
    title: "Play-Based Learning",
    text: "Learning that emerges through joyful, child-led exploration and discovery.",
    tone: "orange",
  },
  {
    icon: Layers,
    title: "Multiple Intelligence Theory",
    text: "Nurturing all eight ways children are naturally smart and capable.",
    tone: "featured",
    link: "#intelligences",
    linkLabel: "Explore all 8 intelligences",
  },
];

export default function FourPillars() {
  return (
    <section className="four-pillars" id="four-pillars">
      <div className="container">
        <SectionHeading
          eyebrow="Four Pillars, One Whole Child"
          title="What is the NURTURE Lab Curriculum?"
          description="The NURTURE Lab curriculum is a proprietary, four-pillar educational framework exclusive to KAYO International. Unlike conventional preschool programmes that rely on rote memorisation and standardised worksheets, our curriculum embraces a child-centric philosophy where learning emerges naturally through curiosity, exploration and guided discovery."
        />

        <p className="four-pillars__lead-in">The Four Pillars of NURTURE:</p>

        <div className="pillars-zigzag">
          <span className="pillars-zigzag__line" aria-hidden="true" />

          {PILLARS.map((p, i) => (
            <motion.div
              className={`pillars-zigzag__item pillars-zigzag__item--${p.tone}`}
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: EASE }}
            >
              <span className="pillars-zigzag__number">{i + 1}</span>
              <div className="pillars-zigzag__card">
                <span className="pillars-zigzag__icon">
                  <p.icon strokeWidth={1.7} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                {p.link && (
                  <a href={p.link} className="pillars-zigzag__link">
                    {p.linkLabel}
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal y={20} delay={0.15} className="four-pillars__closing">
          <p>
            This four-pillar approach creates a Montessori STEM preschool curriculum, Chennai
            families trust &mdash; one that develops the whole child: intellectually, emotionally,
            socially, creatively and physically. Parents searching for the best preschool
            curriculum Montessori STEM approach will find that our NURTURE framework offers a depth
            and authenticity that stands apart from conventional early childhood programmes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
