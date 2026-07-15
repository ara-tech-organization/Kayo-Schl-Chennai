import {
  Dumbbell,
  FlaskConical,
  Globe2,
  Palette,
  Puzzle,
  BookOpen,
  Brain,
  Flower2,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import "./SchoolReadiness.css";

const READINESS = [
  {
    icon: Globe2,
    title: "Cross-Cultural Programs",
    text: "Children explore traditions, languages and festivals from around the world, building empathy, respect for diversity and the adaptability to thrive in a global society. Through cultural stories, songs and celebrations, they develop open-mindedness and pride in their own heritage.",
    tone: "primary",
    size: "lg",
  },
  {
    icon: Brain,
    title: "Cognitive Activities",
    text: "Structured games and challenges strengthen memory, attention and reasoning — the mental building blocks for all future learning. Children build focus, pattern recognition and flexible thinking through hands-on, engaging tasks.",
    tone: "secondary",
  },
  {
    icon: Puzzle,
    title: "Logical Thinking",
    text: "Pattern games, sequencing and problem-solving tasks develop structured reasoning and analytical skills. Children learn to break challenges into steps, evaluate options and think with clarity and confidence.",
    tone: "gold",
  },
  {
    icon: Palette,
    title: "Arty Crafty",
    text: "Open-ended art and craft projects build fine motor skills, creative confidence and self-expression. Children explore colors, textures and techniques while developing patience and pride in their creations.",
    tone: "orange",
  },
  {
    icon: Flower2,
    title: "Yoga",
    text: "Breathwork, poses and mindful movement build physical strength, emotional balance and focus. Children learn to regulate energy, manage emotions and develop body awareness and self-confidence.",
    tone: "secondary",
  },
  {
    icon: Dumbbell,
    title: "Kayo Sports",
    text: "Active play and team games develop gross motor skills, coordination and healthy lifestyle habits. Children build teamwork, discipline and sportsmanship while gaining confidence through physical challenge.",
    tone: "gold",
  },
  {
    icon: FlaskConical,
    title: "STEM Activity",
    text: "Hands-on experiments and building challenges spark curiosity and develop scientific inquiry, engineering thinking and problem-solving. Children learn to question, test and innovate through real-world exploration.",
    tone: "orange",
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    text: "Rich narratives expand vocabulary, imagination and listening skills while building emotional intelligence. Children engage with characters and cultures, developing empathy and the narrative thinking essential for literacy.",
    tone: "primary",
    size: "full",
  },
];

export default function SchoolReadiness() {
  return (
    <section className="readiness" id="readiness">
      <div className="container">
        <Reveal y={16} className="readiness__intro">
          <p>
            One of the most common concerns parents share with us is whether their child will be
            ready for &ldquo;big school.&rdquo; The NURTURE Lab curriculum addresses this concern
            comprehensively.
          </p>
        </Reveal>

        <SectionHeading
          eyebrow="Ready for Big School"
          title="How Our Curriculum Prepares Children for School"
          description="School readiness is not just about knowing letters and numbers — it is about having the confidence, social skills, emotional regulation, curiosity and love of learning that make academic success possible."
        />

        <p className="readiness__lead-in">Our curriculum builds school readiness through:</p>

        <div className="readiness__bento">
          {READINESS.map((r, i) => (
            <Reveal
              as="div"
              y={24}
              delay={0.06 * (i % 4)}
              key={r.title}
              className={`readiness__card readiness__card--${r.tone} ${
                r.size ? `readiness__card--${r.size}` : ""
              }`}
            >
              <span className="readiness__icon">
                <r.icon strokeWidth={1.6} />
              </span>
              <div className="readiness__card-body">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal y={20} delay={0.15} className="readiness__closing">
          <p>
            Graduates of KAYO International enter primary school not just academically prepared,
            but as confident, curious, well-rounded children who genuinely enjoy learning. That is
            the difference a thoughtfully designed curriculum makes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
