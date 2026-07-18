import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/common/ScrollProgress";
import CurriculumHero from "../components/Curriculum/CurriculumHero";
import FourPillars from "../components/Curriculum/FourPillars";
import IntelligencesRail from "../components/Curriculum/IntelligencesRail";
import SchoolReadiness from "../components/Curriculum/SchoolReadiness";
import EnquiryCTA from "../components/Home/EnquiryCTA";
import useSeo from "../hooks/useSeo";

const CURRICULUM_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NURTURE Lab Curriculum",
  description:
    "A proprietary early-years curriculum blending Montessori methodology, STEM education, play-based learning and Howard Gardner's Multiple Intelligence Theory.",
  provider: {
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://www.kayointernational.in/",
  },
};

export default function CurriculumPage() {
  useSeo({
    title: "Curriculum | Kayo International Preschool",
    description:
      "Discover KAYO's NURTURE Lab curriculum, a unique blend of Montessori, STEM & play-based learning in Perungudi, Chennai. Enrol your child for holistic early education.",
    schema: CURRICULUM_SCHEMA,
  });

  return (
    <PageLayout>
      <ScrollProgress />
      <CurriculumHero />
      <FourPillars />
      <IntelligencesRail />
      <SchoolReadiness />
      <EnquiryCTA />
    </PageLayout>
  );
}
