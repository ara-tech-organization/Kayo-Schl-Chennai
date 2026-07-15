import { Award, ShieldCheck, TrendingUp, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./FranchiseAwards.css";

const STATS = [
  { icon: Award, value: "20+", label: "Awards", meta: "for Excellence in Early Childhood Education" },
  { icon: TrendingUp, value: "10+", label: "Years", meta: "of Trusted Brand Presence" },
  { icon: Users, value: "1,000+", label: "Happy Families", meta: "and Counting" },
  { icon: ShieldCheck, value: "0", label: "Royalty Fees", meta: "on Franchise Earnings" },
];

export default function FranchiseAwards() {
  return (
    <section className="fr-awards" id="awards">
      <div className="container">
        <SectionHeading eyebrow="Recognised & Trusted" title="Awards & Achievements" />

        <StaggerGroup className="fr-awards__grid">
          {STATS.map((s) => (
            <StaggerItem className="fr-awards__card" key={s.label}>
              <span className="fr-awards__icon">
                <s.icon strokeWidth={1.7} />
              </span>
              <strong>{s.value}</strong>
              <span className="fr-awards__label">{s.label}</span>
              <span className="fr-awards__meta">{s.meta}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
