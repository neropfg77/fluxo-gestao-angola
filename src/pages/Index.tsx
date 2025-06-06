
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, TrendingUp, Users, AlertTriangle, BarChart3, Package, Clock, Target, Shield, Zap, ArrowRight, Database, Calculator, FileText, Settings, Eye, Bell, Download, FileSpreadsheet, FileImage } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MobileSidebar } from "@/components/MobileSidebar";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(false);
  const { toast } = useToast();

  // Handle navbar transparency when reaching benefits section
  useEffect(() => {
    const handleScroll = () => {
      const benefitsSection = document.getElementById("benefits");
      if (benefitsSection) {
        const rect = benefitsSection.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setNavbarTransparent(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert([
          { name: name.trim(), email: email.trim() }
        ]);

      if (error) {
        console.error('Error saving signup:', error);
        toast({
          title: "Erro",
          description: "Houve um problema ao processar a sua reserva. Tente novamente.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Lugar Reservado!",
        description: "Obrigado! Entraremos em contacto assim que o Fluxo Stock estiver disponível."
      });
      
      setIsReservationOpen(false);
      setEmail("");
      setName("");
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: "Erro de Conexão",
        description: "Verifique a sua ligação à internet e tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sf-pro">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${
        navbarTransparent 
          ? 'bg-transparent backdrop-blur-sm border-white/10' 
          : 'bg-white/95 backdrop-blur-xl border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" alt="Fluxo Stock" className="h-8 w-8" />
              <span className={`text-xl font-bold transition-colors ${
                navbarTransparent ? 'text-white' : 'text-black'
              }`}>Fluxo Stock</span>
            </button>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className={`transition-colors text-sm font-medium hover:opacity-80 ${
                navbarTransparent ? 'text-white' : 'text-gray-700 hover:text-black'
              }`}>
                Home
              </button>
              <button onClick={() => scrollToSection("benefits")} className={`transition-colors text-sm font-medium hover:opacity-80 ${
                navbarTransparent ? 'text-white' : 'text-gray-700 hover:text-black'
              }`}>
                Benefícios
              </button>
              <button onClick={() => scrollToSection("faqs")} className={`transition-colors text-sm font-medium hover:opacity-80 ${
                navbarTransparent ? 'text-white' : 'text-gray-700 hover:text-black'
              }`}>
                FAQs
              </button>
              <button onClick={() => scrollToSection("contacts")} className={`transition-colors text-sm font-medium hover:opacity-80 ${
                navbarTransparent ? 'text-white' : 'text-gray-700 hover:text-black'
              }`}>
                Contactos
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] hover:from-[#002980] hover:to-[#2563eb] text-white font-medium text-sm px-4 py-2 rounded-xl">
                    <span className="hidden sm:inline">Reserva o teu Lugar</span>
                    <span className="sm:hidden">Reservar</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md mx-4 rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Reserve o seu lugar no Fluxo Stock</DialogTitle>
                    <DialogDescription className="text-sm font-medium">
                      Seja um dos primeiros a experimentar a revolução na gestão de stock em Angola quando lançarmos este mês!
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleReservation} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="font-medium">Nome Completo</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Seu nome" 
                        required 
                        disabled={isSubmitting}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-medium">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="seu@email.com" 
                        required 
                        disabled={isSubmitting}
                        className="rounded-xl"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#0038a5] to-[#3777fa] rounded-xl font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "A reservar..." : "Reservar Lugar"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <MobileSidebar onNavigate={scrollToSection} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-32 pb-12 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-8 sm:mb-16" animation="fade-in">
            <Badge className="text-white border-black/10 mb-4 sm:mb-6 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 bg-blue-500 rounded-xl">
              Lançamento previsto para este mês
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-4 sm:mb-8 leading-tight tracking-tight">
              O futuro da gestão de stock
              <span className="block bg-gradient-to-r from-[#0038a5] to-[#3777fa] bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl">
                chegou a Angola
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed font-medium px-2">
              Pare de perder dinheiro com gestão manual. O Fluxo Stock é a plataforma que vai transformar 
              a forma como os negócios angolanos gerem o seu inventário, aumentam a rentabilidade e tomam 
              decisões inteligentes baseadas em dados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] hover:from-[#002980] hover:to-[#2563eb] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto rounded-xl">
                    Reservar o Meu Lugar
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 px-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-black flex-shrink-0" />
                <span className="font-medium">Sem mensalidades até ao lançamento</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-black flex-shrink-0" />
                <span className="font-medium">Mais de 100 empresas interessadas</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-in" className="relative max-w-5xl mx-auto" delay={300}>
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-200">
              <img 
                src="/lovable-uploads/b1e121dd-8231-4967-98ca-ea0ca7c04f95.png" 
                alt="Dashboard Fluxo Stock"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg animate-float">
                <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* End Excel Era Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-24 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="fade-in">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
                  Termine de vez com as folhas Excel desorganizadas
                </h2>
                <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                  Chega de perder tempo com ficheiros Excel confusos, cálculos manuais que falham, 
                  e a frustração de não conseguir encontrar informações importantes quando mais precisa.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 items-center">
              <AnimatedSection animation="fade-in-left">
                <div className="bg-red-100 p-6 sm:p-8 rounded-2xl border-2 border-red-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4 sm:mb-6 flex items-center gap-3">
                    <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8" />
                    O Método Antigo (Excel)
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-red-600 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Ficheiros corrompidos e dados perdidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Horas perdidas a fazer cálculos manuais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Erros humanos que custam dinheiro</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Impossível trabalhar em equipa em tempo real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Sem backups automáticos ou segurança</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-right" delay={200}>
                <div className="bg-green-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4 sm:mb-6 flex items-center gap-3">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
                    O Novo Método (Fluxo Stock)
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-green-600 font-medium">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Dados seguros na nuvem com backup automático</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Cálculos automáticos e precisos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Zero erros humanos, máxima precisão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Colaboração em tempo real entre equipas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Segurança de nível bancário</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="bounce-in" delay={400}>
              <div className="text-center mt-12 sm:mt-16">
                <div className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl">
                  <Package className="h-6 w-6 sm:h-8 sm:w-8" />
                  <span className="text-lg sm:text-2xl font-bold">Transforme o seu negócio hoje!</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Export Reports Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="slide-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
                  Relatórios profissionais em segundos
                </h2>
                <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                  Exporte relatórios detalhados e gráficos profissionais em PDF, Excel e CSV. 
                  Dados sempre prontos para apresentações, análises e tomada de decisões estratégicas.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatedSection animation="fade-in-left">
                <Card className="border-blue-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <FileImage className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Relatórios PDF</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      Gere relatórios visuais com gráficos, tabelas e análises completas. 
                      Perfeitos para apresentações a investidores, bancos ou parceiros de negócio.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <Card className="border-blue-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-green-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <FileSpreadsheet className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Ficheiros Excel</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      Exporte todos os dados para Excel para análises personalizadas. 
                      Mantenha compatibilidade com sistemas existentes e workflows da sua equipa.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-right" delay={400}>
                <Card className="border-blue-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-0">
                    <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <Database className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Dados CSV</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      Exporte dados estruturados em CSV para integração com outros sistemas, 
                      análises avançadas ou arquivo de dados históricos.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="scale-in" delay={600}>
              <div className="mt-12 sm:mt-16 bg-white p-8 sm:p-12 rounded-2xl border border-blue-200">
                <h3 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6 sm:mb-8">
                  Tipos de relatórios disponíveis
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div className="text-center">
                    <Download className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-blue-600" />
                    <h4 className="font-bold text-black mb-2">Relatórios de Vendas</h4>
                    <p className="text-sm text-gray-600 font-medium">Performance detalhada por período</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-green-600" />
                    <h4 className="font-bold text-black mb-2">Entrada de Stock</h4>
                    <p className="text-sm text-gray-600 font-medium">Controlo de todas as entradas</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-purple-600" />
                    <h4 className="font-bold text-black mb-2">Rastreamento</h4>
                    <p className="text-sm text-gray-600 font-medium">Movimentações completas</p>
                  </div>
                  <div className="text-center">
                    <Calculator className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-orange-600" />
                    <h4 className="font-bold text-black mb-2">Análises e Gráficos</h4>
                    <p className="text-sm text-gray-600 font-medium">Insights visuais avançados</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Problems & Solutions */}
      <AnimatedSection>
        <section className="py-12 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="slide-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
                  Os desafios que todo empresário angolano enfrenta
                </h2>
                <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                  Identificamos os principais obstáculos na gestão de inventário que estão a limitar o crescimento 
                  dos negócios em Angola. Cada problema tem uma solução específica e comprovada no Fluxo Stock.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
              <AnimatedSection animation="slide-up">
                <Card className="border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-red-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Controlo de Stock Inexistente</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      "Não sei quantos produtos tenho, onde estão localizados, quando é que o stock vai acabar ou 
                      quando devo fazer novas encomendas. Isto resulta em vendas perdidas e capital parado em 
                      produtos que não saem."
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-orange-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Desperdício de Tempo Valioso</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      "Passo horas e horas a contar stock manualmente, a procurar produtos, a fazer cálculos 
                      em papel ou Excel. Este tempo podia ser usado para expandir o negócio e atender melhor 
                      os clientes."
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <Card className="border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full sm:col-span-2 lg:col-span-1 rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-yellow-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Decisões Sem Dados</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      "Não tenho relatórios claros sobre rentabilidade, produtos mais vendidos, ou tendências 
                      de vendas. Tomo decisões baseadas em intuição, quando podia ter dados precisos para crescer 
                      de forma estratégica."
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection className="text-center mb-8 sm:mb-16" animation="bounce-in" delay={600}>
              <div className="inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-2xl font-bold">A Nossa Solução Completa</span>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-green-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <Package className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Controlo Total do Inventário</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      Saiba exatamente quantos produtos tem, a sua localização, níveis mínimos de stock, 
                      histórico de movimentações e previsões automáticas de reposição. Nunca mais perca vendas 
                      por falta de produtos ou tenha capital parado desnecessariamente.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <Card className="border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Automatização Inteligente</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      Alertas automáticos de stock baixo, relatórios gerados instantaneamente, sincronização 
                      em tempo real e gestão simplificada. Poupe dezenas de horas por semana e foque no que 
                      realmente importa: fazer crescer o seu negócio.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <Card className="border-gray-200 bg-white p-6 sm:p-8 hover:shadow-lg transition-all h-full sm:col-span-2 lg:col-span-1 rounded-2xl">
                  <CardContent className="p-0">
                    <div className="bg-purple-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-black mb-3 sm:mb-4 text-lg sm:text-xl font-bold">Análises e Crescimento</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                      Dados detalhados sobre rentabilidade por produto, tendências de vendas, análises de 
                      performance e relatórios personalizados. Tome decisões informadas que aceleram o 
                      crescimento e maximizam os lucros do seu negócio.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Showcase */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-20" animation="fade-in">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
              Veja o Fluxo Stock em funcionamento
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
              Uma interface moderna e intuitiva que transforma a complexidade da gestão de stock 
              numa experiência simples e eficiente. Cada funcionalidade foi pensada para o mercado angolano.
            </p>
          </AnimatedSection>

          <div className="space-y-16 sm:space-y-32">
            <AnimatedSection animation="fade-in">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                    <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Dashboard Inteligente</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-medium">
                    Tenha uma visão completa e em tempo real do seu negócio numa única tela. O dashboard 
                    do Fluxo Stock apresenta métricas essenciais, alertas importantes e indicadores de 
                    performance que permitem uma gestão eficaz e decisões rápidas.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Métricas de vendas e rentabilidade atualizadas em tempo real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Alertas automáticos para stock baixo e produtos em falta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Gráficos interativos para análise de tendências e padrões</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Resumo personalizado baseado no seu tipo de negócio</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <AnimatedSection animation="scale-in">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-8">
                      <img 
                        src="/lovable-uploads/dda4c1f2-585e-41ca-8421-cc8b046126fc.png" 
                        alt="Dashboard Fluxo Stock"
                        className="rounded-xl shadow-2xl w-full"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                  <AnimatedSection animation="scale-in">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-8">
                      <img 
                        src="/lovable-uploads/71fa0184-3d0d-410e-be52-558e0a680eaa.png" 
                        alt="Análises Fluxo Stock"
                        className="rounded-xl shadow-2xl w-full"
                      />
                    </div>
                  </AnimatedSection>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-green-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                    <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Análises Avançadas</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-medium">
                    Transforme dados em insights acionáveis. As análises avançadas do Fluxo Stock revelam 
                    padrões ocultos, identificam oportunidades de crescimento e mostram exatamente onde 
                    investir para maximizar a rentabilidade do seu negócio.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Relatórios detalhados de vendas por produto, categoria e período</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Análise de rentabilidade com margem de lucro por item</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Previsões inteligentes de vendas e necessidades de stock</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Identificação de produtos com melhor performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-purple-50 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Gestão de Equipas</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-medium">
                    Organize a sua equipa com controlo total sobre permissões e responsabilidades. 
                    Acompanhe a produtividade, defina níveis de acesso e mantenha um histórico completo 
                    de todas as ações realizadas no sistema.
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Controlo granular de acessos e permissões por utilizador</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Histórico completo de ações e alterações no sistema</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Colaboração em tempo real entre membros da equipa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">Relatórios de produtividade e performance individual</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <AnimatedSection animation="scale-in">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-8">
                      <img 
                        src="/lovable-uploads/674421b6-f440-4441-b170-87eb33a576de.png" 
                        alt="Gestão de Equipas Fluxo Stock"
                        className="rounded-xl shadow-2xl w-full"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection>
        <section id="benefits" className="py-12 sm:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="fade-in">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
                  Porquê escolher o Fluxo Stock?
                </h2>
                <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 font-medium">
                  Mais de 100 empresas angolanas já demonstraram interesse. Junte-se aos inovadores que estão 
                  a preparar-se para transformar a gestão dos seus negócios com tecnologia de ponta.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
              <AnimatedSection animation="scale-in">
                <div className="text-center">
                  <div className="bg-white/10 p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <Shield className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">100% Seguro</h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-base font-medium">
                    Dados protegidos com encriptação de nível bancário, backup automático diário e servidores 
                    seguros para garantir que as suas informações estão sempre protegidas.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <div className="text-center">
                  <div className="bg-white/10 p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <Eye className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Interface Intuitiva</h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-base font-medium">
                    Design limpo e moderno, criado especificamente para ser fácil de usar. Se consegue 
                    usar WhatsApp, consegue dominar o Fluxo Stock em minutos.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={400}>
                <div className="text-center">
                  <div className="bg-white/10 p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <Users className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Suporte Local</h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-base font-medium">
                    Equipa de apoio dedicada em português de Angola, que entende as particularidades 
                    do nosso mercado e está sempre disponível para ajudar.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={600}>
                <div className="text-center">
                  <div className="bg-white/10 p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <Zap className="h-6 w-6 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Implementação Rápida</h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-base font-medium">
                    Comece a usar em menos de 10 minutos. Importação automática de dados existentes 
                    e configuração guiada para estar operacional imediatamente.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-in" delay={800}>
              <div className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Trusted by 100+ Businesses</h3>
                <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                  Empresários angolanos já confiam no Fluxo Stock para transformar a gestão dos seus negócios. 
                  Desde pequenas lojas a grandes distribuidoras, estamos a revolucionar a forma como se gere stock em Angola.
                </p>
                <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">100+</div>
                    <div className="text-blue-100 text-xs sm:text-base font-medium">Empresas Interessadas</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">90%</div>
                    <div className="text-blue-100 text-xs sm:text-base font-medium">Redução no Tempo de Gestão</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">35%</div>
                    <div className="text-blue-100 text-xs sm:text-base font-medium">Aumento de Rentabilidade</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="py-12 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="slide-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
                  O que dizem os nossos clientes beta
                </h2>
                <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
                  Empresários angolanos que já testaram o Fluxo Stock partilham como a plataforma 
                  transformou a gestão dos seus negócios e aumentou a sua rentabilidade.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatedSection animation="slide-up">
                <Card className="border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg font-medium">
                      "Finalmente posso dormir descansado sabendo exatamente o que tenho em stock. 
                      O Fluxo Stock mudou completamente a gestão da minha loja. Antes perdia vendas por não saber 
                      se tinha produtos, agora tenho alertas automáticos e nunca mais fico sem stock dos 
                      produtos mais vendidos."
                    </p>
                    <div>
                      <p className="font-bold text-black">Carlos Muhongo</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Proprietário, Supermercado Mbanza Kongo</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all h-full rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg font-medium">
                      "Os relatórios são incríveis! Agora sei exatamente quais produtos dão mais lucro, 
                      em que épocas vendem melhor e posso focar no que realmente importa para o crescimento. 
                      Aumentei a minha margem de lucro em 40% apenas optimizando o mix de produtos."
                    </p>
                    <div>
                      <p className="font-bold text-black">Maria Tchingoma</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">Gestora, Farmácia Vida Nova</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <Card className="border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all h-full sm:col-span-2 lg:col-span-1 rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg font-medium">
                      "Poupei mais de 15 horas por semana que gastava a contar stock e fazer relatórios 
                      manuais. Agora uso esse tempo para expandir o negócio, visitar fornecedores e 
                      melhorar o atendimento. O retorno do investimento foi imediato."
                    </p>
                    <div>
                      <p className="font-bold text-black">João Kassoma</p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">CEO, Distribuidora Kimbanda</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQs Section */}
      <AnimatedSection>
        <section id="faqs" className="py-12 sm:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="slide-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
                  Perguntas frequentes
                </h2>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed px-4 font-medium">
                  Esclarecemos as dúvidas mais comuns sobre o Fluxo Stock e como pode transformar 
                  a gestão do seu negócio em Angola.
                </p>
              </AnimatedSection>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  question: "Quando será lançado oficialmente o Fluxo Stock?",
                  answer: "O lançamento oficial do Fluxo Stock está previsto para este mês de dezembro de 2024. Estamos a finalizar os últimos testes e ajustes baseados no feedback dos nossos clientes beta. Quem reservar o lugar será notificado primeiro e terá acesso prioritário, além de condições especiais de lançamento incluindo período gratuito estendido."
                },
                {
                  question: "Quanto vai custar a subscrição mensal do Fluxo Stock?",
                  answer: "Estamos a finalizar uma estrutura de preços pensada especificamente para o mercado angolano, com diferentes planos para diferentes tipos e tamanhos de negócio. O nosso objetivo é que seja acessível e proporcione um excelente retorno do investimento. Os preços serão anunciados no lançamento, mas garantimos que será uma fração do que poupa em tempo e aumenta em rentabilidade."
                },
                {
                  question: "Preciso de conhecimentos técnicos avançados para usar o Fluxo Stock?",
                  answer: "Absolutamente não! O Fluxo Stock foi criado para ser extremamente intuitivo e fácil de usar. Se consegue usar WhatsApp ou Facebook, consegue usar o Fluxo Stock. Fornecemos tutoriais completos, suporte personalizado e a nossa equipa ajuda na configuração inicial. A maioria dos utilizadores consegue estar operacional em menos de 30 minutos."
                },
                {
                  question: "O Fluxo Stock funciona sem ligação à internet?",
                  answer: "O Fluxo Stock tem funcionalidades offline limitadas que permitem consultar informações básicas e registar algumas operações quando não há internet. Assim que a ligação for restaurada, todos os dados são sincronizados automaticamente. Para acesso completo a todas as funcionalidades e relatórios em tempo real, é necessária ligação à internet."
                },
                {
                  question: "Como posso ter a certeza de que os meus dados estão seguros?",
                  answer: "A segurança dos dados é a nossa prioridade máxima. Utilizamos encriptação de nível bancário (SSL 256-bit), servidores seguros com certificações internacionais, backup automático diário e múltiplas camadas de proteção. Os seus dados ficam armazenados em data centers certificados e nunca são partilhados com terceiros. Além disso, você pode exportar os seus dados a qualquer momento."
                },
                {
                  question: "Posso importar os dados que já tenho de stock de outros sistemas?",
                  answer: "Sim! O Fluxo Stock permite importar dados de Excel, outros sistemas de gestão e até mesmo listas manuais. A nossa equipa técnica ajuda no processo de migração para garantir que nenhuma informação se perde. Também oferecemos assistência para limpar e organizar os dados durante a importação, optimizando desde o início a estrutura do seu inventário."
                },
                {
                  question: "O sistema é adequado para diferentes tipos de negócio?",
                  answer: "O Fluxo Stock foi desenvolvido para ser flexível e adaptar-se a diferentes tipos de negócio: supermercados, farmácias, lojas de roupa, distribuidoras, armazéns, oficinas e muito mais. Pode configurar categorias personalizadas, unidades de medida específicas, múltiplas localizações e até mesmo diferentes moedas. O sistema cresce com o seu negócio."
                },
                {
                  question: "Que tipo de suporte técnico é fornecido?",
                  answer: "Oferecemos suporte completo em português de Angola através de múltiplos canais: WhatsApp para questões urgentes, email para questões detalhadas, tutoriais em vídeo, documentação completa e sessões de formação personalizadas. A nossa equipa de suporte conhece profundamente o mercado angolano e está disponível durante horário comercial com resposta rápida."
                }
              ].map((faq, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <Card className="border-gray-200 rounded-2xl">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contacts" className="py-12 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <AnimatedSection animation="slide-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2">
                  Entre em contacto connosco
                </h2>
                <p className="text-base sm:text-xl text-gray-600 leading-relaxed px-4 font-medium">
                  Tem dúvidas específicas sobre como o Fluxo Stock pode transformar o seu negócio? 
                  A nossa equipa está pronta para esclarecer todas as suas questões e ajudar no que precisar.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
              <AnimatedSection animation="scale-in">
                <Card className="border-gray-200 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all cursor-pointer h-full rounded-2xl">
                  <CardContent className="p-6 sm:p-10 text-center h-full flex flex-col">
                    <div className="bg-green-500 text-white p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                      <Database className="h-6 w-6 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">WhatsApp</h3>
                    <p className="text-green-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow font-medium">
                      Fale diretamente com a nossa equipa de vendas e suporte técnico. 
                      Resposta rápida durante horário comercial.
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-xl" onClick={() => {
                      console.log("WhatsApp link needs to be configured here");
                    }}>
                      Conversar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <Card className="border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all cursor-pointer h-full rounded-2xl">
                  <CardContent className="p-6 sm:p-10 text-center h-full flex flex-col">
                    <div className="bg-blue-500 text-white p-4 sm:p-6 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                      <FileText className="h-6 w-6 sm:h-10 sm:w-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 sm:mb-4">Email</h3>
                    <p className="text-blue-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow font-medium">
                      Envie-nos uma mensagem detalhada com as suas questões. 
                      Resposta garantida em 24 horas.
                    </p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-xl" onClick={() => {
                      window.location.href = "mailto:info@fluxostock.com";
                    }}>
                      Enviar Email
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black text-center mb-6 sm:mb-8">
                Informações de contacto
              </h3>
              
              <AnimatedSection animation="slide-up">
                <Card className="border-gray-200 rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Qual é o melhor horário para contactar?</p>
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-base font-medium">
                          A nossa equipa está disponível de segunda a sexta-feira, das 8h às 17h (horário de Luanda). 
                          No WhatsApp, tentamos responder mesmo fora deste horário para questões urgentes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="border-gray-200 rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Qual é o tempo de resposta?</p>
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-base font-medium">
                          No WhatsApp respondemos normalmente em minutos durante o horário comercial. 
                          Por email, garantimos resposta em menos de 24 horas, mas normalmente é muito mais rápido.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <Card className="border-gray-200 rounded-2xl">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Oferecem demonstrações personalizadas?</p>
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-base font-medium">
                          Sim! Após o lançamento, oferecemos demonstrações personalizadas por videochamada 
                          onde mostramos como o Fluxo Stock pode ser configurado especificamente para o seu tipo de negócio.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-3 mb-4 sm:mb-6 hover:opacity-80 transition-opacity"
              >
                <img src="/lovable-uploads/be851739-6948-467b-b6d5-48c4ce48598f.png" alt="Fluxo Stock" className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-lg sm:text-xl font-bold">Fluxo Stock</span>
              </button>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-medium">
                A revolução na gestão de stock para empresas angolanas. 
                Uma plataforma moderna, segura e criada especificamente para as necessidades 
                do nosso mercado.
              </p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Lançamento</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">Lançamento previsto para este mês</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">Plataforma web completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">Mais de 100 empresas interessadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">Suporte técnico em português</span>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contacto</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">info@fluxostock.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">WhatsApp (link em breve)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium">Luanda, Angola</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-base">
            <p className="font-medium">&copy; 2024 Fluxo Stock. Todos os direitos reservados.</p>
            <p className="mt-1 sm:mt-2 font-medium">Criado com dedicação para empresários angolanos que querem crescer</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
