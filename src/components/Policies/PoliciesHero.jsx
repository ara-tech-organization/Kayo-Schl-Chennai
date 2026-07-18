import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Droplets,
  FileCheck2,
  HeartHandshake,
  Home,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import "./PoliciesHero.css";
import policiesImage from "../../assets/3.png";

const EASE = [0.16, 1, 0.3, 1];

const SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 170, top: "4%", left: "-2%", speed: 0.3, float: 20, dur: 8 },
  { type: "blob", color: "var(--color-secondary-light)", size: 140, bottom: "12%", right: "-3%", speed: 0.24, float: 16, dur: 9 },
  { type: "star", color: "var(--color-gold)", size: 32, top: "16%", right: "12%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "plus", color: "var(--color-orange)", size: 22, bottom: "24%", left: "6%", speed: 0.44, float: 14, dur: 5, opacity: 0.8 },
  { type: "dot", color: "var(--color-secondary)", size: 18, top: "34%", left: "42%", speed: 0.5, float: 22, dur: 6, opacity: 0.7 },
];

const HEADING_WORDS = ["Policies", "Built", "on", "Safety,", "Trust", "&", "Total", "Transparency"];
const HIGHLIGHT_WORDS = new Set(["Safety,", "Transparency"]);

const STATS = [
  { value: 12, label: "Documented policies", count: true },
  { value: "24/7", label: "Campus safety" },
  { value: 10, suffix: "+", label: "Years of trust", count: true },
];

// mini policy icons that orbit the shield emblem
const ORBIT = [
  { icon: HeartHandshake, cls: "a", dur: 4.6 },
  { icon: Droplets, cls: "b", dur: 5.2 },
  { icon: Moon, cls: "c", dur: 4.9 },
  { icon: UserCheck, cls: "d", dur: 5.5 },
];

const wordContainer = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } };
const wordItem = {
  hidden: { opacity: 0, y: 24, rotate: -3 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function PoliciesHero() {
  return (
    <section className="pol-hero">
      <div className="pol-hero__backdrop" aria-hidden="true">
        <span className="pol-hero__mesh" />
        <span className="pol-hero__grain" />
      </div>
      <FloatingShapes items={SHAPES} />

      <div className="container pol-hero__inner">
        <div className="pol-hero__copy">
          <motion.nav
            className="pol-hero__crumb"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link to="/">
              <Home size={13} strokeWidth={2.2} /> Home
            </Link>
            <span>/</span>
            <span>Policies</span>
          </motion.nav>

          <motion.span
            className="pol-hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            <ShieldCheck size={13} strokeWidth={2.4} /> Safety &amp; Peace of Mind
          </motion.span>

          <motion.h1 className="pol-hero__title" variants={wordContainer} initial="hidden" animate="show">
            {HEADING_WORDS.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <motion.span
                  variants={wordItem}
                  className={`pol-hero__word ${HIGHLIGHT_WORDS.has(word) ? "pol-hero__word--mark" : ""}`}
                >
                  {word}
                </motion.span>
                {i < HEADING_WORDS.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            className="pol-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease: EASE }}
          >
            At KAYO INTERNATIONAL, every parent deserves complete clarity about how we care for their
            children. Our preschool policies place child safety, hygiene, and open communication at
            the centre of everything we do — a secure environment where children explore, learn, and
            grow with confidence.
          </motion.p>

          <motion.div
            className="pol-hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          >
            <Magnetic strength={0.3}>
              <a href="tel:+919884004650" className="btn btn-primary">
                <Phone size={17} strokeWidth={2.2} /> Call Now
              </a>
            </Magnetic>
            <a href="#policies" className="pol-hero__jump">
              Explore Our Policies
              <span className="pol-hero__jump-icon">
                <ArrowDown size={15} strokeWidth={2.2} />
              </span>
            </a>
          </motion.div>

          <motion.div
            className="pol-hero__stats"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
          >
            {STATS.map((s, i) => (
              <div className="pol-hero__stat" key={s.label}>
                <strong>
                  {s.count ? <Counter value={s.value} suffix={s.suffix || ""} /> : s.value}
                </strong>
                <span>{s.label}</span>
                {i < STATS.length - 1 && <i className="pol-hero__stat-div" aria-hidden="true" />}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="pol-hero__emblem"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          aria-hidden="true"
        >
          <motion.span
            className="pol-hero__ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />

          <div className="pol-hero__shield">
            <img
              src={policiesImage}
              alt="Kayo International staff and families together at a school event"
              className="pol-hero__shield-img"
            />
            <span className="pol-hero__shield-badge">
              <ShieldCheck size={13} strokeWidth={2.4} /> 100% Safe
            </span>
          </div>

          {ORBIT.map((o) => (
            <motion.span
              key={o.cls}
              className={`pol-hero__pin pol-hero__pin--${o.cls}`}
              animate={{ y: [0, o.cls === "a" || o.cls === "c" ? -9 : 9, 0] }}
              transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
            >
              <o.icon size={20} strokeWidth={1.9} />
            </motion.span>
          ))}

          <motion.div
            className="pol-hero__floater pol-hero__floater--transparency"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.7, ease: EASE },
              y: { duration: 4.5, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="pol-hero__floater-icon">
              <FileCheck2 size={18} strokeWidth={2} />
            </span>
            <span>
              <strong>100% Transparent</strong>
              <span>Every policy, plainly shared</span>
            </span>
          </motion.div>

          <motion.div
            className="pol-hero__floater pol-hero__floater--rating"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.85, ease: EASE },
              y: { duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="pol-hero__floater-icon pol-hero__floater-icon--secondary">
              <Star size={18} strokeWidth={2} fill="currentColor" />
            </span>
            <span>
              <strong>4.9★ Rated</strong>
              <span>By Chennai families</span>
            </span>
          </motion.div>

          <span className="pol-hero__sparkle">
            <Sparkles size={20} strokeWidth={1.6} />
          </span>
        </motion.div>
      </div>

      <svg className="pol-hero__wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,110 1440,50 L1440,100 L0,100 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
