import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import TrustStrip from "./components/TrustStrip";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import DemoVideo from "./components/DemoVideo";
import ProductScreenshots from "./components/ProductScreenshots";
import Pricing from "./components/Pricing";
import ROI from "./components/ROI";
import LeadMagnet from "./components/LeadMagnet";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <TrustStrip />
      <Problem />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DemoVideo />
      <ProductScreenshots />
      <Pricing />
      <ROI />
      <LeadMagnet />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
