
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, Star, HelpCircle, Phone } from "lucide-react";

interface MobileSidebarProps {
  onNavigate: (id: string) => void;
}

export const MobileSidebar = ({ onNavigate }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden rounded-xl">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-white rounded-r-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" alt="Fluxo Stock" className="h-8 w-8" />
              <span className="text-xl font-bold text-black">Fluxo Stock</span>
            </div>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavigate("home")} 
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors py-3 px-4 rounded-xl hover:bg-gray-50 font-medium"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => handleNavigate("benefits")} 
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors py-3 px-4 rounded-xl hover:bg-gray-50 font-medium"
            >
              <Star className="h-5 w-5" />
              <span>Benefícios</span>
            </button>
            <button 
              onClick={() => handleNavigate("faqs")} 
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors py-3 px-4 rounded-xl hover:bg-gray-50 font-medium"
            >
              <HelpCircle className="h-5 w-5" />
              <span>FAQs</span>
            </button>
            <button 
              onClick={() => handleNavigate("contacts")} 
              className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors py-3 px-4 rounded-xl hover:bg-gray-50 font-medium"
            >
              <Phone className="h-5 w-5" />
              <span>Contactos</span>
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
