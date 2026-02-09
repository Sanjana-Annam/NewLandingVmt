import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import TrustedBy from "./components/trustedBy/TrustedBy";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import Founder from "./components/founder/Founder";
import Process from "./components/process/Process";
import Footer from "./components/footer/Footer";
import FAQ from "./components/faq/FAQ";
import ThankYouPage from "./pages/ThankYouPage";

function Home() {
  return (
    <>
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
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}
