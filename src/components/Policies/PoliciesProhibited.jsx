import { ShieldAlert, Ban, VolumeX, Utensils, Lock, CameraOff } from "lucide-react";
import Reveal from "../common/Reveal";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./PoliciesProhibited.css";

const PROHIBITED = [
  { icon: Ban, text: "Physical punishment of any kind" },
  { icon: VolumeX, text: "Shouting or humiliating language" },
  { icon: Utensils, text: "Force-feeding" },
  { icon: Lock, text: "Isolation as a disciplinary measure" },
  { icon: CameraOff, text: "Unauthorised photography or video recording of children" },
];

export default function PoliciesProhibited() {
  return (
    <section className="pol-prohibited">
      <div className="container pol-prohibited__inner">
        <Reveal className="pol-prohibited__panel" y={30}>
          <span className="pol-prohibited__badge">
            <ShieldAlert strokeWidth={1.8} />
          </span>

          <div className="pol-prohibited__copy">
            <span className="eyebrow pol-prohibited__eyebrow">What We Never Allow</span>
            <h2>Practices Prohibited</h2>
            <p>
              To protect every child in our care, the following practices are strictly prohibited
              at KAYO INTERNATIONAL. Any staff member found violating these standards faces
              immediate disciplinary action — our code of conduct ensures a safe, respectful, and
              nurturing environment at all times.
            </p>
          </div>

          <StaggerGroup className="pol-prohibited__list">
            {PROHIBITED.map((item) => (
              <StaggerItem key={item.text} className="pol-prohibited__item">
                <span className="pol-prohibited__icon">
                  <item.icon size={18} strokeWidth={2} />
                </span>
                <span>{item.text}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
