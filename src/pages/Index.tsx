import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Я свяжусь с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-primary">Психосоматика</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О специалисте
            </button>
            <button onClick={() => scrollToSection('methods')} className="text-foreground hover:text-primary transition-colors">
              Методики
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Гармония тела и разума
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Массажные практики для освобождения от психосоматических блоков и восстановления внутреннего баланса
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg"
              >
                Записаться на сеанс
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/c20e52ac-3434-4436-bba3-440f01beee2d/files/21d0460b-991b-415d-a20f-feb6a9c13fa8.jpg" 
                alt="Массаж" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl animate-scale-in">
                <p className="text-sm font-medium">Сертифицированный специалист</p>
                <p className="text-2xl font-bold">10+ лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            О специалисте
          </h2>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="https://cdn.poehali.dev/projects/c20e52ac-3434-4436-bba3-440f01beee2d/files/b39b27d4-33a1-4eb8-8422-cc6e91c009d3.jpg" 
                  alt="Специалист" 
                  className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Елена Сергеевна
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Практикующий специалист по работе с психосоматическими состояниями через телесные практики. 
                    Мой подход основан на глубоком понимании связи между эмоциями, мыслями и физическим телом.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    За годы практики я помогла сотням людей освободиться от хронических напряжений, болей и блоков, 
                    которые мешали им жить полной жизнью. Каждая сессия — это индивидуальный путь к вашему внутреннему балансу.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Award" size={20} className="text-accent" />
                      <span className="text-sm">Сертификация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Heart" size={20} className="text-accent" />
                      <span className="text-sm">500+ клиентов</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="methods" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12 animate-fade-in">
            Методики
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Sparkles',
                title: 'Висцеральная терапия',
                description: 'Работа с внутренними органами для снятия эмоциональных блоков и восстановления естественной работы организма'
              },
              {
                icon: 'Waves',
                title: 'Миофасциальный релиз',
                description: 'Глубокая работа с фасциями и мышцами для освобождения накопленных напряжений и травматического опыта'
              },
              {
                icon: 'Leaf',
                title: 'Энергетический массаж',
                description: 'Восстановление энергетических потоков в теле через специальные техники и точечное воздействие'
              }
            ].map((method, index) => (
              <Card 
                key={index} 
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={method.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Что даёт терапия
              </h3>
              <div className="space-y-4">
                {[
                  'Снятие хронических болей и напряжений',
                  'Улучшение эмоционального состояния',
                  'Восстановление энергии и жизненных сил',
                  'Проработка психосоматических блоков',
                  'Гармонизация внутреннего состояния'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/placeholder.svg" 
                alt="Результаты" 
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6">
            Записаться на сеанс
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и я свяжусь с вами для подбора удобного времени
          </p>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем запросе"
                    className="min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (999) 123-45-67</p>
                <p>therapy@example.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб-Вс: 11:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
                <Icon name="MessageCircle" size={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>
          </div>
          <div className="text-center text-primary-foreground/60 pt-8 border-t border-primary-foreground/20">
            <p>© 2024 Психосоматическая терапия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}