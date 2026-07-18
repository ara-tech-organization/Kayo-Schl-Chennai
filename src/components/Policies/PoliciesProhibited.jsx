import { motion } from "framer-motion";
import { Ban, CameraOff, Lock, ShieldAlert, Utensils, VolumeX } from "lucide-react";
import Reveal from "../common/Reveal";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import FloatingShapes from "../common/FloatingShapes";
import "./PoliciesProhibited.css";

const PROHIBITED = [
  { icon: Ban, text: "Physical punishment of any kind" },
  { icon: VolumeX, text: "Shouting or humiliating language" },
  { icon: Utensils, text: "Force-feeding" },
  { icon: Lock, text: "Isolation as a disciplinary measure" },
  { icon: CameraOff, text: "Unauthorised photography or video of children" },
];

const SHAPES = [
  { type: "ring", color: "var(--color-primary)", size: 80, top: "-6%", left: "8%", speed: 0.4, float: 16, dur: 7, opacity: 0.3 },
  { type: "dot", color: "var(--color-secondary)", size: 16, bottom: "16%", left: "5%", speed: 0.46, float: 20, dur: 5, opacity: 0.6 },
  { type: "plus", color: "var(--color-orange)", size: 20, top: "20%", right: "8%", speed: 0.42, float: 14, dur: 6, opacity: 0.6 },
  { type: "star", color: "var(--color-gold)", size: 26, top: "12%", left: "4%", speed: 0.34, float: 18, dur: 6, rotate: 16 },
  { type: "squiggle", color: "var(--color-primary)", size: 60, bottom: "24%", right: "6%", speed: 0.3, float: 12, dur: 7, opacity: 0.35 },
  { type: "dot", color: "var(--color-gold)", size: 14, top: "40%", right: "3%", speed: 0.5, float: 22, dur: 5, opacity: 0.6 },
];

export default function PoliciesProhibited() {
  return (
    <section className="pol-prohibited">
      <span className="pol-prohibited__pattern" aria-hidden="true" />
      <FloatingShapes items={SHAPES} />

      <div className="container pol-prohibited__inner">
        <Reveal className="pol-prohibited__copy" y={24}>
          <span className="pol-prohibited__badge">
            <ShieldAlert strokeWidth={1.8} />
          </span>
          <span className="eyebrow pol-prohibited__eyebrow">What We Never Allow</span>
          <h2>Practices We Strictly Prohibit</h2>
          <p>
            To protect every child in our care, the following practices are strictly prohibited at
            KAYO INTERNATIONAL. Any staff member who violates these standards faces immediate
            disciplinary action.
          </p>
        </Reveal>

        <div className="pol-prohibited__sheet-wrap">
          <Reveal className="pol-prohibited__sheet" y={30} x={20}>
            <span className="pol-prohibited__tape pol-prohibited__tape--l" aria-hidden="true" />
            <span className="pol-prohibited__tape pol-prohibited__tape--r" aria-hidden="true" />

            <div className="pol-prohibited__sheet-head">
              <Ban size={18} strokeWidth={2.4} />
              Strictly Prohibited
            </div>

            <StaggerGroup className="pol-prohibited__list">
              {PROHIBITED.map((item) => (
                <StaggerItem key={item.text} className="pol-prohibited__row">
                  <span className="pol-prohibited__no">
                    <item.icon size={18} strokeWidth={2} />
                    <span className="pol-prohibited__no-bar" aria-hidden="true" />
                  </span>
                  <span className="pol-prohibited__text">{item.text}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>

          <motion.span
            className="pol-prohibited__stamp"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.4, rotate: -24 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.3 }}
          >
            Never<br />Allowed
          </motion.span>
        </div>
      </div>
    </section>
  );
}
