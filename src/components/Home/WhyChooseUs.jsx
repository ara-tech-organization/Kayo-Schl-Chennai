import { motion } from "framer-motion";
import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, Star, Trees } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./WhyChooseUs.css";

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 150, top: "4%", left: "1%", speed: 0.3, float: 18, dur: 8 },
  { type: "ring", color: "var(--color-secondary)", size: 76, top: "40%", right: "3%", speed: 0.42, float: 14, dur: 6, opacity: 0.5 },
  { type: "star", color: "var(--color-gold)", size: 30, bottom: "14%", left: "5%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, top: "22%", right: "10%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
  { type: "triangle", color: "var(--color-secondary-light)", size: 30, bottom: "24%", right: "12%", speed: 0.34, float: 16, dur: 7, rotate: 20 },
];

// Each reason is a hand-placed "sticker" — its own brand tint, resting tilt and
// vertical offset — so the grid reads as a playful pin-board, not a table.
const REASONS = [
  {
    icon: Award,
    tone: "purple",
    tilt: -3,
    title: "A Decade of Trust and Excellence",
    text: "Over ten years of shaping confident learners, backed by 20+ awards in early childhood education.",
  },
  {
    icon: BookOpen,
    tone: "green",
    tilt: 2.4,
    title: "Expert-Led, Research-Based Curriculum",
    text: "Our NURTURE lab programme blends Montessori and STEM thinking, designed by qualified early-years educators.",
  },
  {
    icon: ShieldCheck,
    tone: "gold",
    tilt: -2,
    title: "Safety and Transparency You Can Count On",
    text: "24/7 CCTV monitoring, trained staff, and regular SMS updates keep you connected to your child's day.",
  },
  {
    icon: Trees,
    tone: "orange",
    tilt: 3,
    title: "Spacious, Stimulating Environment",
    text: "Bright classrooms, sandpits, splash pools, and dedicated play zones built for curious little explorers.",
  },
  {
    icon: HeartHandshake,
    tone: "forest",
    tilt: -2.6,
    title: "Experienced and Caring Educators",
    text: "Passionate teachers who treat every child as their own, nurturing confidence alongside curriculum.",
  },
  {
    icon: Sparkles,
    tone: "purple",
    tilt: 2,
    title: "Holistic Learning for Every Child",
    text: "From Multiple Intelligence Theory to theatre and STEM, we celebrate every child's unique strengths.",
  },
];

function ReasonCard({ reason, index }) {
  return (
    <motion.article
      className={`why__scard why__scard--${reason.tone}`}
      initial={{ opacity: 0, y: 48, rotate: reason.tilt * 3, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: reason.tilt, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: (index % 3) * 0.08 }}
      whileHover={{ rotate: 0, y: -12, scale: 1.035, transition: { type: "spring", stiffness: 300, damping: 18 } }}
    >
      <span className="why__scard-num">{String(index + 1).padStart(2, "0")}</span>
      <motion.span
        className="why__scard-icon"
        whileHover={{ rotate: [0, -12, 8, 0], scale: 1.12 }}
        transition={{ duration: 0.5 }}
      >
        <reason.icon strokeWidth={1.8} />
      </motion.span>
      <h3>{reason.title}</h3>
      <p>{reason.text}</p>
      <span className="why__scard-tape" aria-hidden="true" />
    </motion.article>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="why" id="why-kayo">
      <span className="deco-blob why__blob why__blob--a" aria-hidden="true" />
      <span className="deco-blob why__blob why__blob--b" aria-hidden="true" />
      <span className="deco-dotgrid why__dots" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />

      <motion.span
        className="why__float why__float--star"
        aria-hidden="true"
        animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={20} strokeWidth={1.6} />
      </motion.span>
      <motion.span
        className="why__float why__float--dot"
        aria-hidden="true"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <Star size={16} strokeWidth={1.6} fill="currentColor" />
      </motion.span>

      <div className="container why__inner">
        <SectionHeading
          eyebrow="Why Families Choose Us"
          title="Why Kayo International Is the Preferred Preschool in Perungudi"
          description="Parents across Perungudi, Nanmangalam, Pallikaranai, Palavakkam, Kottivakkam, Taramani, Kandanchavadi, Thoraipakkam and Adambakkam — all within around 3 km — consistently choose Kayo International. Here's why."
        />

        <div className="why__board">
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
