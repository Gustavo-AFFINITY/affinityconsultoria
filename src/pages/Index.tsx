import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConnectionSection from "@/components/ConnectionSection";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";
import ForWhoSection from "@/components/ForWhoSection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import DiagnosticCTA from "@/components/DiagnosticCTA";
import FAQSection from "@/components/FAQSection";

import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <ConnectionSection />
    <HowItWorks />
    <GallerySection />
    <ForWhoSection />
    <Testimonials />
    <AboutSection />
    <DiagnosticCTA />
    <FAQSection />
    
    <LeadForm />
    <Footer />
  </div>
);

export default Index;
