import { Sparkles } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import Reveal from "../components/common/Reveal";
import useSeo from "../hooks/useSeo";
import "./ComingSoonPage.css";

export default function ComingSoonPage({ title, blurb }) {
  useSeo({ title: `${title} | Kayo International Preschool` });

  return (
    <PageLayout>
      <section className="coming-soon">
        <div className="container coming-soon__inner">
          <Reveal>
            <span className="coming-soon__icon">
              <Sparkles strokeWidth={1.6} />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1>{title}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p>{blurb}</p>
          </Reveal>
          <Reveal delay={0.26}>
            <a href="tel:+919884004650" className="btn btn-primary">
              Call +91 98840 04650
            </a>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
