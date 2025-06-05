
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, TrendingUp, Users, AlertTriangle, BarChart3, Package, Smartphone, Clock, Target, Shield, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase to store email and name
    console.log("Reservation data:", { name, email });
    toast({
      title: "Lugar Reservado!",
      description: "Obrigado! Entraremos em contacto assim que o Fluxo Stock estiver disponível.",
    });
    setIsReservationOpen(false);
    setEmail("");
    setName("");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/61b8dedf-c222-465a-abff-53105d7b5c39.png" alt="Fluxo Stock" className="h-8 w-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#0038a5] to-[#3777fa] bg-clip-text text-transparent">
                Fluxo Stock
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-[#0038a5] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-gray-700 hover:text-[#0038a5] transition-colors">
                Benefícios
              </button>
              <button onClick={() => scrollToSection("faqs")} className="text-gray-700 hover:text-[#0038a5] transition-colors">
                FAQs
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-gray-700 hover:text-[#0038a5] transition-colors">
                Contactos
              </button>
            </div>

            <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] hover:from-[#002980] hover:to-[#2563eb] text-white">
                  Reserva o teu Lugar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Reserve o seu lugar no Fluxo Stock</DialogTitle>
                  <DialogDescription>
                    Seja um dos primeiros a experimentar a revolução na gestão de stock em Angola!
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleReservation} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-[#0038a5] to-[#3777fa]">
                    Reservar Lugar
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-[#0038a5] via-[#2563eb] to-[#3777fa] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                🚀 Lançamento previsto para este mês
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Gerencie o seu
                <span className="block text-yellow-300">Stock como nunca</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Pare de perder dinheiro com gestão manual de stock. O Fluxo Stock é a solução moderna 
                que os negócios angolanos precisam para crescer de forma sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-white text-[#0038a5] hover:bg-gray-100">
                      <Target className="mr-2 h-5 w-5" />
                      Reservar o Meu Lugar
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0038a5]">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  Sem mensalidades até ao lançamento
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-300" />
                  +100 empresas interessadas
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <img 
                  src="/lovable-uploads/b1e121dd-8231-4967-98ca-ea0ca7c04f95.png" 
                  alt="Dashboard Fluxo Stock" 
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full animate-pulse">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Os Problemas que Todo Empresário Angolano Enfrenta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos os principais desafios na gestão de stock e criamos soluções específicas para o mercado angolano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-red-700 mb-2">Problema: Perda de Stock</CardTitle>
                <CardDescription className="text-red-600">
                  "Não sei o que tenho em stock, quando repor ou onde estão os meus produtos."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle className="text-orange-700 mb-2">Problema: Tempo Perdido</CardTitle>
                <CardDescription className="text-orange-600">
                  "Passo horas a contar stock manualmente e ainda cometo erros."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <BarChart3 className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-yellow-700 mb-2">Problema: Sem Controlo</CardTitle>
                <CardDescription className="text-yellow-600">
                  "Não tenho relatórios nem dados para tomar decisões inteligentes."
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white px-8 py-4 rounded-full">
              <Zap className="h-8 w-8" />
              <span className="text-xl font-semibold">A Nossa Solução: Fluxo Stock</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <Package className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-green-700 mb-2">Controlo Total</CardTitle>
                <CardDescription className="text-green-600">
                  Saiba exatamente o que tem, onde está e quando repor cada produto.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-blue-700 mb-2">Automatização</CardTitle>
                <CardDescription className="text-blue-600">
                  Alertas automáticos, relatórios instantâneos e gestão em tempo real.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-purple-500 mb-4" />
                <CardTitle className="text-purple-700 mb-2">Crescimento</CardTitle>
                <CardDescription className="text-purple-600">
                  Dados e análises que ajudam a tomar decisões que fazem o negócio crescer.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja o Fluxo Stock em Ação
            </h2>
            <p className="text-xl text-gray-600">
              Interface moderna, relatórios poderosos e gestão simplificada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Inteligente</h3>
              <p className="text-gray-600 mb-6">
                Tenha uma visão completa do seu negócio numa só tela. Monitore vendas, stock, 
                alertas e performance em tempo real.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Métricas em tempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Alertas de stock baixo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Gráficos interativos</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/dda4c1f2-585e-41ca-8421-cc8b046126fc.png" 
                alt="Dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="/lovable-uploads/71fa0184-3d0d-410e-be52-558e0a680eaa.png" 
                alt="Análises" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análises Avançadas</h3>
              <p className="text-gray-600 mb-6">
                Tome decisões baseadas em dados reais. Veja quais produtos vendem mais, 
                margens de lucro e tendências de mercado.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Relatórios de vendas detalhados</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Análise de rentabilidade</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Previsões inteligentes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestão de Equipas</h3>
              <p className="text-gray-600 mb-6">
                Organize a sua equipa, defina permissões e acompanhe a produtividade. 
                Perfeito para negócios em crescimento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Controlo de acessos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Histórico de ações</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Colaboração em equipa</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/674421b6-f440-4441-b170-87eb33a576de.png" 
                alt="Gestão de Equipas" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gradient-to-br from-[#0038a5] to-[#3777fa] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Porquê Escolher o Fluxo Stock?
            </h2>
            <p className="text-xl text-blue-100">
              Mais de 100 empresas já demonstraram interesse. Junte-se aos inovadores!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Seguro</h3>
              <p className="text-blue-100">Dados protegidos e backup automático</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Acesso Móvel</h3>
              <p className="text-blue-100">Gerencie de qualquer lugar, qualquer hora</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte Local</h3>
              <p className="text-blue-100">Equipa de apoio em português de Angola</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rápido Setup</h3>
              <p className="text-blue-100">Comece a usar em menos de 10 minutos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem os Nossos Clientes Beta
            </h2>
            <p className="text-xl text-gray-600">
              Empresários que já testaram o Fluxo Stock partilham a sua experiência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Finalmente posso dormir descansado sabendo exatamente o que tenho em stock. 
                  O Fluxo Stock mudou completamente a gestão da minha loja."
                </p>
                <div>
                  <p className="font-semibold">Carlos Muhongo</p>
                  <p className="text-sm text-gray-500">Proprietário, Supermercado Mbanza</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Os relatórios são incríveis! Agora sei quais produtos dão mais lucro 
                  e posso focar no que realmente importa para o crescimento."
                </p>
                <div>
                  <p className="font-semibold">Maria Tchingoma</p>
                  <p className="text-sm text-gray-500">Gestora, Farmácia Vida Nova</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Poupei mais de 10 horas por semana que gastava a contar stock. 
                  Agora uso esse tempo para expandir o negócio!"
                </p>
                <div>
                  <p className="font-semibold">João Kassoma</p>
                  <p className="text-sm text-gray-500">CEO, Distribuidora Kimbanda</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos as dúvidas mais comuns sobre o Fluxo Stock
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quando será lançado o Fluxo Stock?
                </h3>
                <p className="text-gray-600">
                  O lançamento oficial está previsto para este mês. Quem reservar o lugar 
                  será notificado primeiro e terá acesso prioritário.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quanto vai custar mensalmente?
                </h3>
                <p className="text-gray-600">
                  Estamos a finalizar os planos de preços pensados especificamente para 
                  o mercado angolano. Será acessível e com excelente valor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Preciso de conhecimentos técnicos para usar?
                </h3>
                <p className="text-gray-600">
                  Não! O Fluxo Stock foi criado para ser extremamente fácil de usar. 
                  Se consegue usar WhatsApp, consegue usar o Fluxo Stock.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Funciona sem internet?
                </h3>
                <p className="text-gray-600">
                  O Fluxo Stock tem algumas funcionalidades offline, sincronizando 
                  automaticamente quando a conexão for restaurada.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Os meus dados estão seguros?
                </h3>
                <p className="text-gray-600">
                  Sim! Usamos encriptação de nível bancário e fazemos backup 
                  automático dos seus dados diariamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contacto Connosco
            </h2>
            <p className="text-xl text-gray-600">
              Tem dúvidas? A nossa equipa está pronta para ajudar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-green-200 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">WhatsApp</h3>
                <p className="text-green-600 mb-4">
                  Fale diretamente com a nossa equipa de vendas
                </p>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => {
                    // TODO: Replace with actual WhatsApp link
                    // window.open("https://wa.me/244XXXXXXXXX", "_blank");
                    console.log("WhatsApp link needs to be configured here");
                  }}
                >
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Email</h3>
                <p className="text-blue-600 mb-4">
                  Envie-nos uma mensagem detalhada
                </p>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => {
                    window.location.href = "mailto:info@fluxostock.com";
                  }}
                >
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
              Dúvidas Rápidas sobre Contacto
            </h3>
            
            <Card>
              <CardContent className="p-4">
                <p className="font-medium text-gray-900">Qual é o melhor horário para contactar?</p>
                <p className="text-gray-600 mt-1">
                  Estamos disponíveis de segunda a sexta, das 8h às 17h (horário de Luanda).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <p className="font-medium text-gray-900">Respondem rapidamente?</p>
                <p className="text-gray-600 mt-1">
                  No WhatsApp respondemos em minutos. Por email, dentro de 24 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/61b8dedf-c222-465a-abff-53105d7b5c39.png" alt="Fluxo Stock" className="h-8 w-8" />
                <span className="text-xl font-bold">Fluxo Stock</span>
              </div>
              <p className="text-blue-100">
                A revolução na gestão de stock para empresas angolanas.
                Simples, poderoso e criado para o nosso mercado.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Lançamento</h4>
              <div className="space-y-2 text-blue-100">
                <p>🚀 Este mês!</p>
                <p>📱 Versão web e móvel</p>
                <p>🎯 +100 empresas interessadas</p>
                <p>💪 Suporte em português</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-blue-100">
                <p>📧 info@fluxostock.com</p>
                <p>📱 WhatsApp (em breve)</p>
                <p>🏢 Luanda, Angola</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2024 Fluxo Stock. Todos os direitos reservados.</p>
            <p className="mt-2">Criado com ❤️ para empresários angolanos</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
