import { motion } from "framer-motion";
import { ArrowRight, Award, Home, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import "./FranchiseHero.css";
import heroImg from "../../assets/francisses.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "star", color: "var(--color-gold)", size: 32, top: "18%", left: "9%", speed: 0.38, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "24%", left: "40%", speed: 0.44, float: 14, dur: 5, opacity: 0.8 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "34%", left: "44%", speed: 0.5, float: 22, dur: 6, opacity: 0.7 },
];

const BADGES = [
  { icon: ShieldCheck, label: "No Royalty Fees", tone: "primary", pos: "tl", dur: 4.6 },
  { icon: TrendingUp, label: "2X ROI Potential", tone: "secondary", pos: "tr", dur: 5.2 },
  { icon: Award, label: "10+ Years Trusted", tone: "gold", pos: "br", dur: 4.9 },
];

export default function FranchiseHero() {
  return (
    <section className="fr-hero">
      <div className="fr-hero__backdrop" aria-hidden="true">
        <span className="fr-hero__mesh" />
        <span className="fr-hero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container fr-hero__grid">
        <motion.div
          className="fr-hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <nav className="fr-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Franchise</span>
          </nav>

          <span className="eyebrow">Franchise Opportunity in India</span>

          <h1 className="fr-hero__title">
            Own a Kayo Preschool Franchise — <span className="fr-hero__mark">Let&rsquo;s Grow Together</span>
          </h1>

          <p className="fr-hero__lead">
            An aspiring entrepreneur looking for a meaningful venture in the fast-growing early
            childhood sector? With a decade as the best preschool in Perungudi OMR Chennai, a proven
            NURTURE Lab curriculum, and a reputation built on genuine parent trust, we offer partners
            a pathway to a successful, rewarding preschool business.
          </p>

          <div className="fr-hero__actions">
            <Magnetic strength={0.3}>
              <a href="#enquiry" className="btn btn-primary">
                Enquire Now <ArrowRight size={18} />
              </a>
            </Magnetic>
            <a href="#why-partner" className="fr-hero__link">
              Why partner with us?
            </a>
          </div>
        </motion.div>

        <motion.div
          className="fr-hero__visual"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
        >
          <span className="fr-hero__frame" aria-hidden="true" />
          <div className="fr-hero__photo">
            <img src={heroImg} alt="Kayo International franchise partners celebrating a successful preschool launch" />
          </div>

          <span className="fr-hero__sparkle" aria-hidden="true">
            <Sparkles size={20} strokeWidth={2} />
          </span>

          {BADGES.map((b, i) => (
            <motion.span
              className={`fr-hero__badge fr-hero__badge--${b.pos} fr-hero__badge--${b.tone}`}
              key={b.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? 10 : -10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE },
                scale: { duration: 0.6, delay: 0.5 + i * 0.12, ease: EASE },
                y: { duration: b.dur, delay: 1 + i * 0.15, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <span className="fr-hero__badge-icon">
                <b.icon size={16} strokeWidth={2.2} />
              </span>
              {b.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <svg className="fr-hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,36 C240,68 480,8 720,26 C960,44 1200,64 1440,30 L1440,70 L0,70 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
