import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Scroll-linked parallax wrapper. `speed` controls how far the element drifts
 * relative to natural scroll: positive drifts up (moves faster than scroll),
 * negative drifts down. Distance is `speed * 100`px across the viewport pass.
 */
export default function Parallax({
  children,
  speed = 0.2,
  className = "",
  as = "div",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const d = speed * 100;
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [d, -d]), {
    stiffness: 90,
    damping: 22,
    mass: 0.3,
  });
  const Component = motion[as] || motion.div;

  return (
    <Component ref={ref} className={className} style={{ y, ...style }} {...rest}>
      {children}
    </Component>
  );
}
