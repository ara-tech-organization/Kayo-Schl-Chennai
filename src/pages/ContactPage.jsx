import PageLayout from "../components/layout/PageLayout";
import ContactHero from "../components/Contact/ContactHero";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactMap from "../components/Contact/ContactMap";
import useSeo from "../hooks/useSeo";

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Kayo International Preschool and DayCare",
  telephone: "+91-98840-04650",
  email: "chnperungudi@kayointernational.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.3, 1st Cross Street, Rajiv Nagar, Perungudi",
    addressLocality: "Chennai",
    postalCode: "600096",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-18:00",
};

export default function ContactPage() {
  useSeo({
    title: "Contact Us | Kayo International Preschool",
    description:
      "Contact KAYO International preschool in Perungudi, Chennai. Call +91 98840 04650. Visit our campus at Rajiv Nagar, Perungudi. Enrolment open for 2025-26.",
    schema: CONTACT_SCHEMA,
  });

  return (
    <PageLayout>
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
    </PageLayout>
  );
}
