import { motion } from "framer-motion";
import {
  ClipboardList,
  Compass,
  Megaphone,
  NotebookPen,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseSupport.css";
import supportImg from "../../assets/Francis.png";

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 28, top: "22%", right: "5%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-secondary)", size: 18, bottom: "16%", left: "6%", speed: 0.48, float: 20, dur: 6, opacity: 0.6 },
];

const SUPPORT = [
  {
    icon: Compass,
    tone: "primary",
    title: "Setup Guidance",
    text: "End-to-end support choosing your location, designing your centre and preparing for launch.",
  },
  {
    icon: NotebookPen,
    tone: "secondary",
    title: "Curriculum & Academics",
    text: "Full access to our proprietary NURTURE Lab curriculum and academic planning resources.",
  },
  {
    icon: UsersRound,
    tone: "gold",
    title: "Teacher Training",
    text: "Help hiring the right educators, plus structured training aligned to Kayo's teaching standards.",
  },
  {
    icon: ClipboardList,
    tone: "orange",
    title: "Operations & Admin",
    text: "Guidance on daily operations, administration, compliance and centre management systems.",
  },
  {
    icon: Megaphone,
    tone: "secondary",
    title: "Marketing & Admissions",
    text: "Launch campaigns, local marketing playbooks and admissions guidance to fill your centre.",
  },
];

export default function FranchiseSupport() {
  return (
    <section className="fr-support" id="support">
      <svg className="fr-support__wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,64 C240,110 480,0 720,32 C960,64 1200,110 1440,48 L1440,0 L0,0 Z" fill="var(--color-bg)" />
      </svg>

      <div className="fr-support__backdrop" aria-hidden="true">
        <span className="fr-support__blob fr-support__blob--b" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container fr-support__inner">
        <SectionHeading
          align="center"
          eyebrow="You're Never Alone"
          title="Our Comprehensive Support System"
          description="From the moment you sign on, our head office team works alongside you — covering every part of building and running a successful centre."
        />

        <div className="fr-support__hub">
          <motion.span
            className="fr-support__spark fr-support__spark--a"
            aria-hidden="true"
            animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={16} strokeWidth={1.8} />
          </motion.span>
          <motion.span
            className="fr-support__spark fr-support__spark--b"
            aria-hidden="true"
            animate={{ y: [0, 10, 0], rotate: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <Star size={14} strokeWidth={1.8} fill="currentColor" />
          </motion.span>

          <motion.div
            className="fr-support__center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 140, damping: 14 }}
          >
            <img
              className="fr-support__center-img"
              src={supportImg}
              alt="Kayo International head office support team celebrating with franchise partners"
            />
            <span className="fr-support__center-scrim" aria-hidden="true" />
            <div className="fr-support__center-cap">
              <strong>Head Office Team</strong>
              <span>With you at every step</span>
            </div>
          </motion.div>

          {SUPPORT.map((s, i) => (
            <motion.article
              className={`fr-support__card fr-support__card--${s.tone} fr-support__card--p${i}`}
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 130, damping: 15, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <span className="fr-support__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="fr-support__icon">
                <s.icon strokeWidth={1.7} />
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
