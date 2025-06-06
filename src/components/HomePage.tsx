
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmM2Y0ZjYiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8">
            <img 
              src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" 
              alt="Fluxo Stock" 
              className="h-24 w-24 mx-auto mb-8 drop-shadow-lg"
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-6">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 inline-block">
              Lançamento previsto para este mês
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              O futuro da gestão de stock
              <span className="block text-4xl md:text-6xl font-medium text-blue-600 mt-4">
                chegou a Angola
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={400} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Pare de perder dinheiro com gestão manual. O Fluxo Stock é a plataforma que vai 
              transformar a forma como os negócios angolanos gerem o seu inventário, 
              aumentam a rentabilidade e tomam decisões inteligentes baseadas em dados reais.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Sem mensalidades até ao lançamento</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Mais de 100 empresas interessadas</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={600} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-2xl px-8 py-4 text-lg font-medium backdrop-blur-sm"
              onClick={() => onNavigate('newsletter')}
            >
              Reservar o Meu Lugar →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-2xl px-8 py-4 text-lg font-medium backdrop-blur-sm bg-white bg-opacity-80"
              onClick={() => onNavigate('benefits')}
            >
              Ver Benefícios
            </Button>
          </AnimatedSection>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dashboard Inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gerencie seu estoque de forma eficiente com nosso dashboard moderno e intuitivo
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300} className="relative">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/20 shadow-2xl">
              <img 
                src="/lovable-uploads/1e944d0c-f017-40bd-a50c-9c24e9fae56b.png"
                alt="Dashboard Fluxo Stock"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Funcionalidades que Transformam Negócios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como cada funcionalidade foi pensada para resolver os problemas reais dos empresários angolanos
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                <img 
                  src="/lovable-uploads/e045b6a8-8a22-4c8c-97e2-86c3a7a12073.png"
                  alt="Gestão de Vendas"
                  className="w-full rounded-2xl"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Controlo Total das Vendas</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Acompanhe cada venda em tempo real, gerencie receitas e tenha total visibilidade 
                  sobre o desempenho do seu negócio com relatórios detalhados.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Histórico completo de vendas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Análise de receitas em tempo real</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-3 w-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-lg">Relatórios de exportação em PDF/Excel</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-500">
                <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestão de Estoque</h3>
                <p className="text-gray-600 leading-relaxed">
                  Controle total do seu inventário com alertas automáticos, análises em tempo real 
                  e previsões inteligentes de demanda.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-500">
                <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="h-8 w-8 bg-green-600 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Relatórios Avançados</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exporte relatórios completos em PDF, Excel e CSV com análises detalhadas 
                  de vendas, movimentações e performance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-500">
                <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="h-8 w-8 bg-purple-600 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestão de Equipe</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gerencie permissões e acesso da sua equipe com controle total de usuários 
                  e diferentes níveis de autorização.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div id="porque-escolher" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Porque Escolher o Fluxo Stock?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A única plataforma pensada especificamente para as necessidades dos empresários angolanos
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Lançamento em Angola</h3>
                <p className="text-gray-300">
                  Primeira plataforma de gestão de stock desenvolvida especificamente 
                  para o mercado angolano.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-4xl mb-6">💰</div>
                <h3 className="text-2xl font-bold mb-4">Sem Custos Iniciais</h3>
                <p className="text-gray-300">
                  Reserve o seu lugar agora e não pague nada até ao lançamento oficial 
                  da plataforma.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-4xl mb-6">📈</div>
                <h3 className="text-2xl font-bold mb-4">ROI Comprovado</h3>
                <p className="text-gray-300">
                  Empresas que usam sistemas similares aumentam a rentabilidade 
                  em até 35% no primeiro ano.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que dizem os nossos futuros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 100 empresas já manifestaram interesse no Fluxo Stock
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-gray-400 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Finalmente uma solução pensada para Angola. Estamos ansiosos 
                  para implementar no nosso negócio."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">João Miranda</div>
                    <div className="text-gray-600">CEO, Distribuições Miranda</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-gray-400 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "A gestão manual está a custar-nos muito dinheiro. 
                  O Fluxo Stock vai resolver os nossos problemas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Ana Santos</div>
                    <div className="text-gray-600">Gestora, SuperMarket Central</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-gray-400 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Já reservámos o nosso lugar. Vai ser um game-changer 
                  para o nosso setor."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">CM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Carlos Mendes</div>
                    <div className="text-gray-600">Diretor, Farmácia Nova Vida</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não perca esta oportunidade
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Junte-se às empresas angolanas que já escolheram o futuro da gestão de stock. 
              Reserve o seu lugar antes do lançamento oficial.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 py-6 text-xl font-medium"
              onClick={() => onNavigate('newsletter')}
            >
              Reservar o Meu Lugar Agora
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
