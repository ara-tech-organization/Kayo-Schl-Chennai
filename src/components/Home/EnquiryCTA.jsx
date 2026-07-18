import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Baby,
  Cake,
  CalendarCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";
import Reveal from "../common/Reveal";
import Magnetic from "../common/Magnetic";
import "./EnquiryCTA.css";

const CHIP_TONES = ["primary", "secondary", "gold", "orange"];

const PROGRAMMES = ["Day Care", "Playgroup", "Nursery", "LKG", "UKG", "Primary Enrichment Programme"];

export default function EnquiryCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [programme, setProgramme] = useState("");
  const [progOpen, setProgOpen] = useState(false);
  const progRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  useEffect(() => {
    if (!progOpen) return undefined;
    function onDocClick(e) {
      if (progRef.current && !progRef.current.contains(e.target)) setProgOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setProgOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [progOpen]);

  return (
    <section className="enquiry" id="enquiry">
      <div className="container enquiry__grid">
        <Reveal x={-30} y={0} className="enquiry__intro">
          <span className="eyebrow">Book a Visit</span>
          <h2>Start Your Child's Journey Today</h2>
          <span className="enquiry__hand">We&rsquo;d love to meet you &amp; your little one!</span>
          <p>
            Choosing the right preschool is one of the most important decisions you will make for
            your child. We invite you to visit our Perungudi campus, meet our founder and
            educators, explore our classrooms and play areas, and experience the warm, welcoming
            atmosphere that makes Kayo International the best preschool in Chennai.
          </p>

          <div className="enquiry__points">
            <div className="enquiry__point" data-tone="primary">
              <span>
                <MapPin strokeWidth={1.8} />
              </span>
              <div>
                <strong>Visit Our Campus</strong>
                <p>No.3, 1st Cross Street, Rajiv Nagar, Perungudi, Chennai - 600096</p>
              </div>
            </div>
            <div className="enquiry__point" data-tone="secondary">
              <span>
                <CalendarCheck strokeWidth={1.8} />
              </span>
              <div>
                <strong>Book a Guided Tour</strong>
                <p>Meet our founder and educators</p>
              </div>
            </div>
          </div>

          <a href="tel:+919884004650" className="enquiry__call">
            <Phone size={18} strokeWidth={2} />
            Prefer to speak with us directly? Call <strong>+91 98840 04650</strong>
          </a>
        </Reveal>

        <Reveal x={30} y={0} delay={0.1} className="enquiry__form-wrap">
          <div className="enquiry__form-card">
            <span className="enquiry__tape" aria-hidden="true" />
            {submitted ? (
              <div className="enquiry__success">
                <CheckCircle2 size={44} strokeWidth={1.5} />
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form className="enquiry__form" onSubmit={handleSubmit}>
                <div className="enquiry__form-head">
                  <h3>Enquiry Form</h3>
                  <span className="enquiry__form-hint">Just a few details &mdash; we&rsquo;ll do the rest &#9997;</span>
                </div>

                <div className="enquiry__fields">
                  <label className="enquiry__field" data-tone="primary">
                    <span className="enquiry__field-icon">
                      <User size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Parent Name</span>
                      <input type="text" name="parentName" required placeholder="Your full name" />
                    </span>
                  </label>

                  <label className="enquiry__field" data-tone="secondary">
                    <span className="enquiry__field-icon">
                      <Baby size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Child&rsquo;s Name</span>
                      <input type="text" name="childName" required placeholder="Your child's name" />
                    </span>
                  </label>

                  <label className="enquiry__field" data-tone="gold">
                    <span className="enquiry__field-icon">
                      <Cake size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Child&rsquo;s Age</span>
                      <input type="text" name="childAge" required placeholder="e.g. 3 years" />
                    </span>
                  </label>

                  <label className="enquiry__field" data-tone="orange">
                    <span className="enquiry__field-icon">
                      <Phone size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Phone Number</span>
                      <input type="tel" name="phone" required placeholder="+91 00000 00000" />
                    </span>
                  </label>

                  <label className="enquiry__field enquiry__field--full" data-tone="primary">
                    <span className="enquiry__field-icon">
                      <Mail size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Email</span>
                      <input type="email" name="email" required placeholder="you@email.com" />
                    </span>
                  </label>
                </div>

                <div className="enquiry__fields">
                  <div
                    className="enquiry__field enquiry__field--full enquiry__select-field"
                    data-tone="primary"
                    ref={progRef}
                  >
                    <span className="enquiry__field-icon">
                      <GraduationCap size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Preferred Programme</span>
                      <button
                        type="button"
                        className="enquiry__dropdown-btn"
                        aria-haspopup="listbox"
                        aria-expanded={progOpen}
                        onClick={() => setProgOpen((o) => !o)}
                      >
                        <span className={programme ? "" : "is-placeholder"}>
                          {programme || "Select a programme"}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`enquiry__dropdown-caret ${progOpen ? "is-open" : ""}`}
                        />
                      </button>
                      <input type="hidden" name="programme" value={programme} />
                    </span>

                    <AnimatePresence>
                      {progOpen && (
                        <motion.ul
                          className="enquiry__dropdown-menu"
                          role="listbox"
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {PROGRAMMES.map((p, i) => {
                            const selected = programme === p;
                            return (
                              <li key={p} role="option" aria-selected={selected}>
                                <button
                                  type="button"
                                  className={`enquiry__dropdown-opt ${selected ? "is-selected" : ""}`}
                                  data-tone={CHIP_TONES[i % CHIP_TONES.length]}
                                  onClick={() => {
                                    setProgramme(p);
                                    setProgOpen(false);
                                  }}
                                >
                                  <span className="enquiry__dropdown-dot" aria-hidden="true" />
                                  <span className="enquiry__dropdown-opt-label">{p}</span>
                                  {selected && <Check size={16} strokeWidth={2.4} />}
                                </button>
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  <label className="enquiry__field enquiry__field--full" data-tone="secondary">
                    <span className="enquiry__field-icon">
                      <CalendarDays size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Preferred Date for Visit</span>
                      <input type="date" name="visitDate" />
                    </span>
                  </label>

                  <label className="enquiry__field enquiry__field--full enquiry__field--area" data-tone="orange">
                    <span className="enquiry__field-icon">
                      <MessageCircle size={18} strokeWidth={1.9} />
                    </span>
                    <span className="enquiry__field-body">
                      <span className="enquiry__field-label">Message</span>
                      <textarea name="message" rows={3} placeholder="Tell us a little about your child..." />
                    </span>
                  </label>
                </div>

                <Magnetic strength={0.2} className="enquiry__submit-wrap">
                  <button type="submit" className="btn btn-primary enquiry__submit">
                    Start Today <Send size={17} />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
