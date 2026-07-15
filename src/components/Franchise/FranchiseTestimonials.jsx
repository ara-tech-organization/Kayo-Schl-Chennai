import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import "./FranchiseTestimonials.css";

const EASE = [0.16, 1, 0.3, 1];

const TESTIMONIALS = [
  {
    quote:
      "Partnering with Kayo International was the best decision I made for my entrepreneurial journey. The no-royalty model meant I could reinvest in my centre, and the support from the head office team has been exceptional. Within 18 months, I had not only recovered my investment but was operating a profitable, beloved preschool in my community.",
    author: "Franchise Partner, Chennai",
  },
  {
    quote:
      "What drew me to Kayo was their genuine commitment to quality education and their transparent business model. The NURTURE Lab curriculum is outstanding, parents trust the brand, and my centre now has a long waiting list. I am proud to be part of a brand that truly puts children first.",
    author: "Franchise Partner, Tamil Nadu",
  },
  {
    quote:
      "Coming from a corporate background, I had no experience in education. Kayo's training and operational support gave me the confidence to launch and run my preschool successfully. The 2X ROI promise was not just marketing — it was my reality within the first two years.",
    author: "Franchise Partner, South India",
  },
];

export default function FranchiseTestimonials() {
  return (
    <section className="fr-testi" id="testimonials">
      <div className="fr-testi__backdrop" aria-hidden="true">
        <span className="fr-testi__blob fr-testi__blob--a" />
        <span className="fr-testi__blob fr-testi__blob--b" />
        <Quote className="fr-testi__watermark" strokeWidth={1} />
      </div>

      <div className="container fr-testi__inner">
        <SectionHeading
          eyebrow="In Their Words"
          title="Success Stories from Our Franchise Partners"
          description="Real experiences from entrepreneurs who built a rewarding business with Kayo International."
        />

        <div className="fr-testi__stack">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              className="fr-testi__card"
              key={t.author}
              style={{ "--i": i }}
              initial={{ opacity: 0, y: 32, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileHover={{ rotate: 0, scale: 1.03, y: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
            >
              <Quote size={26} strokeWidth={2} className="fr-testi__mark" aria-hidden="true" />
              <p>&ldquo;{t.quote}&rdquo;</p>
              <strong>&mdash; {t.author}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
