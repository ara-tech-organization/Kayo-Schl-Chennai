import { Award, ShieldCheck, TrendingUp, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import Counter from "../common/Counter";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseAwards.css";

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 30, top: "16%", left: "5%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-primary)", size: 18, bottom: "18%", right: "8%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
];

const STATS = [
  { icon: Award, value: 20, suffix: "+", label: "Awards", meta: "for Excellence in Early Childhood Education", tone: "gold" },
  { icon: TrendingUp, value: 10, suffix: "+", label: "Years", meta: "of Trusted Brand Presence", tone: "primary" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Families", meta: "and Counting", tone: "secondary" },
  { icon: ShieldCheck, value: 0, suffix: "", label: "Royalty Fees", meta: "on Franchise Earnings", tone: "orange" },
];

export default function FranchiseAwards() {
  return (
    <section className="fr-awards" id="awards">
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading eyebrow="Recognised & Trusted" title="Awards & Achievements" />

        <StaggerGroup className="fr-awards__grid">
          {STATS.map((s) => (
            <StaggerItem className={`fr-awards__card fr-awards__card--${s.tone}`} key={s.label}>
              <span className="fr-awards__icon">
                <s.icon strokeWidth={1.7} />
              </span>
              <strong>
                <Counter value={s.value} suffix={s.suffix} />
              </strong>
              <span className="fr-awards__label">{s.label}</span>
              <span className="fr-awards__meta">{s.meta}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
