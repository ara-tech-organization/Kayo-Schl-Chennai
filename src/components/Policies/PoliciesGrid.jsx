import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./PoliciesGrid.css";

export default function PoliciesGrid({
  items,
  eyebrow,
  title,
  description,
  id,
  variant = "sunrise",
  summaryTitle,
  summaryPoints = [],
}) {
  return (
    <section className={`pol-grid pol-grid--${variant}`} id={id}>
      <div className="container">
        <div className="pol-grid__frame">
          <div className={`pol-grid__layout ${!title ? "pol-grid__layout--full" : ""}`}>
            {title && (
              <div className="pol-grid__intro">
                <SectionHeading
                  eyebrow={eyebrow}
                  title={title}
                  description={description}
                  align="left"
                />

                {(summaryTitle || summaryPoints.length > 0) && (
                  <Reveal className="pol-grid__summary" y={24} delay={0.12}>
                    <span className="pol-grid__summary-kicker">At a Glance</span>
                    {summaryTitle && <h3>{summaryTitle}</h3>}
                    {summaryPoints.length > 0 && (
                      <ul className="pol-grid__summary-list">
                        {summaryPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                )}
              </div>
            )}

            <div className="pol-grid__bento">
              <span className="pol-grid__rail" aria-hidden="true" />
            {items.map((p, i) => (
              <Reveal
                as="article"
                y={26}
                delay={0.06 * (i % 3)}
                key={p.title}
                className={`pol-card pol-card--${p.tone} ${p.size === "lg" ? "pol-card--lg" : ""}`}
              >
                <div className="pol-card__meta">
                  <span className="pol-card__number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pol-card__icon">
                    <p.icon strokeWidth={1.7} />
                  </span>
                  <span className="pol-card__tagline">{p.tagline}</span>
                </div>

                <div className="pol-card__body">
                  <span className="pol-card__eyebrow">Policy Chapter</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
