import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, Trees } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { StaggerGroup, StaggerItem } from "../common/Stagger";
import "./WhyChooseUs.css";

const REASONS = [
  {
    icon: Award,
    title: "A Decade of Trust and Excellence",
    text: "Over ten years of shaping confident learners, backed by 20+ awards in early childhood education.",
  },
  {
    icon: BookOpen,
    title: "Expert-Led, Research-Based Curriculum",
    text: "Our NURTURE lab programme blends Montessori and STEM thinking, designed by qualified early-years educators.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and Transparency You Can Count On",
    text: "24/7 CCTV monitoring, trained staff, and regular SMS updates keep you connected to your child's day.",
  },
  {
    icon: Trees,
    title: "Spacious, Stimulating Environment",
    text: "Bright classrooms, sandpits, splash pools, and dedicated play zones built for curious little explorers.",
  },
  {
    icon: HeartHandshake,
    title: "Experienced and Caring Educators",
    text: "Passionate teachers who treat every child as their own, nurturing confidence alongside curriculum.",
  },
  {
    icon: Sparkles,
    title: "Holistic Learning for Every Child",
    text: "From Multiple Intelligence Theory to theatre and STEM, we celebrate every child's unique strengths.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why" id="why-kayo">
      <div className="container">
        <SectionHeading
          eyebrow="Why Families Choose Us"
          title="Why Kayo International Is the Preferred Preschool in Perungudi"
          description="Parents across Perungudi, Nanmangalam, Pallikaranai, Palavakkam, Kottivakkam, Taramani, Kandanchavadi, Thoraipakkam and Adambakkam — all within around 3 km — consistently choose Kayo International. Here's why."
        />

        <StaggerGroup className="why__grid">
          {REASONS.map((reason, i) => (
            <StaggerItem key={reason.title} className={i % 2 === 1 ? "why__card--offset" : ""}>
              <div className="why__card">
                <span className={`why__icon why__icon--c${i % 3}`}>
                  <reason.icon strokeWidth={1.7} />
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
