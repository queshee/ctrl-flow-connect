const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              CTRL
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Консалтинговая компания по автоматизации бизнес-процессов. 
              Берём контроль над вашими коммуникациями.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Настройка CRM-систем</li>
              <li>Автоматизация WhatsApp</li>
              <li>Omni-channel решения</li>
              <li>Интеграция систем</li>
              <li>Обучение команды</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>hello@ctrl.consulting</div>
              <div>+7 (999) 123-45-67</div>
              <div>@ctrl_consulting</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} CTRL. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;