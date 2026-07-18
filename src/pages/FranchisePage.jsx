import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/common/ScrollProgress";
import FranchiseHero from "../components/Franchise/FranchiseHero";
import FranchiseWhyPartner from "../components/Franchise/FranchiseWhyPartner";
import FranchiseSupport from "../components/Franchise/FranchiseSupport";
import FranchiseProfile from "../components/Franchise/FranchiseProfile";
import FranchiseInvestment from "../components/Franchise/FranchiseInvestment";
import FranchiseAwards from "../components/Franchise/FranchiseAwards";
import FranchiseTestimonials from "../components/Franchise/FranchiseTestimonials";
import FranchiseProcess from "../components/Franchise/FranchiseProcess";
import FranchiseEnquiryForm from "../components/Franchise/FranchiseEnquiryForm";
import useSeo from "../hooks/useSeo";

const FRANCHISE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Preschool Franchise Opportunity",
  provider: {
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://www.kayointernational.in/",
  },
  areaServed: ["Chennai", "Tamil Nadu", "South India"],
};

export default function FranchisePage() {
  useSeo({
    title: "Franchise | Kayo International Preschool",
    description:
      "Explore a rewarding preschool franchise opportunity in India with Kayo International. No royalty fees, 2X ROI potential & complete support. Enquire now for Chennai & Tamil Nadu.",
    schema: FRANCHISE_SCHEMA,
  });

  return (
    <PageLayout>
      <FranchiseHero />
      <FranchiseWhyPartner />
      <FranchiseSupport />
      <FranchiseProfile />
      <FranchiseInvestment />
      <FranchiseAwards />
      <FranchiseTestimonials />
      <FranchiseProcess />
      <FranchiseEnquiryForm />
    </PageLayout>
  );
}
