import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import FloatingShapes from "../common/FloatingShapes";
import "./FAQ.css";

const SHAPES = [
  { type: "blob", color: "var(--color-secondary-light)", size: 130, bottom: "8%", right: "3%", speed: 0.3, float: 16, dur: 8 },
  { type: "star", color: "var(--color-gold)", size: 28, top: "22%", left: "4%", speed: 0.36, float: 18, dur: 6, rotate: 16 },
  { type: "dot", color: "var(--color-orange)", size: 16, bottom: "24%", left: "8%", speed: 0.46, float: 20, dur: 5, opacity: 0.7 },
];

const FAQS = [
  {
    q: "What makes Kayo International the best preschool in Chennai?",
    a: "Kayo International stands out with over a decade of experience, a 4.9★ Google rating, and its exclusive NURTURE lab curriculum that combines Montessori, STEM, and holistic learning. Backed by award-winning excellence and expert leadership, we create a strong foundation for every child.",
    color: "primary",
    emoji: "⭐",
  },
  {
    q: "What age groups do you admit at your preschool in Perungudi?",
    a: "We welcome children aged 6 months to 12 years through our Day Care, Playgroup, Nursery, LKG, UKG, and After School programmes. Our age-specific learning approach supports every stage of your child's early development.",
    color: "secondary",
    emoji: "🧒",
  },
  {
    q: "How does Kayo International ensure child safety and parent communication?",
    a: "We prioritise your child's safety with 24/7 CCTV surveillance, trained staff, strict hygiene practices, and secure facilities. Parents also receive regular SMS updates to stay informed about their child's daily activities and wellbeing.",
    color: "orange",
    emoji: "🛡️",
  },
  {
    q: "Do you offer daycare facilities for working parents in OMR Chennai?",
    a: "Yes, we provide a safe and nurturing daycare for children from 6 months onwards, ideal for working parents. Our programme includes supervised care, engaging activities, healthy meals, and dedicated rest time in a secure environment.",
    color: "gold",
    emoji: "🌈",
  },
  {
    q: "What curriculum does Kayo International follow?",
    a: "Our NURTURE lab curriculum blends Montessori principles, STEM learning, play-based education, and Multiple Intelligence Theory. This balanced approach helps children grow academically, socially, emotionally, and creatively while preparing them for future learning.",
    color: "forest",
    emoji: "📚",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <motion.span
        className="faq__float"
        aria-hidden="true"
        animate={{ y: [0, -14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <HelpCircle size={20} strokeWidth={1.6} />
      </motion.span>
      <FloatingShapes items={SHAPES} />
      <div className="container faq__grid">
        <Reveal className="faq__aside" x={-24} y={0}>
          <SectionHeading
            align="left"
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            description="We understand that choosing a preschool comes with many questions. Here are answers to the most common ones parents ask us."
          />
          <div className="faq__aside-card">
            <p>Still have a question we haven't answered?</p>
            <a href="https://wa.me/919884004650" target="_blank" rel="noreferrer" className="btn btn-outline">
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
            <a href="tel:+919884004650" className="faq__aside-phone">
              <Phone size={15} /> +91 98840 04650
            </a>
          </div>
        </Reveal>

        <div className="faq__chat">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} className="faq__turn" delay={0.05 * i} y={16}>
                {/* Parent's question — a tappable chat bubble */}
                <button
                  type="button"
                  className={`faq__ask faq__ask--${item.color} ${isOpen ? "is-open" : ""}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq__ask-text">{item.q}</span>
                  <span className="faq__ask-avatar" aria-hidden="true">{item.emoji}</span>
                </button>

                {/* School's reply — pops in from the left */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__reply"
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="faq__reply-avatar" aria-hidden="true">🏫</span>
                      <span className="faq__reply-bubble">
                        <span className="faq__reply-name">Kayo International</span>
                        {item.a}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
