
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";

interface BenefitsPageProps {
  onNavigate: (section: string) => void;
}

export const BenefitsPage = ({ onNavigate }: BenefitsPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-emerald-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2310b981" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-30 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Benefícios que
              <span className="block text-emerald-600">Transformam</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra como o Fluxo Stock pode revolucionar a gestão do seu negócio 
              com tecnologia de ponta e resultados comprovados.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="text-center">
                <div className="h-20 w-20 bg-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">📈</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Maiores Margens</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Reduza custos operacionais e aumente seus lucros com gestão inteligente 
                  de inventário e previsões precisas de demanda.
                </p>
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">+35%</div>
                  <div className="text-gray-600">Aumento médio na margem de lucro</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Benefit 2 */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="text-center">
                <div className="h-20 w-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">📦</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Controle Total</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Elimine rupturas de stock e excesso de inventário com alertas 
                  automáticos e análises preditivas avançadas.
                </p>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">-90%</div>
                  <div className="text-gray-600">Redução em rupturas de stock</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Benefit 3 */}
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">⚡</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Velocidade</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Chegue ao mercado 2-3 meses mais rápido com processamento 
                  automático e workflows otimizados.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3x</div>
                  <div className="text-gray-600">Mais rápido para o mercado</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Gestão Completa do Estoque
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <img 
                  src="/lovable-uploads/cdc3fd29-3f44-4a0e-a44d-de9130cc4fc7.png"
                  alt="Gestão de Estoque"
                  className="w-full rounded-2xl"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div>
                <h3 className="text-3xl font-bold mb-6">Organize e Monitore</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Tenha visibilidade completa do seu inventário com categorização 
                  inteligente, alertas de estoque baixo e rastreamento em tempo real.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-emerald-400 rounded-full mr-4"></div>
                    <span className="text-lg">Alertas automáticos de estoque baixo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-emerald-400 rounded-full mr-4"></div>
                    <span className="text-lg">Categorização por localização</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-emerald-400 rounded-full mr-4"></div>
                    <span className="text-lg">Histórico completo de movimentações</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Análises Poderosas</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Tome decisões inteligentes com relatórios detalhados, 
                  análises de tendências e insights em tempo real sobre seu negócio.
                </p>
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800 rounded-2xl px-8 py-4 text-lg font-medium"
                  onClick={() => onNavigate('newsletter')}
                >
                  Ver Demo Completa
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
                <img 
                  src="/lovable-uploads/80274e32-b7aa-43bb-b8dc-d5ce6c10378c.png"
                  alt="Análises Fluxo Stock"
                  className="w-full rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-black text-black hover:bg-black hover:text-white rounded-2xl px-8 py-4 text-lg font-medium"
            onClick={() => onNavigate('home')}
          >
            ← Voltar ao Início
          </Button>
        </div>
      </div>
    </div>
  );
};
