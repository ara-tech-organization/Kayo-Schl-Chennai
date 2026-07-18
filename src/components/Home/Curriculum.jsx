import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Blocks, Brain, FlaskConical, Palette, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import FloatingShapes from "../common/FloatingShapes";
import "./Curriculum.css";

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 30, top: "16%", right: "6%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-primary)", size: 18, bottom: "18%", right: "10%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 22, top: "30%", right: "3%", speed: 0.42, float: 14, dur: 6, opacity: 0.7 },
];
import curriculumImg from "../../assets/home.png";

const PILLARS = [
  {
    icon: Blocks,
    title: "Montessori Method",
    subtitle: "Independence Through Purposeful Activity",
  },
  {
    icon: FlaskConical,
    title: "STEM Integration",
    subtitle: "Building Future-Ready Skills",
  },
  {
    icon: Palette,
    title: "Play-Based Learning",
    subtitle: "Learning Through Joy",
  },
  {
    icon: Brain,
    title: "Multiple Intelligence Theory",
    subtitle: "Celebrating Every Child's Uniqueness",
  },
];

export default function Curriculum() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-36, 36]);

  return (
    <section className="curriculum" id="curriculum" ref={ref}>
      <div className="curriculum__bg" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />
      <div className="container curriculum__grid">
        <div className="curriculum__visual">
          <motion.div className="curriculum__visual-frame" style={{ y: imgY }}>
            <img src={curriculumImg} alt="The NURTURE Lab Curriculum" className="curriculum__visual-img" />
          </motion.div>
          <motion.span
            className="curriculum__chip"
            initial={{ opacity: 0, y: 16, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Sparkles size={16} strokeWidth={1.8} />
            4 Pillars. One Curriculum.
          </motion.span>
        </div>

        <div className="curriculum__content">
          <SectionHeading
            align="left"
            eyebrow="Our Signature Curriculum"
            title="The NURTURE Lab Curriculum — Where Montessori Meets STEM"
          />

          <StaggerGroup className="curriculum__pillars">
            {PILLARS.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div className="curriculum__pillar">
                  <span className="curriculum__pillar-num">{i + 1}</span>
                  <span className="curriculum__pillar-icon">
                    <pillar.icon strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.subtitle}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
