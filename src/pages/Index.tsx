import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import ThumbnailsSection from "@/components/ThumbnailsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ExpertiseSection />
      <AboutSection />
      <ThumbnailsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
