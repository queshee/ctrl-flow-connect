const BenefitsSection = () => {
  const benefits = [
    {
      title: "Увеличение конверсии на 200%",
      description: "Автоматизированные воронки и персонализированные сценарии общения значительно повышают процент закрытых сделок.",
      stat: "200%",
      icon: "📈"
    },
    {
      title: "Экономия времени команды",
      description: "Рутинные задачи выполняются автоматически, освобождая ваших сотрудников для важных задач.",
      stat: "8 часов",
      icon: "⏰"
    },
    {
      title: "Полная прозрачность процессов",
      description: "Детальная аналитика и отчётность по всем каналам коммуникации в реальном времени.",
      stat: "24/7",
      icon: "📊"
    },
    {
      title: "Быстрое внедрение",
      description: "Настройка и запуск автоматизированных процессов за 2-4 недели с полным сопровождением.",
      stat: "2-4 недели",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают <span className="text-primary">CTRL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы не просто настраиваем системы — мы создаём работающие решения, которые приносят результат
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <div className="text-2xl font-bold text-primary">
                      {benefit.stat}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">проектов</div>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;