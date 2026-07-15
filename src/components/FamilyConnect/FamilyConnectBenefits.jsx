import {
  Bus,
  GlassWater,
  GraduationCap,
  MapPinned,
  Palette,
  ShowerHead,
  Trees,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import "./FamilyConnectBenefits.css";

const BENEFITS = [
  { icon: ShowerHead, label: "Clean Bathrooms & Wash Areas" },
  { icon: Palette, label: "Children's Creative Corner" },
  { icon: Trees, label: "Spacious Indoor & Outdoor Play Areas" },
  { icon: UtensilsCrossed, label: "Dining Area" },
  { icon: MapPinned, label: "Picnics & Field Trips" },
  { icon: Waves, label: "Sand Pit & Splash Pool" },
  { icon: GlassWater, label: "R.O Purified Drinking Water" },
  { icon: Bus, label: "Safe Transport Facility" },
  { icon: GraduationCap, label: "Graduation & Annual Sports Meet" },
];

function Row({ items, reverse }) {
  const track = [...items, ...items];
  return (
    <div className={`fc-benefits__row ${reverse ? "fc-benefits__row--reverse" : ""}`}>
      <div className="fc-benefits__track">
        {track.map((b, i) => (
          <span className="fc-benefits__pill" key={`${b.label}-${i}`}>
            <span className="fc-benefits__pill-icon">
              <b.icon strokeWidth={1.7} size={18} />
            </span>
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FamilyConnectBenefits() {
  const half = Math.ceil(BENEFITS.length / 2);
  const first = BENEFITS.slice(0, half);
  const second = BENEFITS.slice(half);

  return (
    <section className="fc-benefits" id="benefits">
      <div className="container">
        <SectionHeading
          eyebrow="Life at Kayo International"
          title="KAYO Benefits"
          description="Every detail of our campus is designed with your child's safety, comfort and joy in mind."
        />
      </div>

      <div className="fc-benefits__marquee">
        <Row items={first} />
        <Row items={second} reverse />
      </div>
    </section>
  );
}
