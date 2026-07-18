import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counts up to `value` once scrolled into view. `prefix`/`suffix` frame the
 * number (e.g. "1,000+" -> value 1000, suffix "+"). Respects decimals via
 * `decimals` for ratings like 4.9.
 */
export default function Counter({ value, prefix = "", suffix = "", decimals = 0, duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let raf;
    let start;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      if (start === undefined) start = now;
      const p = Math.min((now - start) / duration, 1);
      setDisplay(value * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
