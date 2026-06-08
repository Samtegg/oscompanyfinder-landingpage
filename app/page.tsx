import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import LeadMagnet from "./components/LeadMagnet";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Problem />
      <Features preview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <LeadMagnet />
      <ContactForm />
      {/* <FinalCTA /> */}
      <Footer />
    </main>
  );
}
