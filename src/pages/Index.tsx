import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScotlandHero from "@/components/ScotlandHero";
import ItinerarySection from "@/components/ItinerarySection";
import TipsModal from "@/components/TipsModal";
import ScotlandFooter from "@/components/ScotlandFooter";
import { itinerary7Days, itinerary9Days, itinerary11Days } from "@/data/itineraries";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [showTips, setShowTips] = useState(false);

  // Smooth scroll to section
  const navigateToSection = (sectionId: string) => {
    if (sectionId === "tips") {
      setShowTips(true);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      setCurrentSection(sectionId);
    }
  };

  // Handle scroll events for section visibility
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["itinerary7", "itinerary9", "itinerary11"];
      const currentPos = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPos >= offsetTop && currentPos <= offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal animation for elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ScotlandHero onNavigate={navigateToSection} />

      {/* Itinerary Sections */}
      <main className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ItinerarySection
            id="itinerary7"
            title="Ruta de 7 días"
            days={itinerary7Days}
            itinerary="7"
            isVisible={currentSection === "itinerary7" || currentSection === ""}
          />

          <ItinerarySection
            id="itinerary9"
            title="Ruta de 9 días"
            days={itinerary9Days}
            itinerary="9"
            isVisible={currentSection === "itinerary9"}
          />

          <ItinerarySection
            id="itinerary11"
            title="Ruta de 11 días"
            days={itinerary11Days}
            itinerary="11"
            isVisible={currentSection === "itinerary11"}
          />
        </motion.div>
      </main>

      {/* Footer */}
      <ScotlandFooter />

      {/* Tips Modal */}
      <TipsModal 
        isOpen={showTips} 
        onClose={() => setShowTips(false)} 
      />
    </div>
  );
};

export default Index;
