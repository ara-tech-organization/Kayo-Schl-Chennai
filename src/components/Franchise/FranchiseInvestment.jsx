import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Laptop2, Megaphone, PiggyBank, Wallet } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseInvestment.css";

const EASE = [0.16, 1, 0.3, 1];

const INVESTMENT = [
  {
    icon: Wallet,
    title: "Franchise Fee",
    short: "Franchise Fee",
    text: "One-time, with no recurring royalty.",
  },
  {
    icon: Building2,
    title: "Infrastructure & Interiors",
    short: "Infrastructure",
    text: "Centre design, child-safe furniture, learning materials, play equipment.",
  },
  {
    icon: Laptop2,
    title: "Technology Setup",
    short: "Technology",
    text: "CCTV systems, parent communication tools, administrative software.",
  },
  {
    icon: Megaphone,
    title: "Initial Marketing",
    short: "Marketing",
    text: "Launch campaigns, local promotions, and digital presence.",
  },
  {
    icon: PiggyBank,
    title: "Working Capital",
    short: "Working Capital",
    text: "For the first few months of operation.",
  },
];

export default function FranchiseInvestment() {
  const [active, setActive] = useState(0);
  const item = INVESTMENT[active];

  return (
    <section className="fr-invest" id="investment">
      <span className="fr-invest__curve fr-invest__curve--top" aria-hidden="true" />
      <span className="fr-invest__curve fr-invest__curve--bottom" aria-hidden="true" />

      <div className="fr-invest__backdrop" aria-hidden="true">
        <span className="fr-invest__blob fr-invest__blob--a" />
        <span className="fr-invest__blob fr-invest__blob--b" />
      </div>

      <div className="container fr-invest__inner">
        <SectionHeading
          eyebrow="Investment Overview"
          title="What Your Investment Covers"
          description="The total investment for a Kayo International preschool franchise varies based on location, property size, and local market conditions. Our investment framework typically covers:"
        />

        <div className="fr-invest__tabs" role="tablist" aria-label="Investment components">
          {INVESTMENT.map((i, idx) => (
            <button
              key={i.title}
              type="button"
              role="tab"
              aria-selected={active === idx}
              className={`fr-invest__tab ${active === idx ? "is-active" : ""}`}
              onClick={() => setActive(idx)}
            >
              <i.icon size={16} strokeWidth={2} />
              {i.short}
            </button>
          ))}
        </div>

        <div className="fr-invest__stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              className="fr-invest__spotlight"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <span className="fr-invest__medallion">
                <item.icon strokeWidth={1.5} />
              </span>
              <div className="fr-invest__copy">
                <span className="fr-invest__step">
                  {String(active + 1).padStart(2, "0")} / {String(INVESTMENT.length).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="fr-invest__dots" aria-hidden="true">
            {INVESTMENT.map((i, idx) => (
              <span key={i.title} className={active === idx ? "is-active" : ""} />
            ))}
          </div>
        </div>

        <Reveal y={18} delay={0.1} className="fr-invest__note">
          <p>
            During our confidential discussion, we provide detailed financial projections,
            break-even analysis, and a clear understanding of revenue potential based on your
            specific location and market conditions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
