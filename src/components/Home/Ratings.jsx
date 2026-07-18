import { Award, Star, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import "./Ratings.css";

const RATINGS = [
  { icon: Star, value: 4.9, decimals: 1, valueSuffix: " / 5", label: "Google", meta: "63 Reviews" },
  { icon: Star, value: 4.8, decimals: 1, valueSuffix: " / 5", label: "Justdial", meta: "65 Reviews" },
  { icon: Star, value: 5.0, decimals: 1, valueSuffix: " / 5", label: "Facebook", meta: "Reviews" },
  { icon: Award, value: 20, suffix: "+", label: "Awards", meta: "for Excellence in Early Childhood Education" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Children", meta: "and Counting" },
];

const SHAPES = [
  { type: "ring", color: "rgba(255,255,255,0.5)", size: 90, top: "-6%", left: "6%", speed: 0.4, float: 16, dur: 7 },
  { type: "star", color: "var(--color-gold)", size: 34, top: "12%", right: "5%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "rgba(255,255,255,0.5)", size: 18, bottom: "16%", left: "3%", speed: 0.46, float: 20, dur: 5 },
  { type: "plus", color: "rgba(255,255,255,0.4)", size: 22, bottom: "10%", right: "12%", speed: 0.42, float: 14, dur: 6 },
];

export default function Ratings() {
  return (
    <section className="ratings" id="ratings">
      <span className="ratings__pattern" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />
      <div className="container">
        <SectionHeading
          eyebrow="Recognised &amp; Loved"
          title="Loved by Families, Rated Across Platforms"
          light
        />

        <StaggerGroup className="ratings__grid">
          {RATINGS.map((r) => (
            <StaggerItem key={r.label}>
              <div className="ratings__card">
                <span className="ratings__icon">
                  <r.icon strokeWidth={1.8} fill={r.icon === Star ? "currentColor" : "none"} />
                </span>
                <strong>
                  <Counter
                    value={r.value}
                    decimals={r.decimals || 0}
                    suffix={r.suffix || ""}
                  />
                  {r.valueSuffix || ""}
                </strong>
                <span className="ratings__label">{r.label}</span>
                <span className="ratings__meta">{r.meta}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
