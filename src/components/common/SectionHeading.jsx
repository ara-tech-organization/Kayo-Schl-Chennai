import Reveal from "./Reveal";
import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? "section-heading--light" : ""}`}>
      {eyebrow && (
        <Reveal y={16}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal y={22} delay={0.08}>
        <h2>{title}</h2>
      </Reveal>
      {description && (
        <Reveal y={18} delay={0.16}>
          <p className="section-heading__desc">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
