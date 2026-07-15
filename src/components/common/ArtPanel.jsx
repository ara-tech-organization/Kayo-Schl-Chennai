import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./ArtPanel.css";

/**
 * Illustrative stand-in for photography: layered gradient panel with a
 * pattern overlay and a Lucide icon motif. Tilts subtly toward the cursor
 * to read as a premium, tactile "photo" card without using stock imagery.
 */
export default function ArtPanel({
  icon: Icon,
  tone = "primary",
  label,
  className = "",
  tilt = true,
  children,
}) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 150, damping: 18 });

  function handleMove(e) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`art-panel art-panel--${tone} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
    >
      <span className="art-panel__grid" aria-hidden="true" />
      <span className="art-panel__glow" aria-hidden="true" />
      {Icon && (
        <span className="art-panel__icon" aria-hidden="true">
          <Icon strokeWidth={1.4} />
        </span>
      )}
      {label && <span className="art-panel__label">{label}</span>}
      {children}
    </motion.div>
  );
}
