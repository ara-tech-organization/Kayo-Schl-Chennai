import { motion } from "framer-motion";
import { Home, ShieldCheck, HeartHandshake, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "./PoliciesHero.css";

const EASE = [0.16, 1, 0.3, 1];

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "Child Safety First" },
  { icon: Sparkles, label: "Hygiene Certified Campus" },
  { icon: HeartHandshake, label: "10+ Years of Parent Trust" },
];

export default function PoliciesHero() {
  return (
    <section className="pol-hero">
      <div className="pol-hero__backdrop" aria-hidden="true">
        <span className="pol-hero__blob pol-hero__blob--a" />
        <span className="pol-hero__blob pol-hero__blob--b" />
        <span className="pol-hero__ring" />
      </div>

      <div className="container pol-hero__inner">
        <nav className="pol-hero__crumb" aria-label="Breadcrumb">
          <Link to="/">
            <Home size={13} strokeWidth={2.2} /> Home
          </Link>
          <span>/</span>
          <span>Policies</span>
        </nav>

        <motion.span
          className="eyebrow pol-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Safety, Transparency &amp; Peace of Mind
        </motion.span>

        <motion.h1
          className="pol-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
        >
          Our Preschool Policies — Built Around Every Child&rsquo;s Safety
        </motion.h1>

        <motion.p
          className="pol-hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
        >
          At KAYO INTERNATIONAL, we believe every parent deserves complete clarity about how we
          care for their children. Over the past decade, we have earned the trust of Chennai
          families by placing child safety, hygiene, and open communication at the centre of
          everything we do. Our policies are designed to exceed parent expectations — creating a
          secure environment where children explore, learn, and grow with confidence.
        </motion.p>

        <motion.div
          className="pol-hero__highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.26, ease: EASE }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <span className="pol-hero__chip" key={h.label} style={{ "--i": i }}>
              <h.icon size={16} strokeWidth={2} />
              {h.label}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="tel:+919884004650"
          className="btn btn-primary pol-hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease: EASE }}
        >
          <Phone size={17} strokeWidth={2.2} /> Call Now
        </motion.a>
      </div>

      <div className="pol-hero__curve" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,32 C320,90 1120,0 1440,48 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  );
}
