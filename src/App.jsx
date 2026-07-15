import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComingSoonPage from "./pages/ComingSoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/about"
        element={
          <ComingSoonPage
            title="Our About Page Is Coming Soon"
            blurb="We're putting the finishing touches on the story of Kayo International — our founder, our philosophy, and our people. Meanwhile, reach out and we'll happily walk you through it."
          />
        }
      />
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
