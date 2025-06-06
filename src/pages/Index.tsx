
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HomePage } from "@/components/HomePage";
import { BenefitsPage } from "@/components/BenefitsPage";
import { FAQsPage } from "@/components/FAQsPage";
import { ContactsPage } from "@/components/ContactsPage";
import { NewsletterModal } from "@/components/NewsletterModal";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTransparent(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'newsletter') {
      setIsNewsletterOpen(true);
    } else {
      setCurrentSection(section);
      // Smooth transition effect
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'benefits':
        return <BenefitsPage onNavigate={handleNavigate} />;
      case 'faqs':
        return <FAQsPage onNavigate={handleNavigate} />;
      case 'contacts':
        return <ContactsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Navbar 
        currentSection={currentSection} 
        onNavigate={handleNavigate} 
        isTransparent={isTransparent}
      />
      
      <main className="transition-opacity duration-300">
        {renderCurrentSection()}
      </main>

      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </div>
  );
};

export default Index;
