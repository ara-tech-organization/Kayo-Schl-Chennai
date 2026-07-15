import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Programmes from "../components/Home/Programmes";
import Curriculum from "../components/Home/Curriculum";
import Testimonials from "../components/Home/Testimonials";
import Ratings from "../components/Home/Ratings";
import GalleryPreview from "../components/Home/GalleryPreview";
import FAQ from "../components/Home/FAQ";
import EnquiryCTA from "../components/Home/EnquiryCTA";
import useSeo from "../hooks/useSeo";

export default function HomePage() {
  useSeo({
    title: "Best Preschool in Chennai | Kayo International Preschool",
    description:
      "Kayo International is the best preschool in Perungudi, Chennai. 10+ years, 4.9★ rating, NURTURE lab curriculum (Montessori + STEM). Book a school tour today!",
  });

  return (
    <PageLayout>
      <Hero />
      <WhyChooseUs />
      <Programmes />
      <Curriculum />
      <Testimonials />
      <Ratings />
      <GalleryPreview />
      <FAQ />
      <EnquiryCTA />
    </PageLayout>
  );
}
