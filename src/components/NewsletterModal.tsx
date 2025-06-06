
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { AnimatedSection } from "./AnimatedSection";
import { X } from "lucide-react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([{ email, name }]);

      if (error) throw error;

      setIsSuccess(true);
      setEmail("");
      setName("");
      
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-gray-200/50 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-2xl transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <AnimatedSection animation="scale-in">
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" 
              alt="Fluxo Stock" 
              className="h-16 w-16 mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reservar o Teu Lugar
            </h2>
            <p className="text-gray-600">
              Seja um dos primeiros a experimentar o futuro da gestão de stock em Angola.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">✅</div>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Sucesso!</h3>
              <p className="text-gray-600">Obrigado por se inscrever. Entraremos em contacto em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-gray-800 rounded-2xl px-6 py-4 text-lg font-medium disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Reservar Lugar"}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Não enviamos spam. Apenas atualizações importantes sobre o Fluxo Stock.
              </p>
            </form>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
};
