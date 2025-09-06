import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и телефон",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы взять <span className="text-primary">контроль</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку и получите бесплатную консультацию по автоматизации вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Получить консультацию</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Ваш телефон *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">hello@ctrl.consulting</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary">💬</span>
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-muted-foreground">@ctrl_consulting</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="text-lg font-semibold mb-2">Быстрый старт</div>
              <div className="text-muted-foreground text-sm leading-relaxed">
                Консультация → Анализ процессов → Техническое задание → Внедрение → Обучение команды → Поддержка
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;