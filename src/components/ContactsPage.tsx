
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";

interface ContactsPageProps {
  onNavigate: (section: string) => void;
}

export const ContactsPage = ({ onNavigate }: ContactsPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-violet-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOGI1Y2Y2IiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBvbHlnb24gcG9pbnRzPSIxNSwwIDMwLDE1IDE1LDMwIDAsMTUiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Vamos
              <span className="block text-purple-600">Conversar</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você a transformar a gestão do seu negócio. 
              Entre em contacto conosco e descubra como o Fluxo Stock pode fazer a diferença.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* WhatsApp */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="text-center">
                <div className="h-20 w-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">📱</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fale conosco diretamente pelo WhatsApp para suporte rápido e personalizado.
                </p>
                <Button 
                  size="lg" 
                  className="bg-green-600 text-white hover:bg-green-700 rounded-2xl px-6 py-3 font-medium w-full"
                >
                  +244 xxx xxx xxx
                </Button>
              </div>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="text-center">
                <div className="h-20 w-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">✉️</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Envie-nos um email com suas dúvidas ou solicitações. Respondemos rapidamente.
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl px-6 py-3 font-medium w-full"
                >
                  contato@fluxostock.ao
                </Button>
              </div>
            </AnimatedSection>

            {/* Phone */}
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">📞</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Telefone</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ligue para nós durante o horário comercial para atendimento direto.
                </p>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-2xl px-6 py-3 font-medium w-full"
                >
                  +244 xxx xxx xxx
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Office Info */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600">
              Visite-nos no nosso escritório em Luanda
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 text-center">
              <div className="mb-8">
                <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">🏢</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fluxo Stock</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Rua Principal, Edifício Comercial<br />
                  Luanda, Angola
                </p>
                <div className="text-gray-600">
                  <p className="mb-2"><strong>Horário:</strong> Segunda - Sexta, 8h - 18h</p>
                  <p><strong>Sábado:</strong> 9h - 13h</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Entre em contacto conosco hoje mesmo e descubra como o Fluxo Stock 
              pode transformar a gestão do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 rounded-2xl px-8 py-4 text-lg font-medium"
                onClick={() => onNavigate('newsletter')}
              >
                Reservar Demonstração
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black rounded-2xl px-8 py-4 text-lg font-medium"
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
