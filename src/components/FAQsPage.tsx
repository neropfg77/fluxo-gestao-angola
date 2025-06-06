
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FAQsPageProps {
  onNavigate: (section: string) => void;
}

export const FAQsPage = ({ onNavigate }: FAQsPageProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona o Fluxo Stock?",
      answer: "O Fluxo Stock é uma plataforma completa de gestão de inventário que conecta todos os aspectos do seu negócio. Desde o controle de estoque até relatórios avançados, tudo é automatizado e sincronizado em tempo real."
    },
    {
      question: "Posso exportar relatórios?",
      answer: "Sim! Você pode exportar relatórios de vendas, movimentações de estoque e análises em formatos PDF, Excel e CSV. Os relatórios são gerados automaticamente e podem ser personalizados conforme suas necessidades."
    },
    {
      question: "O sistema funciona offline?",
      answer: "O Fluxo Stock funciona primariamente online para garantir sincronização em tempo real. No entanto, algumas funcionalidades básicas estão disponíveis offline, sendo sincronizadas assim que a conexão for restabelecida."
    },
    {
      question: "Como é feita a gestão de equipe?",
      answer: "Você pode adicionar membros da equipe com diferentes níveis de permissão. Defina quem pode acessar vendas, configurações, relatórios e muito mais. Tudo com controle total de administrador."
    },
    {
      question: "Existe suporte técnico?",
      answer: "Sim, oferecemos suporte técnico completo via WhatsApp, email e telefone. Nossa equipe está disponível para ajudar na configuração, treinamento e resolução de qualquer dúvida."
    },
    {
      question: "Quanto custa o Fluxo Stock?",
      answer: "Oferecemos diferentes planos adaptados ao tamanho do seu negócio. Entre em contacto conosco para conhecer as opções e receber um orçamento personalizado para suas necessidades."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM2I4MmY2IiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTI1IDBDMTEuMiAwIDAgMTEuMiAwIDI1czExLjIgMjUgMjUgMjUgMjUtMTEuMiAyNS0yNVMzOC44IDAgMjUgMHptMCA0NUMxMy45NSA0NSA1IDM2LjA1IDUgMjVTMTMuOTUgNSAyNSA1czIwIDguOTUgMjAgMjAtOC45NSAyMC0yMCAyMHoiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Perguntas
              <span className="block text-blue-600">Frequentes</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Encontre respostas para as dúvidas mais comuns sobre o Fluxo Stock 
              e descubra como podemos ajudar o seu negócio.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left hover:bg-gray-50/50 transition-colors duration-300"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-gray-600"></div>
                          <div className="w-0.5 h-4 bg-gray-600 absolute"></div>
                        </div>
                      </div>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar. Entre em contacto conosco 
              e tire todas as suas dúvidas sobre o Fluxo Stock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 rounded-2xl px-8 py-4 text-lg font-medium"
                onClick={() => onNavigate('contacts')}
              >
                Falar Conosco
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-2xl px-8 py-4 text-lg font-medium"
                onClick={() => onNavigate('home')}
              >
                ← Voltar ao Início
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
