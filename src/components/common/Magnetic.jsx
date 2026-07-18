import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ as: Tag = "div", strength = 0.35, className = "", children, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });
  const MotionTag = motion[Tag] || motion.div;

  function handleMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
