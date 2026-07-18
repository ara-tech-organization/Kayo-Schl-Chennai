import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, ShieldCheck, TrendingUp, Users, Wand2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseWhyPartner.css";

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 160, top: "6%", left: "-3%", speed: 0.28, float: 18, dur: 8 },
  { type: "star", color: "var(--color-gold)", size: 30, top: "20%", right: "6%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "16%", left: "8%", speed: 0.44, float: 14, dur: 5, opacity: 0.7 },
];

const REASONS = [
  {
    icon: ShieldCheck,
    title: "A Trusted & Reputable Brand",
    text: "Backed by over a decade of experience and a reputation built on genuine parent trust across Chennai and Tamil Nadu.",
    tone: "primary",
  },
  {
    icon: HeartHandshake,
    title: "Empowering Entrepreneurs",
    text: "We invest in your success as much as our own, with a partnership built on shared growth.",
    tone: "secondary",
  },
  {
    icon: Wand2,
    title: "Expert Guidance, End to End",
    text: "Hands-on support at every stage — from site selection to day-to-day centre management.",
    tone: "gold",
  },
  {
    icon: TrendingUp,
    title: "Proven, Scalable Model",
    text: "A model refined over a decade, with a clear pathway to a profitable, scalable preschool business.",
    tone: "orange",
  },
  {
    icon: GraduationCap,
    title: "Training & Ongoing Support",
    text: "In-depth training for you and your team, backed by continuous academic and operational support.",
    tone: "secondary",
  },
  {
    icon: Users,
    title: "A Collaborative Network",
    text: "Join a growing family of franchise partners who share knowledge, wins and best practices.",
    tone: "primary",
  },
];

export default function FranchiseWhyPartner() {
  return (
    <section className="fr-why" id="why-partner">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading
          eyebrow="A Proven Preschool Franchise Opportunity"
          title="Why Partner with Kayo International?"
          description="Join a brand families already trust — and build a business with the systems, training and support to help you succeed."
        />

        <div className="fr-why__board">
          {REASONS.map((r, i) => (
            <motion.article
              className={`fr-why__badge fr-why__badge--${r.tone}`}
              key={r.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 130, damping: 14, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            >
              <div className="fr-why__medal">
                <motion.span
                  className="fr-why__burst"
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26 + i * 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="fr-why__ribbon fr-why__ribbon--l" aria-hidden="true" />
                <span className="fr-why__ribbon fr-why__ribbon--r" aria-hidden="true" />
                <span className="fr-why__disc">
                  <r.icon strokeWidth={1.7} />
                </span>
                <span className="fr-why__num" aria-hidden="true">{i + 1}</span>
              </div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
