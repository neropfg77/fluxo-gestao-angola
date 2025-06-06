
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
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              O futuro da gestão de stock
              <span className="block text-4xl md:text-6xl font-medium text-gray-600 mt-4">
                chegou a Angola
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={400} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforme a gestão do seu inventário com tecnologia inteligente, 
              relatórios em tempo real e automação completa.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={600} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 rounded-2xl px-8 py-4 text-lg font-medium backdrop-blur-sm bg-opacity-90"
              onClick={() => onNavigate('newsletter')}
            >
              Reservar o Teu Lugar
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-black text-black hover:bg-black hover:text-white rounded-2xl px-8 py-4 text-lg font-medium backdrop-blur-sm bg-white bg-opacity-80"
              onClick={() => onNavigate('benefits')}
            >
              Ver Benefícios
            </Button>
          </AnimatedSection>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dashboard Inteligente
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gerencie seu estoque de forma eficiente com nosso dashboard moderno e intuitivo
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300} className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <img 
                src="/lovable-uploads/f7e9756d-a3ae-4172-8409-239d17319b46.png"
                alt="Dashboard Fluxo Stock"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Funcionalidades Principais
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-500">
                <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestão de Estoque</h3>
                <p className="text-gray-600 leading-relaxed">
                  Controle total do seu inventário com alertas automáticos e análises em tempo real.
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
                  Exporte relatórios em PDF, Excel e CSV com análises detalhadas de vendas e movimentações.
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
                  Gerencie permissões e acesso da sua equipe com controle total de usuários.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pronto para revolucionar seu negócio?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Junte-se às empresas angolanas que já transformaram sua gestão de estoque.
            </p>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 rounded-2xl px-12 py-6 text-xl font-medium"
              onClick={() => onNavigate('newsletter')}
            >
              Começar Agora
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
