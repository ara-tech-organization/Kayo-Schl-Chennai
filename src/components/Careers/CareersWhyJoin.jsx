import { GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./CareersWhyJoin.css";

const REASONS = [
  {
    icon: HeartHandshake,
    title: "A Founder-Led Culture, Every Day",
    text: "Our founders shape a culture that puts both children and educators first — not a distant policy, but how we run every centre.",
    tone: "primary",
  },
  {
    icon: ShieldCheck,
    title: "10+ Years of Trusted Excellence",
    text: "Join a preschool with over a decade of proven results and genuine trust from families across Chennai.",
    tone: "secondary",
  },
  {
    icon: Star,
    title: "A 4.9★ Google-Rated School",
    text: "Be part of a team that families consistently rate as warm, safe, and outstanding.",
    tone: "gold",
  },
  {
    icon: Sparkles,
    title: "Work That Matters, Every Day",
    text: "Help nurture confident, curious, happy learners and see the impact of your work in real time.",
    tone: "orange",
  },
  {
    icon: Users,
    title: "Valued and Supported Educators",
    text: "You are never on your own — our team culture is built on encouragement, respect, and genuine support.",
    tone: "primary",
  },
  {
    icon: GraduationCap,
    title: "Room to Grow in Early Childhood Education",
    text: "Build a deeply rewarding career with a school invested in your growth as much as the children's.",
    tone: "secondary",
  },
];

export default function CareersWhyJoin() {
  return (
    <section className="cr-why" id="why-kayo">
      <div className="container">
        <SectionHeading
          eyebrow="Why Team Kayo"
          title="A Preschool Career Where You Are Valued"
          description="From Perungudi to every corner of OMR, Team Kayo is built on the belief that great educators deserve a school that genuinely supports them."
        />

        <div className="cr-why__rail">
          {REASONS.map((r, i) => (
            <Reveal
              as="div"
              x={i % 2 === 0 ? -40 : 40}
              y={0}
              delay={0.05 * i}
              key={r.title}
              className={`cr-why__row cr-why__row--${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className={`cr-why__card cr-why__card--${r.tone}`}>
                <span className="cr-why__icon">
                  <r.icon strokeWidth={1.6} />
                </span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
              <span className="cr-why__node">{String(i + 1).padStart(2, "0")}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
