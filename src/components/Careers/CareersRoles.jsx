import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { ROLES } from "./careersData";
import "./CareersRoles.css";

const SIZES = ["md", "lg", "sm", "md", "sm", "lg", "md", "sm", "lg", "md", "sm", "md"];
const TONES = ["primary", "secondary", "gold", "orange"];

export default function CareersRoles() {
  return (
    <section className="cr-roles" id="roles">
      <div className="container">
        <SectionHeading
          eyebrow="Now Hiring"
          title="Open Positions at Our Perungudi Campus"
          description="We are growing our teaching, activity, and administrative teams. Tap a role to apply."
        />

        <div className="cr-roles__cloud">
          {ROLES.map((r, i) => (
            <Reveal as="div" scale={0.85} y={16} delay={0.03 * i} key={r.title} className="cr-roles__item">
              <a
                href="#apply"
                className={`cr-roles__pill cr-roles__pill--${SIZES[i % SIZES.length]} cr-roles__pill--${
                  TONES[i % TONES.length]
                }`}
              >
                <r.icon className="cr-roles__pill-icon" strokeWidth={1.7} />
                <span>{r.title}</span>
                <ArrowUpRight className="cr-roles__pill-arrow" size={14} strokeWidth={2.2} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
