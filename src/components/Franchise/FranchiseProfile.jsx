import { useState } from "react";
import {
  Banknote,
  Handshake,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseProfile.css";

const TRAITS = [
  {
    icon: HeartHandshake,
    title: "Child-Focused",
    text: "Passionate about children and genuinely invested in their wellbeing and development.",
  },
  {
    icon: Banknote,
    title: "Financially Ready",
    text: "Financially prepared to invest in setting up a premium preschool centre.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Committed",
    text: "Committed to quality and willing to uphold Kayo's high standards for safety, hygiene, and education.",
  },
  {
    icon: MapPinned,
    title: "Locally Connected",
    text: "Locally connected with good knowledge of their chosen neighbourhood or city.",
  },
  {
    icon: Handshake,
    title: "Business-Minded",
    text: "Business-minded with the drive to grow a sustainable, profitable enterprise.",
  },
  {
    icon: UserRoundCog,
    title: "Hands-On Leader",
    text: "Hands-on or willing to appoint a dedicated centre director for day-to-day operations.",
  },
];

export default function FranchiseProfile() {
  const [flipped, setFlipped] = useState(() => new Set());

  function toggle(i) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section className="fr-profile" id="profile">
      <div className="container">
        <SectionHeading
          eyebrow="Who We're Looking For"
          title="The Ideal Kayo Franchise Partner"
          description="We seek franchise partners who share our passion for early childhood education and our commitment to excellence. Tap a card to see what matters most."
        />

        <div className="fr-profile__cards">
          {TRAITS.map((t, i) => (
            <Reveal
              as="div"
              y={22}
              delay={0.07 * i}
              key={t.title}
              className="fr-profile__flip"
            >
              <button
                type="button"
                className={`fr-profile__card ${flipped.has(i) ? "is-flipped" : ""}`}
                onClick={() => toggle(i)}
                onMouseEnter={() => setFlipped((prev) => new Set(prev).add(i))}
                onMouseLeave={() =>
                  setFlipped((prev) => {
                    const next = new Set(prev);
                    next.delete(i);
                    return next;
                  })
                }
                aria-pressed={flipped.has(i)}
              >
                <span className="fr-profile__face fr-profile__face--front">
                  <span className="fr-profile__icon">
                    <t.icon strokeWidth={1.7} />
                  </span>
                  <span className="fr-profile__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t.title}</h3>
                </span>
                <span className="fr-profile__face fr-profile__face--back">
                  <p>{t.text}</p>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal y={18} delay={0.1} className="fr-profile__note">
          <p>
            You do not need prior experience in education. What matters most is your dedication,
            integrity, and willingness to follow a proven system while bringing your personal
            touch to your centre.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
