import { Award, HeartHandshake, Star, Users2 } from "lucide-react";
import { ROLES } from "./careersData";
import "./CareersHighlights.css";

const STATS = [
  { icon: Star, value: "4.9★", label: "Google Rating from families who trust us" },
  { icon: Award, value: "10+", label: "Years of trusted preschool excellence" },
  { icon: Users2, value: String(ROLES.length), label: "Open role types across teaching & admin" },
  { icon: HeartHandshake, value: "100%", label: "Founder-led culture that values educators" },
];

const LOOP = [...STATS, ...STATS];

export default function CareersHighlights() {
  return (
    <section className="cr-stats">
      <div className="cr-stats__track">
        <div className="cr-stats__marquee">
          {LOOP.map((s, i) => (
            <span className="cr-stats__pill" key={`${s.label}-${i}`}>
              <span className="cr-stats__icon">
                <s.icon strokeWidth={1.8} />
              </span>
              <strong>{s.value}</strong>
              <span className="cr-stats__label">{s.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
