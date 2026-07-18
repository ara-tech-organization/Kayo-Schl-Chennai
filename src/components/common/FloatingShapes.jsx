import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import "./FloatingShapes.css";

/**
 * A curated, parallax-aware layer of playful "kid" shapes that drift on scroll
 * and gently bob in place. Each item is fully data-driven so every section can
 * compose its own arrangement without spamming the same decoration everywhere.
 *
 * item = {
 *   type: "blob" | "ring" | "dot" | "star" | "squiggle" | "plus" | "triangle" | "cloud",
 *   color: css color (var(--...)),
 *   size: px, top/left/right/bottom: css value,
 *   speed: parallax strength (0.1–0.6), float: bob distance px, delay, rotate
 * }
 */

function Shape({ type, color }) {
  const style = color ? { color } : undefined;
  switch (type) {
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
          <path d="M12 1.5l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.6 5 20l1.4-6.8L1.3 8.5l6.9-.7z" />
        </svg>
      );
    case "squiggle":
      return (
        <svg viewBox="0 0 80 24" fill="none" style={style} aria-hidden="true">
          <path
            d="M2 12c6-10 12 10 18 0s12 10 18 0 12 10 18 0 12 10 18 0"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
          <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8z" />
        </svg>
      );
    case "triangle":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true">
          <path d="M12 3l10 18H2z" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 48 28" fill="currentColor" style={style} aria-hidden="true">
          <path d="M12 26a9 9 0 010-18 11 11 0 0121-3 8 8 0 013 15.5V26z" />
        </svg>
      );
    default:
      return null; // blob/ring/dot handled purely by CSS on the wrapper
  }
}

function FloatingShape({ item, progress }) {
  const reduce = useReducedMotion();
  const d = (item.speed ?? 0.25) * 120;
  const y = useSpring(useTransform(progress, [0, 1], [d, -d]), {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  const bob = item.float ?? 12;
  const wrapStyle = {
    top: item.top,
    left: item.left,
    right: item.right,
    bottom: item.bottom,
    width: item.size,
    height: item.type === "squiggle" ? undefined : item.size,
    color: item.color,
    y: reduce ? 0 : y,
    opacity: item.opacity ?? 1,
  };

  const cssShape = item.type === "blob" || item.type === "ring" || item.type === "dot";

  return (
    <motion.span
      className={`fs-shape fs-shape--${item.type}${item.className ? ` ${item.className}` : ""}`}
      style={wrapStyle}
      aria-hidden="true"
    >
      <motion.span
        className="fs-shape__inner"
        animate={
          reduce
            ? undefined
            : { y: [0, -bob, 0], rotate: item.spin ? [0, 360] : [0, item.rotate ?? 8, 0] }
        }
        transition={{
          duration: item.dur ?? 6,
          repeat: Infinity,
          ease: item.spin ? "linear" : "easeInOut",
          delay: item.delay ?? 0,
        }}
        style={cssShape ? { background: item.color } : undefined}
      >
        {!cssShape && <Shape type={item.type} />}
      </motion.span>
    </motion.span>
  );
}

export default function FloatingShapes({ items = [], className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <div ref={ref} className={`floating-shapes ${className}`} aria-hidden="true">
      {items.map((item, i) => (
        <FloatingShape key={i} item={item} progress={scrollYProgress} />
      ))}
    </div>
  );
}
