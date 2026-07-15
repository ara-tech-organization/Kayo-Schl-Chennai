import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 30,
  x = 0,
  scale = 1,
  duration = 0.75,
  className = "",
  once = true,
  amount = 0.2,
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}
