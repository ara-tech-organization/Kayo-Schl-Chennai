import { ArrowUpRight, Drama, FlaskConical, Home as HomeIcon, TreePine, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import ArtPanel from "../common/ArtPanel";
import "./GalleryPreview.css";

const IMAGES = [
  {
    tone: "primary",
    icon: Puzzle,
    span: "large",
    alt: "Montessori-themed classroom at Kayo International Preschool with child-friendly learning materials",
  },
  {
    tone: "secondary",
    icon: TreePine,
    span: "small",
    alt: "Spacious outdoor play area with sandpit and splash pool at Kayo International Preschool Perungudi",
  },
  {
    tone: "gold",
    icon: FlaskConical,
    span: "small",
    alt: "Children engaged in STEM learning activities at Kayo International Preschool Chennai",
  },
  {
    tone: "orange",
    icon: Drama,
    span: "small",
    alt: "Students performing at Kayo Little Theatre, fostering confidence and creativity",
  },
  {
    tone: "cream",
    icon: HomeIcon,
    span: "small",
    alt: "Nurturing daycare centre at Kayo International with safe sleeping and play areas",
  },
];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview" id="gallery">
      <div className="container">
        <SectionHeading
          eyebrow="A Glimpse Inside"
          title="Gallery"
          description="Take a glimpse into the joyful learning experiences at Kayo International. From engaging classroom activities and creative play to celebrations and everyday milestones, our gallery reflects the safe, vibrant, and nurturing environment where children learn, grow, and thrive."
        />

        <div className="gallery-preview__grid">
          {IMAGES.map((img, i) => (
            <Reveal key={img.alt} delay={0.06 * i} y={26} className={`gallery-preview__tile gallery-preview__tile--${img.span}`}>
              <ArtPanel tone={img.tone} icon={img.icon} className="gallery-preview__art" tilt />
              <span className="sr-only">{img.alt}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="gallery-preview__cta">
          <Link to="/gallery" className="btn btn-outline">
            View Full Gallery <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
