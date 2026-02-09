import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/hero/Hero";
import TrustedBy from "./components/trustedBy/TrustedBy";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import Founder from "./components/founder/Founder";
import Process from "./components/process/Process";
import Footer from "./components/footer/Footer";
import PageLoader from "./components/loader/PageLoader";
import FAQ from "./components/faq/FAQ";
import VimiWidget from "./components/VimiChat/VimiWidget";

import ThankYou from "./pages/ThankYou"; // ✅ correct path

function Home() {
  return (
    <>
      <VimiWidget />
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
      <Founder />
      <Process />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <PageLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
