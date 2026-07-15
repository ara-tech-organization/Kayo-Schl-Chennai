import { GraduationCap, HeartHandshake, ShieldCheck, TrendingUp, Users, Wand2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseWhyPartner.css";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "A Trusted and Reputable Brand",
    text: "Backed by over a decade of experience and a reputation built on genuine parent trust across Chennai and Tamil Nadu.",
    tone: "primary",
    size: "lg",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated to Empowering Successful Entrepreneurs",
    text: "We invest in your success as much as our own, with a partnership built on shared growth.",
    tone: "secondary",
  },
  {
    icon: Wand2,
    title: "Expert Guidance from Establishment to Operations",
    text: "Hands-on support at every stage — from site selection to day-to-day centre management.",
    tone: "gold",
  },
  {
    icon: TrendingUp,
    title: "Proven Business Model with Growth Opportunities",
    text: "A model refined over a decade, with a clear pathway to a profitable, scalable preschool business.",
    tone: "orange",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Training and Ongoing Support",
    text: "In-depth training for you and your team, backed by continuous academic and operational support.",
    tone: "secondary",
  },
  {
    icon: Users,
    title: "Strong Community and Collaborative Network",
    text: "Join a growing family of franchise partners who share knowledge, wins and best practices.",
    tone: "primary",
    size: "lg",
  },
];

export default function FranchiseWhyPartner() {
  return (
    <section className="fr-why" id="why-partner">
      <div className="container">
        <SectionHeading
          eyebrow="A Proven Preschool Franchise Opportunity"
          title="Why Partner with Kayo International?"
          description="Join a brand families already trust — and build a business with the systems, training and support to help you succeed."
        />

        <div className="fr-why__bento">
          {REASONS.map((r, i) => (
            <Reveal
              as="div"
              y={24}
              delay={0.06 * (i % 3)}
              key={r.title}
              className={`fr-why__card fr-why__card--${r.tone} ${
                r.size === "lg" ? "fr-why__card--lg" : ""
              }`}
            >
              <span className="fr-why__icon">
                <r.icon strokeWidth={1.6} />
              </span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
