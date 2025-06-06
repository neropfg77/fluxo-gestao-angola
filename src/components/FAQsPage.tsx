
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
      question: "Quando será o lançamento oficial?",
      answer: "O lançamento está previsto para este mês. Quem reservar o lugar agora não paga nada até ao lançamento oficial e terá acesso prioritário a todas as funcionalidades."
    },
    {
      question: "Posso exportar relatórios?",
      answer: "Sim! Você pode exportar relatórios de vendas, movimentações de estoque, análises financeiras e gráficos em formatos PDF, Excel e CSV. Os relatórios são gerados automaticamente e podem ser personalizados conforme suas necessidades."
    },
    {
      question: "O sistema funciona offline?",
      answer: "O Fluxo Stock funciona primariamente online para garantir sincronização em tempo real. No entanto, algumas funcionalidades básicas estão disponíveis offline, sendo sincronizadas assim que a conexão for restabelecida."
    },
    {
      question: "Como é feita a gestão de equipe?",
      answer: "Você pode adicionar membros da equipe com diferentes níveis de permissão. Defina quem pode acessar vendas, configurações, relatórios e muito mais. Tudo com controle total de administrador e logs de atividade."
    },
    {
      question: "Existe suporte técnico?",
      answer: "Sim, oferecemos suporte técnico completo via WhatsApp, email e telefone. Nossa equipe está disponível para ajudar na configuração, treinamento e resolução de qualquer dúvida durante o horário comercial."
    },
    {
      question: "Quanto custa o Fluxo Stock?",
      answer: "Oferecemos diferentes planos adaptados ao tamanho do seu negócio. Entre em contacto conosco para conhecer as opções e receber um orçamento personalizado. Quem reservar agora não paga até ao lançamento."
    },
    {
      question: "Posso integrar com outros sistemas?",
      answer: "O Fluxo Stock foi desenvolvido para ser flexível e integrar-se facilmente com sistemas de ponto de venda, contabilidade e outros softwares empresariais através de APIs modernas."
    },
    {
      question: "Os dados ficam seguros?",
      answer: "Absolutamente. Utilizamos criptografia de nível bancário e servidores seguros para proteger todos os seus dados. Realizamos backups automáticos e temos protocolos rigorosos de segurança."
    },
    {
      question: "Funciona para qualquer tipo de negócio?",
      answer: "Sim! O Fluxo Stock foi pensado para pequenas e médias empresas de diversos setores: supermercados, farmácias, lojas de roupa, distribuidoras, restaurantes e muito mais."
    },
    {
      question: "Preciso de treino para usar?",
      answer: "O sistema é muito intuitivo, mas oferecemos treinamento completo para você e sua equipe. Inclui sessões online, manuais detalhados e suporte contínuo."
    },
    {
      question: "Posso testar antes de comprar?",
      answer: "Sim! Oferecemos uma demonstração completa e período de teste gratuito para que possa experimentar todas as funcionalidades antes de tomar a decisão."
    },
    {
      question: "O que acontece se mudar de ideia?",
      answer: "Não há compromisso até ao lançamento. Pode cancelar a reserva a qualquer momento sem custos. Após o lançamento, oferecemos garantia de satisfação."
    },
    {
      question: "Quantos produtos posso registar?",
      answer: "Não há limite! Pode registar quantos produtos precisar. O sistema é escalável e cresce com o seu negócio, desde dezenas até milhares de produtos."
    },
    {
      question: "Posso acessar de qualquer lugar?",
      answer: "Sim! O Fluxo Stock é baseado na nuvem, permitindo acesso de qualquer dispositivo com internet: computador, tablet ou smartphone, a qualquer hora e lugar."
    },
    {
      question: "Como funciona a sincronização em tempo real?",
      answer: "Todas as alterações são sincronizadas instantaneamente entre todos os dispositivos e usuários. Quando uma venda é feita, o estoque é atualizado imediatamente em tempo real."
    },
    {
      question: "Posso controlar múltiplas lojas?",
      answer: "Perfeitamente! O sistema permite gerir múltiplas localizações, cada uma com seu próprio estoque, vendas e relatórios, mas com visão consolidada para o gestor principal."
    },
    {
      question: "Existe app móvel?",
      answer: "Sim! Além da versão web, teremos aplicações móveis nativas para Android e iOS, permitindo gestão completa do seu negócio direto do smartphone."
    },
    {
      question: "Como são feitos os backups?",
      answer: "Realizamos backups automáticos múltiplas vezes por dia. Seus dados ficam armazenados em servidores redundantes, garantindo que nunca perca informações importantes."
    },
    {
      question: "Posso personalizar relatórios?",
      answer: "Completamente! Crie relatórios personalizados com os dados que mais importam para o seu negócio. Escolha períodos, filtros, gráficos e formatos de exportação."
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
              Encontre respostas para as 20 dúvidas mais comuns sobre o Fluxo Stock 
              e descubra como podemos transformar o seu negócio.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 50}>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <button
                    className="w-full px-8 py-6 text-left hover:bg-gray-50/50 transition-colors duration-300"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-blue-600"></div>
                          <div className="w-0.5 h-4 bg-blue-600 absolute"></div>
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
      <div className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ainda tem dúvidas?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar. Entre em contacto conosco 
              e tire todas as suas dúvidas sobre o Fluxo Stock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-8 py-4 text-lg font-medium"
                onClick={() => onNavigate('contacts')}
              >
                Falar Conosco
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-2xl px-8 py-4 text-lg font-medium"
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
