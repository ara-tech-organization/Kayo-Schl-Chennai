import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./FAQ.css";

const FAQS = [
  {
    q: "What makes Kayo International the best preschool in Chennai?",
    a: "Kayo International stands out with over a decade of experience, a 4.9★ Google rating, and its exclusive NURTURE lab curriculum that combines Montessori, STEM, and holistic learning. Backed by award-winning excellence and expert leadership, we create a strong foundation for every child.",
  },
  {
    q: "What age groups do you admit at your preschool in Perungudi?",
    a: "We welcome children aged 6 months to 12 years through our Day Care, Playgroup, Nursery, LKG, UKG, and After School programmes. Our age-specific learning approach supports every stage of your child's early development.",
  },
  {
    q: "How does Kayo International ensure child safety and parent communication?",
    a: "We prioritise your child's safety with 24/7 CCTV surveillance, trained staff, strict hygiene practices, and secure facilities. Parents also receive regular SMS updates to stay informed about their child's daily activities and wellbeing.",
  },
  {
    q: "Do you offer daycare facilities for working parents in OMR Chennai?",
    a: "Yes, we provide a safe and nurturing daycare for children from 6 months onwards, ideal for working parents. Our programme includes supervised care, engaging activities, healthy meals, and dedicated rest time in a secure environment.",
  },
  {
    q: "What curriculum does Kayo International follow?",
    a: "Our NURTURE lab curriculum blends Montessori principles, STEM learning, play-based education, and Multiple Intelligence Theory. This balanced approach helps children grow academically, socially, emotionally, and creatively while preparing them for future learning.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container faq__container">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="We understand that choosing a preschool comes with many questions. Here are answers to the most common ones parents ask us."
        />

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={0.05 * i} y={20}>
                <div className={`faq__item ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq__toggle">
                      <Plus size={18} strokeWidth={2.2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq__answer-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="faq__answer">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
