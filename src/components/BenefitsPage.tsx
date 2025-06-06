
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";

interface BenefitsPageProps {
  onNavigate: (section: string) => void;
}

export const BenefitsPage = ({ onNavigate }: BenefitsPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMTBiOTgxIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTIwIDIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCA4Ljk1NC0yMCAyMCA4Ljk1NCAyMCAyMCAyMCAyMC04Ljk1NCAyMC0yMHptLTMwIDBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMC0xMC00LjQ3Ny0xMC0xMHoiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Benefícios que
              <span className="block text-blue-600">Transformam</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra como o Fluxo Stock pode revolucionar a gestão do seu negócio 
              com tecnologia de ponta e resultados comprovados pelos empresários angolanos.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Benefits Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pare de Perder Dinheiro com Gestão Manual
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada dia que passa com planilhas do Excel é dinheiro que sai do seu bolso
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="text-center">
                <div className="h-20 w-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">📈</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Maiores Margens de Lucro</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Elimine desperdícios, reduza custos operacionais e aumente seus lucros 
                  com gestão inteligente de inventário e previsões precisas de demanda. 
                  Pare de comprar demais ou ter rupturas de stock.
                </p>
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">+35%</div>
                  <div className="text-gray-600">Aumento médio na margem de lucro no primeiro ano</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Benefit 2 */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="text-center">
                <div className="h-20 w-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">📦</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Controle Total do Stock</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Elimine completamente rupturas de stock e excesso de inventário 
                  com alertas automáticos, análises preditivas avançadas e 
                  sincronização em tempo real entre todas as localizações.
                </p>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">-90%</div>
                  <div className="text-gray-600">Redução em rupturas de stock e produtos vencidos</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Benefit 3 */}
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <div className="text-3xl">⚡</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Velocidade e Eficiência</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Tome decisões mais rápidas e chegue ao mercado 3x mais rápido 
                  com processamento automático, workflows otimizados e 
                  informações em tempo real na palma da sua mão.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3x</div>
                  <div className="text-gray-600">Mais rápido para tomar decisões estratégicas</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Excel vs Fluxo Stock Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chega de Planilhas do Excel!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare o que você faz hoje vs. o que pode fazer com o Fluxo Stock
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="bg-red-50 rounded-3xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-6">😤 Com Excel (Situação Atual)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span className="text-gray-700">Horas perdidas a atualizar planilhas manualmente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span className="text-gray-700">Erros humanos que custam dinheiro</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span className="text-gray-700">Informações desatualizadas e confusas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span className="text-gray-700">Impossível acessar em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <span className="text-gray-700">Relatórios demoram dias para fazer</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6">🚀 Com Fluxo Stock (Futuro)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Atualização automática em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Zero erros humanos, máxima precisão</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Dados sempre atualizados e confiáveis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Acesso de qualquer lugar, qualquer hora</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Relatórios instantâneos com 1 clique</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Export Reports Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Relatórios Profissionais Instantâneos</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Exporte relatórios de vendas, movimentações de stock, análises financeiras 
                  e gráficos detalhados em PDF, Excel e CSV com apenas 1 clique.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Relatórios de vendas detalhados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Rastreamento de entradas de stock</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Movimentações e histórico completo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Gráficos e análises visuais</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white hover:bg-blue-700 rounded-2xl px-8 py-4 text-lg font-medium"
                  onClick={() => onNavigate('newsletter')}
                >
                  Ver Demo dos Relatórios
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="bg-blue-50 rounded-3xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-2">📄</div>
                    <div className="text-sm font-medium">PDF</div>
                  </div>
                  <div className="bg-green-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm font-medium">Excel</div>
                  </div>
                  <div className="bg-blue-100 rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm font-medium">CSV</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Formatos Disponíveis:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Relatórios executivos em PDF</li>
                  <li>• Planilhas detalhadas em Excel</li>
                  <li>• Dados brutos em CSV</li>
                  <li>• Gráficos e dashboards visuais</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Retorno Garantido do Investimento
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Veja quanto dinheiro pode poupar e ganhar no primeiro ano
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15h</div>
                <div className="text-blue-100">poupadas por semana</div>
                <div className="text-sm mt-2">que antes gastava no Excel</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">-50%</div>
                <div className="text-blue-100">custos operacionais</div>
                <div className="text-sm mt-2">através da automação</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+25%</div>
                <div className="text-blue-100">vendas efetivas</div>
                <div className="text-sm mt-2">sem rupturas de stock</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">precisão dos dados</div>
                <div className="text-sm mt-2">zero erros humanos</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-2xl px-8 py-4 text-lg font-medium"
              onClick={() => onNavigate('home')}
            >
              ← Voltar ao Início
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
