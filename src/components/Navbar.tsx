
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { useEffect, useState } from "react";

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  isTransparent: boolean;
}

export const Navbar = ({ currentSection, onNavigate, isTransparent }: NavbarProps) => {
  const [isSpecialSection, setIsSpecialSection] = useState(false);

  useEffect(() => {
    const checkSpecialSection = () => {
      const porqueEscolherSection = document.getElementById('porque-escolher');
      if (porqueEscolherSection) {
        const rect = porqueEscolherSection.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setIsSpecialSection(isInView);
      }
    };

    window.addEventListener('scroll', checkSpecialSection);
    return () => window.removeEventListener('scroll', checkSpecialSection);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isSpecialSection
        ? 'bg-white/10 backdrop-blur-xl border border-white/30' 
        : isTransparent 
        ? 'bg-white/20 backdrop-blur-xl border border-white/30' 
        : 'bg-white/90 backdrop-blur-xl border border-gray-200/50'
    } rounded-3xl px-6 py-3 shadow-lg`}>
      <div className="flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-3">
          <img src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" alt="Fluxo Stock" className="h-8 w-8" />
          <span className={`font-bold text-lg ${isSpecialSection ? 'text-white' : 'text-gray-900'}`}>Fluxo Stock</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => onNavigate('home')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'home' 
                ? isSpecialSection ? 'text-white' : 'text-black'
                : isSpecialSection 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('benefits')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'benefits' 
                ? isSpecialSection ? 'text-white' : 'text-black'
                : isSpecialSection 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Benefícios
          </button>
          <button 
            onClick={() => onNavigate('faqs')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'faqs' 
                ? isSpecialSection ? 'text-white' : 'text-black'
                : isSpecialSection 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            FAQs
          </button>
          <button 
            onClick={() => onNavigate('contacts')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'contacts' 
                ? isSpecialSection ? 'text-white' : 'text-black'
                : isSpecialSection 
                ? 'text-white/70 hover:text-white' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Contactos
          </button>
          <Button 
            size="sm" 
            className={`${
              isSpecialSection 
                ? 'bg-white/20 text-white hover:bg-white/30 border border-white/30' 
                : 'bg-blue-600/80 text-white hover:bg-blue-600'
            } rounded-2xl px-4 py-2 font-medium backdrop-blur-sm transition-all`}
            onClick={() => onNavigate('newsletter')}
          >
            Reservar Lugar
          </Button>
        </div>

        <div className="md:hidden">
          <MobileSidebar onNavigate={onNavigate} />
        </div>
      </div>
    </nav>
  );
};
