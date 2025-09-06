import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 tracking-tight">
            CTRL
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-glow" />
        </div>

        {/* Main tagline */}
        <h2 className="text-2xl md:text-4xl font-light text-foreground mb-6 leading-tight">
          Берём управление вашими <br />
          <span className="font-semibold text-primary">коммуникациями</span> в свои руки
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Настраиваем CRM, автоматизируем WhatsApp и оптимизируем все каналы связи с клиентами. 
          Ваш бизнес получает полный контроль над продажами.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-4 h-auto"
          >
            Получить консультацию
          </Button>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4 h-auto"
          >
            Узнать больше
          </Button>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Настроенных CRM</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Автоматизация</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-primary mb-2">200%</div>
            <div className="text-muted-foreground">Рост конверсии</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;