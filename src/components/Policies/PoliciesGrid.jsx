import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./PoliciesGrid.css";

export default function PoliciesGrid({ items, eyebrow, title, description, id }) {
  return (
    <section className="pol-grid" id={id}>
      <div className="container">
        {title && <SectionHeading eyebrow={eyebrow} title={title} description={description} />}

        <div className="pol-grid__bento">
          {items.map((p, i) => (
            <Reveal
              as="div"
              y={26}
              delay={0.06 * (i % 3)}
              key={p.title}
              className={`pol-card pol-card--${p.tone} ${p.size === "lg" ? "pol-card--lg" : ""}`}
            >
              <span className="pol-card__icon">
                <p.icon strokeWidth={1.6} />
              </span>
              <span className="pol-card__tagline">{p.tagline}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
