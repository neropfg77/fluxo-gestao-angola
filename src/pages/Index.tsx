
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Users, TrendingUp, Shield, Clock, CheckCircle, Star, BarChart3, Package, UserCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Sucesso!",
        description: "Email registrado com sucesso. Em breve enviaremos novidades!",
      });
      
      setEmail("");
      setIsNewsletterOpen(false);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao registrar email. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Transparent Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-6 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" 
                alt="Fluxo Stock" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Fluxo Stock</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testemunhos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 hover:bg-white/20 rounded-2xl"
                onClick={() => setIsNewsletterOpen(true)}
              >
                Newsletter
              </Button>
              <Button className="bg-blue-600/20 backdrop-blur-sm text-blue-800 hover:bg-blue-600/30 border border-blue-600/30 rounded-2xl">
                Reservar o teu Lugar
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed top-20 left-4 right-4 bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-xl">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-2">Início</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 py-2">Benefícios</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 py-2">Como Funciona</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 py-2">Testemunhos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">Contacto</a>
              <div className="pt-4 border-t space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full bg-white/50 backdrop-blur-sm border-gray-200 rounded-2xl"
                  onClick={() => setIsNewsletterOpen(true)}
                >
                  Newsletter
                </Button>
                <Button className="w-full bg-blue-600 text-white rounded-2xl">
                  Reservar o teu Lugar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Modal */}
      {isNewsletterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Newsletter</h3>
              <button 
                onClick={() => setIsNewsletterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-600"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-2xl py-3"
              >
                {isSubmitting ? "Registrando..." : "Registrar"}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 pt-24">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M25 0C11.2 0 0 11.2 0 25s11.2 25 25 25 25-11.2 25-25S38.8 0 25 0zm0 45C13.95 45 5 36.05 5 25S13.95 5 25 5s20 8.95 20 20-8.95 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              O futuro da gestão de 
              <span className="block text-blue-600">stock chegou a Angola</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simplifique a gestão do seu inventário com tecnologia de ponta. 
              Controle total, relatórios em tempo real e crescimento garantido.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={400} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 hover:bg-white/30 rounded-2xl px-8 py-4 text-lg font-medium shadow-lg"
              >
                Transforme o seu negócio hoje
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 hover:bg-white/30 rounded-2xl px-8 py-4 text-lg font-medium shadow-lg"
              >
                A nossa solução completa
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={600}>
            <div className="relative mx-auto max-w-4xl">
              <img 
                src="/lovable-uploads/61b8dedf-c222-465a-abff-53105d7b5c39.png" 
                alt="Fluxo Stock Dashboard" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Porque escolher Fluxo Stock?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como podemos revolucionar a gestão do seu inventário
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
                title: "Crescimento Garantido",
                description: "Aumente suas vendas em até 40% com gestão otimizada"
              },
              {
                icon: <Shield className="h-8 w-8 text-green-600" />,
                title: "Segurança Total",
                description: "Seus dados protegidos com criptografia de nível bancário"
              },
              {
                icon: <Clock className="h-8 w-8 text-purple-600" />,
                title: "Tempo Real",
                description: "Atualizações instantâneas em todos os dispositivos"
              },
              {
                icon: <Users className="h-8 w-8 text-orange-600" />,
                title: "Gestão de Equipe",
                description: "Controle total sobre permissões e acessos"
              }
            ].map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Três passos simples para revolucionar seu negócio
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Configure",
                description: "Cadastre seus produtos e configure as preferências do seu negócio em minutos"
              },
              {
                step: "02", 
                title: "Controle",
                description: "Monitore vendas, estoque e movimentações em tempo real através do dashboard"
              },
              {
                step: "03",
                title: "Cresça",
                description: "Use relatórios inteligentes para tomar decisões e expandir seu negócio"
              }
            ].map((step, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Funcionalidades Completas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in">
              <div className="space-y-8">
                {[
                  {
                    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
                    title: "Dashboard Inteligente",
                    description: "Visualize todas as métricas importantes em um só lugar"
                  },
                  {
                    icon: <Package className="h-6 w-6 text-green-600" />,
                    title: "Gestão de Estoque",
                    description: "Controle completo do inventário com alertas automáticos"
                  },
                  {
                    icon: <UserCheck className="h-6 w-6 text-purple-600" />,
                    title: "Gestão de Equipe",
                    description: "Defina permissões e acompanhe a produtividade"
                  },
                  {
                    icon: <Calendar className="h-6 w-6 text-orange-600" />,
                    title: "Relatórios Mensais",
                    description: "Análises detalhadas para decisões estratégicas"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/674421b6-f440-4441-b170-87eb33a576de.png" 
                  alt="Gestão de Estoque" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="/lovable-uploads/71fa0184-3d0d-410e-be52-558e0a680eaa.png" 
                  alt="Gestão de Equipe" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="/lovable-uploads/b1e121dd-8231-4967-98ca-ea0ca7c04f95.png" 
                  alt="Movimentações Mensais" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="/lovable-uploads/dda4c1f2-585e-41ca-8421-cc8b046126fc.png" 
                  alt="Análises" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que dizem os nossos clientes
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                business: "Loja de Roupas",
                content: "O Fluxo Stock transformou completamente a gestão da minha loja. Agora tenho controle total do estoque!",
                rating: 5
              },
              {
                name: "João Santos",
                business: "Supermercado",
                content: "Incrível como consegui reduzir perdas e aumentar lucros. Recomendo a todos os empresários!",
                rating: 5
              },
              {
                name: "Ana Costa",
                business: "Farmácia",
                content: "Interface simples e funcionalidades completas. Exatamente o que precisava para meu negócio.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Junte-se a centenas de empresários que já revolucionaram 
              a gestão dos seus negócios com Fluxo Stock.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 py-4 text-lg font-bold"
            >
              Começar Agora - É Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em contacto
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Tem dúvidas? Nossa equipe está pronta para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 rounded-2xl px-8 py-4"
              >
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl px-8 py-4"
              >
                Email
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" 
                alt="Fluxo Stock" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Fluxo Stock</span>
            </div>
            <p className="text-gray-400 mb-8">
              O futuro da gestão de stock chegou a Angola
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 Fluxo Stock. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
