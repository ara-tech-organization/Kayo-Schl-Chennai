import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim gradient progress bar pinned to the top of the viewport that fills as
 * the visitor scrolls the page — a subtle premium wayfinding cue.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
