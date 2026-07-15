import { useState } from "react";
import {
  CheckCircle2,
  ContactRound,
  FileText,
  Lock,
  Send,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import Reveal from "../common/Reveal";
import { ROLES } from "./careersData";
import "./CareersApplicationForm.css";

const STEPS = [
  { icon: ContactRound, title: "Your Details", text: "Name, phone and email so we can reach you." },
  { icon: Sparkles, title: "Your Role", text: "Tell us which position suits you best." },
  { icon: UploadCloud, title: "Your Resume", text: "Upload your latest resume as PDF, DOC or DOCX." },
];

export default function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleFileChange(e) {
    setFileName(e.target.files?.[0]?.name || "");
  }

  return (
    <section className="cr-apply" id="apply">
      <div className="container">
        <div className="cr-apply__panel">
          <Reveal as="div" x={-30} y={0} className="cr-apply__intro">
            <span className="cr-apply__ribbon">
              <Sparkles size={14} strokeWidth={2.2} />
              We're Hiring
            </span>
            <h2>Take the First Step Toward Your Career at Kayo</h2>
            <p>
              Fill out the form and take the first step toward a deeply rewarding career in early
              childhood education.
            </p>

            <ol className="cr-apply__steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="cr-apply__step-icon">
                    <s.icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <strong>
                      {String(i + 1).padStart(2, "0")} — {s.title}
                    </strong>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="cr-apply__privacy">
              <Lock size={16} strokeWidth={2} />
              All information shared is kept strictly confidential and used solely for
              recruitment purposes.
            </div>
          </Reveal>

          <Reveal as="div" x={30} y={0} delay={0.1} className="cr-apply__form-wrap">
            <div className="cr-apply__stack" aria-hidden="true" />
            <div className="cr-apply__form-card">
              {submitted ? (
                <div className="cr-apply__success">
                  <CheckCircle2 size={44} strokeWidth={1.5} />
                  <h3>Application Received!</h3>
                  <p>
                    Thank you for applying to Team Kayo. Our recruitment team will review your
                    details and reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form className="cr-apply__form" onSubmit={handleSubmit}>
                  <h3>Application Form</h3>
                  <label>
                    Your Name
                    <input type="text" name="fullName" required placeholder="Your full name" />
                  </label>
                  <label>
                    Your Phone
                    <input type="tel" name="phone" required placeholder="+91 00000 00000" />
                  </label>
                  <label>
                    Your Email
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </label>
                  <label>
                    Select Designation
                    <select name="designation" required defaultValue="">
                      <option value="" disabled>
                        Choose a role
                      </option>
                      {ROLES.map((r) => (
                        <option key={r.title} value={r.title}>
                          {r.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Upload Resume
                    <span className="cr-apply__upload">
                      <span className="cr-apply__upload-btn">
                        <UploadCloud size={17} strokeWidth={1.9} />
                        {fileName ? "Change File" : "Choose File"}
                      </span>
                      <span className="cr-apply__upload-name">
                        {fileName ? (
                          <>
                            <FileText size={14} strokeWidth={2} /> {fileName}
                          </>
                        ) : (
                          "PDF, DOC or DOCX"
                        )}
                      </span>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                      />
                    </span>
                  </label>

                  <button type="submit" className="btn btn-primary cr-apply__submit">
                    Submit Application <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
