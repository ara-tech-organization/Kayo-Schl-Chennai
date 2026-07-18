import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Magnetic from "../common/Magnetic";
import FloatingShapes from "../common/FloatingShapes";
import Counter from "../common/Counter";
import "./Hero.css";
import homeVideo from "../../assets/home.mp4";

const EASE = [0.16, 1, 0.3, 1];

const MARQUEE_ITEMS = [
  { icon: Award, label: "20+ Awards Received" },
  { icon: Users, label: "1,000+ Happy Families" },
  { icon: Sparkles, label: "10+ Years of Trust" },
  { icon: Star, label: "4.9★ Google Rating" },
  { icon: MapPin, label: "Perungudi, OMR Chennai" },
  { icon: GraduationCap, label: "Montessori-Inspired Curriculum" },
];

const HERO_SHAPES = [
  { type: "blob", color: "var(--color-primary-light)", size: 190, top: "6%", right: "4%", speed: 0.34, float: 20, dur: 8, className: "hero__deco-bubble" },
  { type: "blob", color: "var(--color-secondary-light)", size: 130, bottom: "16%", left: "2%", speed: 0.26, float: 16, dur: 7 },
  { type: "ring", color: "var(--color-secondary)", size: 92, top: "58%", right: "8%", speed: 0.42, float: 14, dur: 6, opacity: 0.55 },
  { type: "dot", color: "var(--color-orange)", size: 26, top: "24%", left: "46%", speed: 0.5, float: 22, dur: 5, opacity: 0.9 },
  { type: "dot", color: "var(--color-gold)", size: 18, bottom: "30%", right: "40%", speed: 0.36, float: 18, dur: 6 },
  { type: "star", color: "var(--color-gold)", size: 40, top: "16%", left: "6%", speed: 0.3, float: 16, dur: 6, rotate: 16 },
  { type: "star", color: "var(--color-orange)", size: 26, bottom: "22%", right: "16%", speed: 0.46, float: 20, dur: 7, rotate: -18 },
  { type: "plus", color: "var(--color-secondary-dark)", size: 24, top: "40%", left: "3%", speed: 0.4, float: 14, dur: 5 },
  { type: "squiggle", color: "var(--color-primary)", size: 74, top: "70%", left: "40%", speed: 0.28, float: 12, dur: 7, opacity: 0.5 },
  { type: "cloud", color: "var(--color-surface)", size: 66, top: "10%", left: "58%", speed: 0.22, float: 14, dur: 9 },
];

const HEADING_WORDS = ["The", "Best", "Preschool", "in", "Chennai,", "Built", "for", "Curious", "Little", "Minds"];
const HIGHLIGHT_WORDS = new Set(["Best", "Preschool"]);

const STATS = [
  { value: 10, suffix: "+", label: "Years of joy" },
  { value: 1000, suffix: "+", label: "Happy families" },
  { value: 4.9, decimals: 1, label: "Google rating" },
];

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } },
};

const wordItem = {
  hidden: { opacity: 0, y: 24, rotate: -2 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 140, damping: 16 });
  const tiltY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 140, damping: 16 });

  function handleVisualMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleVisualLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section className="hero" ref={ref}>
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__mesh" />
        <span className="hero__grain" />
      </div>
      <FloatingShapes items={HERO_SHAPES} className="hero__shapes" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span
            className="hero__tagline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Heart size={14} strokeWidth={2.4} /> Shaping Little Minds Since 2013
          </motion.span>

          <motion.h1 variants={wordContainer} initial="hidden" animate="show">
            {HEADING_WORDS.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <motion.span
                  variants={wordItem}
                  className={`hero__word ${HIGHLIGHT_WORDS.has(word) ? "hero__highlight" : ""}`}
                >
                  {word}
                </motion.span>
                {i < HEADING_WORDS.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.85, ease: EASE }}
          >
            Every child deserves a nurturing start. At Kayo International Preschool and DayCare, we
            have spent over a decade creating a warm, stimulating environment where children aged 6
            months to 12 years discover the joy of learning — proudly the best preschool in Chennai
            OMR, trusted by more than 1,000 families in Perungudi.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
          >
            <Magnetic strength={0.3}>
              <a href="#enquiry" className="btn btn-primary">
                Start Today <ArrowRight size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="https://wa.me/919884004650"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </Magnetic>
            <a href="tel:+919884004650" className="hero__phone">
              <Phone size={16} /> +91 98840 04650
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
          >
            {STATS.map((s, i) => (
              <div className="hero__stat" key={s.label}>
                <strong>
                  <Counter value={s.value} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                </strong>
                <span>{s.label}</span>
                {i < STATS.length - 1 && <i className="hero__stat-div" aria-hidden="true" />}
              </div>
            ))}
          </motion.div>

          <motion.details
            className="hero__more"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.12, ease: EASE }}
          >
            <summary>Read our story</summary>
            <p className="hero__lead">
              Our founder, <strong>Veena Sundaramurthy</strong>, a TESOL Early Childhood Education
              graduate and Diploma holder in Child Psychology, envisioned a place where education
              goes beyond textbooks. Here, your child will explore, create, question, and flourish
              under the guidance of passionate, trained educators who treat every little one as
              their own.
            </p>
          </motion.details>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          onMouseMove={handleVisualMove}
          onMouseLeave={handleVisualLeave}
          style={{ perspective: 1200 }}
        >
          <span className="hero__visual-back" aria-hidden="true" />
          <motion.span
            className="hero__visual-dash"
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="hero__visual-art hero__visual-video"
            style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
          >
            <video
              className="hero__visual-video-el"
              src={homeVideo}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className="hero__visual-glow" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="hero__visual-badge hero__visual-badge--rating"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.55, ease: EASE },
              y: { duration: 4.5, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="hero__visual-badge-icon">
              <Star size={18} strokeWidth={2} />
            </span>
            <span>
              <strong>4.9★ Rating</strong>
              <span>on Google Reviews</span>
            </span>
          </motion.div>

          <motion.div
            className="hero__visual-badge hero__visual-badge--safe"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.65, ease: EASE },
              y: { duration: 5, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="hero__visual-badge-icon hero__visual-badge-icon--secondary">
              <ShieldCheck size={18} strokeWidth={2} />
            </span>
            <span>
              <strong>Safe & Nurturing</strong>
              <span>CCTV monitored campus</span>
            </span>
          </motion.div>

          <motion.div
            className="hero__visual-badge hero__visual-badge--years"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, rotate: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.8, ease: EASE },
              scale: { duration: 0.6, delay: 0.8, ease: EASE },
              rotate: { duration: 6, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <strong>10+</strong>
            <span>Years</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#why-kayo"
        className="hero__scroll-cue"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <MousePointerClick size={15} strokeWidth={2} />
        <span>Scroll to explore</span>
        <motion.span
          className="hero__scroll-dot"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className="hero__marquee-item" key={i}>
              <item.icon size={16} strokeWidth={2} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <svg
        className="hero__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C240,60 480,4 720,20 C960,36 1200,58 1440,28 L1440,60 L0,60 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </section>
  );
}
