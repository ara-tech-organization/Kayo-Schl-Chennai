import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CurriculumPage from "./pages/CurriculumPage";
import FranchisePage from "./pages/FranchisePage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/curriculum" element={<CurriculumPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
      <Route
        path="/services"
        element={
          <ComingSoonPage
            title="Programme Details Coming Soon"
            blurb="A dedicated page for every programme — Day Care, Playgroup, Nursery, LKG, UKG and Primary Enrichment — is on its way. Call us for full details today."
          />
        }
      />
      <Route
        path="/gallery"
        element={
          <ComingSoonPage
            title="Gallery Coming Soon"
            blurb="Our full photo gallery is being curated. In the meantime, browse the highlights on our Home page or visit our Perungudi campus in person."
          />
        }
      />
      <Route
        path="*"
        element={
          <ComingSoonPage
            title="Page Not Found"
            blurb="The page you're looking for doesn't exist. Head back to our Home page to explore Kayo International."
          />
        }
      />
    </Routes>
  );
}

export default App;
