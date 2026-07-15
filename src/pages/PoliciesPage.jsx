import PageLayout from "../components/layout/PageLayout";
import PoliciesHero from "../components/Policies/PoliciesHero";
import PoliciesGrid from "../components/Policies/PoliciesGrid";
import PoliciesProhibited from "../components/Policies/PoliciesProhibited";
import PoliciesCTA from "../components/Policies/PoliciesCTA";
import { POLICIES_GROUP_ONE, POLICIES_GROUP_TWO } from "../components/Policies/policiesData";
import useSeo from "../hooks/useSeo";

const POLICIES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Policies | Kayo International Preschool",
  description:
    "Discover KAYO INTERNATIONAL's comprehensive preschool safety policies in Chennai. Learn about our health standards, child protection, settling-in support & more.",
  publisher: {
    "@type": "Preschool",
    name: "Kayo International Preschool and DayCare",
    sameAs: "https://www.kayointernational.in/",
  },
};

export default function PoliciesPage() {
  useSeo({
    title: "Policies | Kayo International Preschool",
    description:
      "Discover KAYO INTERNATIONAL's comprehensive preschool safety policies in Chennai. Learn about our health standards, child protection, settling-in support & more.",
    schema: POLICIES_SCHEMA,
  });

  return (
    <PageLayout>
      <PoliciesHero />
      <PoliciesGrid
        id="policies"
        items={POLICIES_GROUP_ONE}
        eyebrow="How We Care for Your Child"
        title="Everyday Policies, Built on Trust"
        description="From the very first day to every routine in between, here is how we keep your child safe, comfortable, and cared for."
      />
      <PoliciesProhibited />
      <PoliciesGrid items={POLICIES_GROUP_TWO} />
      <PoliciesCTA />
    </PageLayout>
  );
}
