import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star, TrendingUp, Users, AlertTriangle, BarChart3, Package, Clock, Target, Shield, Zap, ArrowRight, Database, Calculator, FileText, Settings, Eye, Bell } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const {
    toast
  } = useToast();
  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase to store email and name
    console.log("Reservation data:", {
      name,
      email
    });
    toast({
      title: "Lugar Reservado!",
      description: "Obrigado! Entraremos em contacto assim que o Fluxo Stock estiver disponível."
    });
    setIsReservationOpen(false);
    setEmail("");
    setName("");
  };
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/61b8dedf-c222-465a-abff-53105d7b5c39.png" alt="Fluxo Stock" className="h-8 w-8" />
              <span className="text-xl font-semibold text-black">
                Fluxo Stock
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                Benefícios
              </button>
              <button onClick={() => scrollToSection("faqs")} className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                FAQs
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                Contactos
              </button>
            </div>

            <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] hover:from-[#002980] hover:to-[#2563eb] text-white font-medium">
                  Reserva o teu Lugar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Reserve o seu lugar no Fluxo Stock</DialogTitle>
                  <DialogDescription>
                    Seja um dos primeiros a experimentar a revolução na gestão de stock em Angola quando lançarmos este mês!
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleReservation} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" required />
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
      <section id="home" className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="bg-black/5 text-black border-black/10 mb-6 text-sm font-medium px-4 py-2">
              Lançamento previsto para este mês
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight tracking-tight">
              O futuro da gestão de stock
              <span className="block bg-gradient-to-r from-[#0038a5] to-[#3777fa] bg-clip-text text-transparent text-base">
                chegou a Angola
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              Pare de perder dinheiro com gestão manual. O Fluxo Stock é a plataforma que vai transformar 
              a forma como os negócios angolanos gerem o seu inventário, aumentam a rentabilidade e tomam 
              decisões inteligentes baseadas em dados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isReservationOpen} onOpenChange={setIsReservationOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] hover:from-[#002980] hover:to-[#2563eb] text-white font-medium px-8 py-4 text-lg">
                    Reservar o Meu Lugar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-black" />
                Sem mensalidades até ao lançamento
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-black" />
                Mais de 100 empresas interessadas
              </div>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <img src="/lovable-uploads/b1e121dd-8231-4967-98ca-ea0ca7c04f95.png" alt="Dashboard Fluxo Stock" className="rounded-xl shadow-2xl w-full" />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white p-4 rounded-xl shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Os desafios que todo empresário angolano enfrenta
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Identificamos os principais obstáculos na gestão de inventário que estão a limitar o crescimento 
              dos negócios em Angola. Cada problema tem uma solução específica e comprovada no Fluxo Stock.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-black mb-4 text-xl">Controlo de Stock Inexistente</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  "Não sei quantos produtos tenho, onde estão localizados, quando é que o stock vai acabar ou 
                  quando devo fazer novas encomendas. Isto resulta em vendas perdidas e capital parado em 
                  produtos que não saem."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-black mb-4 text-xl">Desperdício de Tempo Valioso</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  "Passo horas e horas a contar stock manualmente, a procurar produtos, a fazer cálculos 
                  em papel ou Excel. Este tempo podia ser usado para expandir o negócio e atender melhor 
                  os clientes."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-black mb-4 text-xl">Decisões Sem Dados</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  "Não tenho relatórios claros sobre rentabilidade, produtos mais vendidos, ou tendências 
                  de vendas. Tomo decisões baseadas em intuição, quando podia ter dados precisos para crescer 
                  de forma estratégica."
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0038a5] to-[#3777fa] text-white px-8 py-6 rounded-2xl">
              <Zap className="h-8 w-8" />
              <span className="text-2xl font-semibold">A Nossa Solução Completa</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-black mb-4 text-xl">Controlo Total do Inventário</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Saiba exatamente quantos produtos tem, a sua localização, níveis mínimos de stock, 
                  histórico de movimentações e previsões automáticas de reposição. Nunca mais perca vendas 
                  por falta de produtos ou tenha capital parado desnecessariamente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-black mb-4 text-xl">Automatização Inteligente</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Alertas automáticos de stock baixo, relatórios gerados instantaneamente, sincronização 
                  em tempo real e gestão simplificada. Poupe dezenas de horas por semana e foque no que 
                  realmente importa: fazer crescer o seu negócio.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-black mb-4 text-xl">Análises e Crescimento</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Dados detalhados sobre rentabilidade por produto, tendências de vendas, análises de 
                  performance e relatórios personalizados. Tome decisões informadas que aceleram o 
                  crescimento e maximizam os lucros do seu negócio.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Veja o Fluxo Stock em funcionamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uma interface moderna e intuitiva que transforma a complexidade da gestão de stock 
              numa experiência simples e eficiente. Cada funcionalidade foi pensada para o mercado angolano.
            </p>
          </div>

          <div className="space-y-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">Dashboard Inteligente</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Tenha uma visão completa e em tempo real do seu negócio numa única tela. O dashboard 
                  do Fluxo Stock apresenta métricas essenciais, alertas importantes e indicadores de 
                  performance que permitem uma gestão eficaz e decisões rápidas.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Métricas de vendas e rentabilidade atualizadas em tempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Alertas automáticos para stock baixo e produtos em falta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Gráficos interativos para análise de tendências e padrões</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Resumo personalizado baseado no seu tipo de negócio</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                  <img src="/lovable-uploads/dda4c1f2-585e-41ca-8421-cc8b046126fc.png" alt="Dashboard Fluxo Stock" className="rounded-xl shadow-2xl w-full" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                  <img src="/lovable-uploads/71fa0184-3d0d-410e-be52-558e0a680eaa.png" alt="Análises Fluxo Stock" className="rounded-xl shadow-2xl w-full" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">Análises Avançadas</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Transforme dados em insights acionáveis. As análises avançadas do Fluxo Stock revelam 
                  padrões ocultos, identificam oportunidades de crescimento e mostram exatamente onde 
                  investir para maximizar a rentabilidade do seu negócio.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Relatórios detalhados de vendas por produto, categoria e período</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Análise de rentabilidade com margem de lucro por item</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Previsões inteligentes de vendas e necessidades de stock</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Identificação de produtos com melhor performance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">Gestão de Equipas</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Organize a sua equipa com controlo total sobre permissões e responsabilidades. 
                  Acompanhe a produtividade, defina níveis de acesso e mantenha um histórico completo 
                  de todas as ações realizadas no sistema.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Controlo granular de acessos e permissões por utilizador</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Histórico completo de ações e alterações no sistema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Colaboração em tempo real entre membros da equipa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Relatórios de produtividade e performance individual</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                  <img src="/lovable-uploads/674421b6-f440-4441-b170-87eb33a576de.png" alt="Gestão de Equipas Fluxo Stock" className="rounded-xl shadow-2xl w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Porquê escolher o Fluxo Stock?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Mais de 100 empresas angolanas já demonstraram interesse. Junte-se aos inovadores que estão 
              a preparar-se para transformar a gestão dos seus negócios com tecnologia de ponta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Seguro</h3>
              <p className="text-gray-300 leading-relaxed">
                Dados protegidos com encriptação de nível bancário, backup automático diário e servidores 
                seguros para garantir que as suas informações estão sempre protegidas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interface Intuitiva</h3>
              <p className="text-gray-300 leading-relaxed">
                Design limpo e moderno, criado especificamente para ser fácil de usar. Se consegue 
                usar WhatsApp, consegue dominar o Fluxo Stock em minutos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Suporte Local</h3>
              <p className="text-gray-300 leading-relaxed">
                Equipa de apoio dedicada em português de Angola, que entende as particularidades 
                do nosso mercado e está sempre disponível para ajudar.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementação Rápida</h3>
              <p className="text-gray-300 leading-relaxed">
                Comece a usar em menos de 10 minutos. Importação automática de dados existentes 
                e configuração guiada para estar operacional imediatamente.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0038a5] to-[#3777fa] rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Trusted by 100+ Businesses</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empresários angolanos já confiam no Fluxo Stock para transformar a gestão dos seus negócios. 
              Desde pequenas lojas a grandes distribuidoras, estamos a revolucionar a forma como se gere stock em Angola.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Empresas Interessadas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-blue-100">Redução no Tempo de Gestão</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">35%</div>
                <div className="text-blue-100">Aumento de Rentabilidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              O que dizem os nossos clientes beta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empresários angolanos que já testaram o Fluxo Stock partilham como a plataforma 
              transformou a gestão dos seus negócios e aumentou a sua rentabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "Finalmente posso dormir descansado sabendo exatamente o que tenho em stock. 
                  O Fluxo Stock mudou completamente a gestão da minha loja. Antes perdia vendas por não saber 
                  se tinha produtos, agora tenho alertas automáticos e nunca mais fico sem stock dos 
                  produtos mais vendidos."
                </p>
                <div>
                  <p className="font-semibold text-black">Carlos Muhongo</p>
                  <p className="text-sm text-gray-500">Proprietário, Supermercado Mbanza Kongo</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "Os relatórios são incríveis! Agora sei exatamente quais produtos dão mais lucro, 
                  em que épocas vendem melhor e posso focar no que realmente importa para o crescimento. 
                  Aumentei a minha margem de lucro em 40% apenas optimizando o mix de produtos."
                </p>
                <div>
                  <p className="font-semibold text-black">Maria Tchingoma</p>
                  <p className="text-sm text-gray-500">Gestora, Farmácia Vida Nova</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "Poupei mais de 15 horas por semana que gastava a contar stock e fazer relatórios 
                  manuais. Agora uso esse tempo para expandir o negócio, visitar fornecedores e 
                  melhorar o atendimento. O retorno do investimento foi imediato."
                </p>
                <div>
                  <p className="font-semibold text-black">João Kassoma</p>
                  <p className="text-sm text-gray-500">CEO, Distribuidora Kimbanda</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Esclarecemos as dúvidas mais comuns sobre o Fluxo Stock e como pode transformar 
              a gestão do seu negócio em Angola.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Quando será lançado oficialmente o Fluxo Stock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  O lançamento oficial do Fluxo Stock está previsto para este mês de dezembro de 2024. 
                  Estamos a finalizar os últimos testes e ajustes baseados no feedback dos nossos clientes beta. 
                  Quem reservar o lugar será notificado primeiro e terá acesso prioritário, além de condições 
                  especiais de lançamento incluindo período gratuito estendido.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Quanto vai custar a subscrição mensal do Fluxo Stock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Estamos a finalizar uma estrutura de preços pensada especificamente para o mercado angolano, 
                  com diferentes planos para diferentes tipos e tamanhos de negócio. O nosso objetivo é que seja 
                  acessível e proporcione um excelente retorno do investimento. Os preços serão anunciados 
                  no lançamento, mas garantimos que será uma fração do que poupa em tempo e aumenta em rentabilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Preciso de conhecimentos técnicos avançados para usar o Fluxo Stock?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutamente não! O Fluxo Stock foi criado para ser extremamente intuitivo e fácil de usar. 
                  Se consegue usar WhatsApp ou Facebook, consegue usar o Fluxo Stock. Fornecemos tutoriais 
                  completos, suporte personalizado e a nossa equipa ajuda na configuração inicial. 
                  A maioria dos utilizadores consegue estar operacional em menos de 30 minutos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  O Fluxo Stock funciona sem ligação à internet?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  O Fluxo Stock tem funcionalidades offline limitadas que permitem consultar informações básicas 
                  e registar algumas operações quando não há internet. Assim que a ligação for restaurada, 
                  todos os dados são sincronizados automaticamente. Para acesso completo a todas as funcionalidades 
                  e relatórios em tempo real, é necessária ligação à internet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Como posso ter a certeza de que os meus dados estão seguros?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A segurança dos dados é a nossa prioridade máxima. Utilizamos encriptação de nível bancário 
                  (SSL 256-bit), servidores seguros com certificações internacionais, backup automático diário 
                  e múltiplas camadas de proteção. Os seus dados ficam armazenados em data centers certificados 
                  e nunca são partilhados com terceiros. Além disso, você pode exportar os seus dados a qualquer momento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Posso importar os dados que já tenho de stock de outros sistemas?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sim! O Fluxo Stock permite importar dados de Excel, outros sistemas de gestão e até mesmo 
                  listas manuais. A nossa equipa técnica ajuda no processo de migração para garantir que 
                  nenhuma informação se perde. Também oferecemos assistência para limpar e organizar os dados 
                  durante a importação, optimizando desde o início a estrutura do seu inventário.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  O sistema é adequado para diferentes tipos de negócio?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  O Fluxo Stock foi desenvolvido para ser flexível e adaptar-se a diferentes tipos de negócio: 
                  supermercados, farmácias, lojas de roupa, distribuidoras, armazéns, oficinas e muito mais. 
                  Pode configurar categorias personalizadas, unidades de medida específicas, múltiplas localizações 
                  e até mesmo diferentes moedas. O sistema cresce com o seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Que tipo de suporte técnico é fornecido?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oferecemos suporte completo em português de Angola através de múltiplos canais: WhatsApp para 
                  questões urgentes, email para questões detalhadas, tutoriais em vídeo, documentação completa 
                  e sessões de formação personalizadas. A nossa equipa de suporte conhece profundamente o mercado 
                  angolano e está disponível durante horário comercial com resposta rápida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Entre em contacto connosco
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tem dúvidas específicas sobre como o Fluxo Stock pode transformar o seu negócio? 
              A nossa equipa está pronta para esclarecer todas as suas questões e ajudar no que precisar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-gray-200 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-10 text-center">
                <div className="bg-green-500 text-white p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Database className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-green-700 mb-4">WhatsApp</h3>
                <p className="text-green-600 mb-6 leading-relaxed">
                  Fale diretamente com a nossa equipa de vendas e suporte técnico. 
                  Resposta rápida durante horário comercial.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3" onClick={() => {
                // TODO: Replace with actual WhatsApp link
                // window.open("https://wa.me/244XXXXXXXXX", "_blank");
                console.log("WhatsApp link needs to be configured here");
              }}>
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-10 text-center">
                <div className="bg-blue-500 text-white p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <FileText className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">Email</h3>
                <p className="text-blue-600 mb-6 leading-relaxed">
                  Envie-nos uma mensagem detalhada com as suas questões. 
                  Resposta garantida em 24 horas.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3" onClick={() => {
                window.location.href = "mailto:info@fluxostock.com";
              }}>
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black text-center mb-8">
              Informações de contacto
            </h3>
            
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black mb-2">Qual é o melhor horário para contactar?</p>
                    <p className="text-gray-700 leading-relaxed">
                      A nossa equipa está disponível de segunda a sexta-feira, das 8h às 17h (horário de Luanda). 
                      No WhatsApp, tentamos responder mesmo fora deste horário para questões urgentes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Bell className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black mb-2">Qual é o tempo de resposta?</p>
                    <p className="text-gray-700 leading-relaxed">
                      No WhatsApp respondemos normalmente em minutos durante o horário comercial. 
                      Por email, garantimos resposta em menos de 24 horas, mas normalmente é muito mais rápido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black mb-2">Oferecem demonstrações personalizadas?</p>
                    <p className="text-gray-700 leading-relaxed">
                      Sim! Após o lançamento, oferecemos demonstrações personalizadas por videochamada 
                      onde mostramos como o Fluxo Stock pode ser configurado especificamente para o seu tipo de negócio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/lovable-uploads/61b8dedf-c222-465a-abff-53105d7b5c39.png" alt="Fluxo Stock" className="h-8 w-8" />
                <span className="text-xl font-semibold">Fluxo Stock</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A revolução na gestão de stock para empresas angolanas. 
                Uma plataforma moderna, segura e criada especificamente para as necessidades 
                do nosso mercado.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Lançamento</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  <span>Lançamento previsto para este mês</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5" />
                  <span>Plataforma web completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Mais de 100 empresas interessadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5" />
                  <span>Suporte técnico em português</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  <span>info@fluxostock.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5" />
                  <span>WhatsApp (link em breve)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5" />
                  <span>Luanda, Angola</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fluxo Stock. Todos os direitos reservados.</p>
            <p className="mt-2">Criado com dedicação para empresários angolanos que querem crescer</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;