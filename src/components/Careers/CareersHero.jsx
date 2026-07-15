import { motion } from "framer-motion";
import { Heart, Home, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "./CareersHero.css";

const EASE = [0.16, 1, 0.3, 1];

const FLOAT_CARDS = [
  { icon: Star, value: "4.9★", label: "Google Rating", tone: "gold", rotate: -7, top: "20%", left: "2%" },
  {
    icon: ShieldCheck,
    value: "10+",
    label: "Years Trusted",
    tone: "primary",
    rotate: 5,
    top: "44%",
    left: "48%",
  },
  {
    icon: Heart,
    value: "1st",
    label: "Founder-Led Culture",
    tone: "secondary",
    rotate: -4,
    top: "72%",
    left: "12%",
  },
];

export default function CareersHero() {
  return (
    <section className="cr-hero">
      <div className="container cr-hero__inner">
        <div className="cr-hero__text">
          <nav className="cr-hero__crumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </nav>

          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Join Team Kayo
          </motion.span>

          <motion.h1
            className="cr-hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
          >
            Meaningful Preschool Teaching Careers in Chennai
          </motion.h1>

          <motion.p
            className="cr-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE }}
          >
            If you have been searching for early childhood educator jobs on OMR, Montessori
            teacher jobs in Chennai, or a preschool teaching career in Perungudi where you are
            valued, supported, and inspired every single day, Team Kayo is waiting for you.
          </motion.p>

          <motion.p
            className="cr-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: EASE }}
          >
            Join a preschool with 10+ years of trusted excellence, a 4.9★ Google rating, and a
            founder-led culture that puts both children and educators first.
          </motion.p>

          <motion.div
            className="cr-hero__cta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
          >
            <a href="#apply" className="btn btn-primary cr-hero__cta">
              Apply Now
            </a>
            <a href="#roles" className="btn btn-outline cr-hero__cta">
              View Open Roles
            </a>
          </motion.div>
        </div>

        <div className="cr-hero__visual" aria-hidden="true">
          <span className="cr-hero__glow" />
          <span className="cr-hero__badge">
            <Sparkles size={15} strokeWidth={2} />
            We're Hiring
          </span>

          {FLOAT_CARDS.map((c, i) => (
            <motion.div
              key={c.label}
              className={`cr-hero__float cr-hero__float--${c.tone}`}
              style={{ top: c.top, left: c.left, rotate: `${c.rotate}deg` }}
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.14, ease: EASE }}
              whileHover={{ scale: 1.08 }}
            >
              <span className="cr-hero__float-icon">
                <c.icon strokeWidth={1.8} />
              </span>
              <strong>{c.value}</strong>
              <span>{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
