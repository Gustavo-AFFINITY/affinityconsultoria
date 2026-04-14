import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConnectionSection from "@/components/ConnectionSection";
import HowItWorks from "@/components/HowItWorks";
import ForWhoSection from "@/components/ForWhoSection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import DiagnosticCTA from "@/components/DiagnosticCTA";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <ConnectionSection />
    <HowItWorks />
    <ForWhoSection />
    <Testimonials />
    <AboutSection />
    <DiagnosticCTA />
    <FAQSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
