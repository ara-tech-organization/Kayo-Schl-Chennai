import { Award, Star, Users } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./Ratings.css";

const RATINGS = [
  { icon: Star, value: "4.9 / 5", label: "Google", meta: "63 Reviews" },
  { icon: Star, value: "4.8 / 5", label: "Justdial", meta: "65 Reviews" },
  { icon: Star, value: "5.0 / 5", label: "Facebook", meta: "Reviews" },
  { icon: Award, value: "20+", label: "Awards", meta: "for Excellence in Early Childhood Education" },
  { icon: Users, value: "1,000+", label: "Happy Children", meta: "and Counting" },
];

export default function Ratings() {
  return (
    <section className="ratings" id="ratings">
      <div className="container">
        <SectionHeading eyebrow="Recognised &amp; Loved" title="Our Ratings Across Platforms" />

        <StaggerGroup className="ratings__grid">
          {RATINGS.map((r) => (
            <StaggerItem key={r.label}>
              <div className="ratings__card">
                <span className="ratings__icon">
                  <r.icon strokeWidth={1.8} fill={r.icon === Star ? "currentColor" : "none"} />
                </span>
                <strong>{r.value}</strong>
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
