import { useEffect, useState } from "react";
import {
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  FileSignature,
  MapPin,
  MapPinned,
  MessageSquare,
  Rocket,
  Sparkles,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FranchiseProcess.css";

const EASE = [0.16, 1, 0.3, 1];

const STEPS = [
  {
    icon: MessageSquare,
    title: "Enquiry With KAYO",
    text: "Submit your franchise enquiry and share your details, interests, and preferred location with our team.",
  },
  {
    icon: Users2,
    title: "Meeting with a KAYO Representative",
    text: "Connect with our franchise representative to discuss your goals, understand the process, and get answers to your queries.",
  },
  {
    icon: MapPinned,
    title: "Finalizing the Location",
    text: "Work with our team to identify and finalise the ideal location for setting up your Kayo International preschool.",
  },
  {
    icon: FileSignature,
    title: "Agreement Signing",
    text: "Complete the franchise agreement process and begin your journey towards establishing your own Kayo centre.",
  },
  {
    icon: Sparkles,
    title: "Preschool Setup & Registration",
    text: "Receive guidance on infrastructure setup, branding, registrations, and other essential launch requirements.",
  },
  {
    icon: BookOpenCheck,
    title: "Administrative & Teaching Training",
    text: "Get comprehensive training and support for managing operations, administration, and delivering quality early education.",
  },
  {
    icon: Rocket,
    title: "Launch of Your Own School",
    text: "Open your Kayo International preschool with complete support and start your journey as a successful preschool entrepreneur.",
  },
];

const LOCATIONS = [
  "Chennai",
  "OMR",
  "Perungudi",
  "Thoraipakkam",
  "Sholinganallur",
  "Velachery",
  "Medavakkam",
  "Kandanchavadi",
  "Coimbatore",
  "Tamil Nadu",
];

export default function FranchiseProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function go(dir) {
    setActive((a) => (a + dir + STEPS.length) % STEPS.length);
  }

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="fr-process" id="how-to-apply">
      <div className="container">
        <SectionHeading
          eyebrow="Your Next Steps"
          title="How to Apply"
          description="Taking the first step towards owning your Kayo International preschool franchise is simple."
        />

        <div
          className="fr-process__coverflow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="fr-process__nav fr-process__nav--prev"
            aria-label="Previous step"
            onClick={() => go(-1)}
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          <div className="fr-process__stage">
            {STEPS.map((s, i) => {
              const offset = i - active;
              const abs = Math.abs(offset);
              const visible = abs <= 3;

              return (
                <motion.button
                  type="button"
                  key={s.title}
                  className={`fr-process__card ${offset === 0 ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  animate={{
                    x: offset * 190,
                    rotateY: offset === 0 ? 0 : offset < 0 ? 42 : -42,
                    scale: offset === 0 ? 1 : 0.8,
                    opacity: visible ? (offset === 0 ? 1 : 0.55) : 0,
                    zIndex: 10 - abs,
                  }}
                  transition={{ duration: 0.55, ease: EASE }}
                  style={{ pointerEvents: visible ? "auto" : "none" }}
                >
                  <span className="fr-process__step-label">Step {i + 1}</span>
                  <span className="fr-process__icon">
                    <s.icon strokeWidth={1.7} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </motion.button>
              );
            })}
          </div>

          <button
            type="button"
            className="fr-process__nav fr-process__nav--next"
            aria-label="Next step"
            onClick={() => go(1)}
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>

        <div className="fr-process__dots" aria-hidden="true">
          {STEPS.map((s, i) => (
            <span
              key={s.title}
              className={active === i ? "is-active" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <Reveal y={20} className="fr-process__locations">
          <span className="fr-process__locations-icon">
            <MapPin strokeWidth={1.7} />
          </span>
          <div>
            <h3>Now Enrolling Franchise Partners In</h3>
            <p>
              We currently invite enquiries for preschool franchise opportunities in Chennai,
              across Tamil Nadu, and select cities in South India. Prime locations include
              neighbourhoods along OMR, Perungudi, Thoraipakkam, Sholinganallur, Velachery,
              Medavakkam, Kandanchavadi, Coimbatore, and other high-potential markets.
            </p>
            <div className="fr-process__chips">
              {LOCATIONS.map((loc) => (
                <span key={loc}>{loc}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
