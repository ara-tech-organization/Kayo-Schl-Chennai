import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, MessageCircle, Phone, Sparkles, Users } from "lucide-react";
import ArtPanel from "../common/ArtPanel";
import "./Hero.css";

const STATS = [
  { icon: Award, value: "20+", label: "Awards Received" },
  { icon: Users, value: "1,000+", label: "Happy Children" },
  { icon: Sparkles, value: "10+", label: "Years of Trust" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__backdrop" aria-hidden="true">
        <motion.span className="hero__blob hero__blob--a" style={{ y: parallaxY }} />
        <motion.span className="hero__blob hero__blob--b" style={{ y: parallaxY2 }} />
        <span className="hero__grain" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.span
            className="hero__tagline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Shaping Little Minds
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Best Preschool in Chennai &mdash; Nurturing Little Minds Since 2013
          </motion.h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Every child deserves a nurturing start. At Kayo International Preschool and DayCare, we
            have spent over a decade creating a warm, stimulating environment where children aged 6
            months to 12 years discover the joy of learning. Conveniently located in Perungudi, we
            are proud to be the best preschool in Chennai OMR, trusted by more than 1,000 families
            who have watched their children grow into confident, curious learners.
          </motion.p>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            Our founder, <strong>Veena Sundaramurthy</strong>, a TESOL Early Childhood Education
            graduate and Diploma holder in Child Psychology, envisioned a place where education goes
            beyond textbooks. Here, your child will explore, create, question, and flourish under the
            guidance of passionate, trained educators who treat every little one as their own.
          </motion.p>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether you are searching for a top-rated preschool in Perungudi, a nurturing daycare
            centre in OMR Chennai, or a Montessori-inspired early learning programme, Kayo
            International welcomes you with open arms.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#enquiry" className="btn btn-primary">
              Start Today <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919884004650"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </motion.div>

          <motion.a
            href="tel:+919884004650"
            className="hero__phone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Phone size={16} /> +91 98840 04650
          </motion.a>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__visual-frame">
            <ArtPanel
              tone="primary"
              icon={Sparkles}
              label="Happy children learning through play at Kayo International Preschool, Perungudi"
            />
            <motion.div
              className="hero__card hero__card--top"
              style={{ y: parallaxY2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award size={18} strokeWidth={2} />
              <div>
                <strong>4.9★ Rated</strong>
                <span>on Google Reviews</span>
              </div>
            </motion.div>
            <motion.div
              className="hero__card hero__card--bottom"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Users size={18} strokeWidth={2} />
              <div>
                <strong>1,000+ Families</strong>
                <span>trust Kayo since 2013</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-icon">
                <stat.icon strokeWidth={1.8} />
              </span>
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
