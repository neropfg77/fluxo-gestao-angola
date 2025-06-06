
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./MobileSidebar";

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  isTransparent: boolean;
}

export const Navbar = ({ currentSection, onNavigate, isTransparent }: NavbarProps) => {
  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isTransparent 
        ? 'bg-white/20 backdrop-blur-xl border border-white/30' 
        : 'bg-white/90 backdrop-blur-xl border border-gray-200/50'
    } rounded-3xl px-6 py-3 shadow-lg`}>
      <div className="flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-3">
          <img src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" alt="Fluxo Stock" className="h-8 w-8" />
          <span className="font-bold text-lg text-gray-900">Fluxo Stock</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => onNavigate('home')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'home' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('benefits')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'benefits' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            Benefícios
          </button>
          <button 
            onClick={() => onNavigate('faqs')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'faqs' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            FAQs
          </button>
          <button 
            onClick={() => onNavigate('contacts')} 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'contacts' ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            Contactos
          </button>
          <Button 
            size="sm" 
            className="bg-black/80 text-white hover:bg-black rounded-2xl px-4 py-2 font-medium backdrop-blur-sm"
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
