import PageLayout from "../components/layout/PageLayout";
import CareersHero from "../components/Careers/CareersHero";
import CareersHighlights from "../components/Careers/CareersHighlights";
import CareersWhyJoin from "../components/Careers/CareersWhyJoin";
import CareersRoles from "../components/Careers/CareersRoles";
import CareersApplicationForm from "../components/Careers/CareersApplicationForm";
import useSeo from "../hooks/useSeo";

const CAREERS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Preschool Teacher",
  description:
    "Join Team Kayo as a Preschool Teacher at our Perungudi, Chennai centre. Deliver our NURTURE Lab curriculum in a supportive, professional environment with ongoing training and career growth.",
  hiringOrganization: {
    "@type": "Organization",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://kayointernational.in",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perungudi",
      addressRegion: "Chennai",
      addressCountry: "IN",
    },
  },
  employmentType: "FULL_TIME",
  qualifications: "Bachelor's degree in Early Years Education or equivalent",
  industry: "Early Childhood Education",
  datePosted: "2026-07-01",
  validThrough: "2026-12-31",
  applicationContact: {
    "@type": "ContactPoint",
    contactType: "Recruitment",
    availableLanguage: ["English", "Tamil"],
  },
};

export default function CareersPage() {
  useSeo({
    title: "Careers | Kayo International",
    description:
      "Explore preschool teacher jobs in Chennai at Kayo International. We're hiring passionate early childhood educators for our Perungudi centre. Apply today and grow with us!",
    schema: CAREERS_SCHEMA,
  });

  return (
    <PageLayout>
      <CareersHero />
      <CareersHighlights />
      <CareersWhyJoin />
      <CareersRoles />
      <CareersApplicationForm />
    </PageLayout>
  );
}
