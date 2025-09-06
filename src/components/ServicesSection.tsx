import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "CRM-системы",
      description: "Настройка и оптимизация CRM под ваши бизнес-процессы. Интеграция с существующими системами и обучение команды.",
      icon: "🎯",
      features: ["Настройка воронок продаж", "Автоматизация процессов", "Интеграция с сайтом"]
    },
    {
      title: "WhatsApp Business",
      description: "Автоматизация общения в WhatsApp. Чат-боты, рассылки, интеграция с CRM для максимальной эффективности.",
      icon: "💬",
      features: ["Чат-боты", "Массовые рассылки", "Интеграция с CRM"]
    },
    {
      title: "Omni-channel",
      description: "Объединяем все каналы коммуникации в единую систему. Telegram, Instagram, Email, звонки - всё в одном месте.",
      icon: "🌐",
      features: ["Единая платформа", "Аналитика каналов", "Централизованное управление"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Комплексные решения для автоматизации и оптимизации всех процессов работы с клиентами
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;