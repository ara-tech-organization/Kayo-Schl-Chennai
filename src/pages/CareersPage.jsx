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
  title: "Preschool Teacher & Staff Careers",
  hiringOrganization: {
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://www.kayointernational.in/",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perungudi, Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
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
