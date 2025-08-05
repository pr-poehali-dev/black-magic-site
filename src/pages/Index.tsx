import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const services = [
    {
      title: "Гадание на картах Таро",
      description: "Древние карты откроют тайны вашего будущего и подскажут верный путь",
      price: "От 3000 ₽",
      icon: "Star"
    },
    {
      title: "Ритуалы привлечения любви",
      description: "Мощные обряды для обретения истинной любви и укрепления отношений",
      price: "От 5000 ₽",
      icon: "Heart"
    },
    {
      title: "Защитная магия",
      description: "Сильные защитные ритуалы от порчи, сглаза и негативного воздействия",
      price: "От 4000 ₽",
      icon: "Shield"
    },
    {
      title: "Денежная магия",
      description: "Обряды для привлечения богатства, удачи в бизнесе и финансового благополучия",
      price: "От 7000 ₽",
      icon: "Coins"
    },
    {
      title: "Снятие проклятий",
      description: "Избавление от родовых проклятий, негативных программ и энергетических блоков",
      price: "От 10000 ₽",
      icon: "Flame"
    },
    {
      title: "Ритуалы здоровья",
      description: "Исцеляющие обряды для восстановления жизненных сил и энергетического баланса",
      price: "От 6000 ₽",
      icon: "Sparkles"
    }
  ];

  const testimonials = [
    {
      name: "Елена К.",
      text: "Невероятная точность предсказаний! Все сбылось в точности, как было сказано.",
      rating: 5
    },
    {
      name: "Дмитрий М.",
      text: "Ритуал для бизнеса принес результат уже через месяц. Доходы выросли в 3 раза!",
      rating: 5
    },
    {
      name: "Анна С.",
      text: "Защитный ритуал помог избавиться от постоянных неудач. Жизнь наладилась!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Как долго действуют ритуалы?",
      answer: "Длительность действия зависит от типа ритуала и индивидуальных особенностей. Обычно от 6 месяцев до нескольких лет."
    },
    {
      question: "Можно ли проводить ритуалы дистанционно?",
      answer: "Да, многие ритуалы эффективно работают на расстоянии. Для этого нужны ваши фото и личные данные."
    },
    {
      question: "Есть ли гарантии результата?",
      answer: "Магия работает по законам энергии. При правильном выполнении и соблюдении рекомендаций результат гарантирован на 95%."
    },
    {
      question: "Безопасны ли ваши ритуалы?",
      answer: "Все ритуалы проводятся с соблюдением защитных мер. Используется только белая и нейтральная магия."
    }
  ];

  const handleConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    setIsConsultationOpen(false);
    alert('Ваша заявка принята! Я свяжусь с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Moon" size={32} className="text-primary animate-mystical-float" />
              <h1 className="text-2xl font-heading font-bold text-primary">Тайная Магия</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button onClick={handleConsultation} className="animate-pulse-glow">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Мастер Черной Магии
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Раскрываю тайны судьбы и помогаю изменить жизнь с помощью древних знаний и могущественных ритуалов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={handleConsultation} className="text-lg px-8 py-4">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Получить предсказание
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Eye" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <Icon name="Star" size={16} className="mr-2" />
              Магические услуги
            </Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Древние ритуалы и обряды</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый ритуал проводится индивидуально с учетом вашей энергетики и жизненной ситуации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon name={service.icon as any} size={40} className="text-primary animate-mystical-float" />
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    className="w-full" 
                    onClick={() => setFormData({...formData, service: service.title})}
                  >
                    Заказать ритуал
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                <Icon name="Crown" size={16} className="mr-2" />
                Обо мне
              </Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">Мастер с 25-летним опытом</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Меня зовут Валерия, и я посвятила жизнь изучению древних магических практик. 
                  Мой путь начался в детстве, когда я обнаружила в себе дар видения.
                </p>
                <p>
                  За четверть века практики я помогла более чем 10,000 людям изменить их судьбы. 
                  Использую только проверенные временем методы и ритуалы.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge>Таро</Badge>
                  <Badge>Руны</Badge>
                  <Badge>Кристаллы</Badge>
                  <Badge>Травяная магия</Badge>
                  <Badge>Астрология</Badge>
                  <Badge>Нумерология</Badge>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <Icon name="Eye" size={120} className="text-primary animate-mystical-float" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full animate-mystical-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl font-heading font-bold mb-4">Истории изменений</h2>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы людей, чьи жизни кардинально изменились
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Частые вопросы
            </Badge>
            <h2 className="text-4xl font-heading font-bold">Ответы на вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Icon name="Phone" size={16} className="mr-2" />
            Контакты
          </Badge>
          <h2 className="text-4xl font-heading font-bold mb-8">Свяжитесь со мной</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <Icon name="MessageCircle" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-2">Telegram</h3>
              <p className="text-muted-foreground">@mystical_master</p>
            </Card>
            <Card className="p-6">
              <Icon name="Phone" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>
          </div>
          <Button 
            size="lg" 
            onClick={handleConsultation}
            className="w-full md:w-auto px-12 py-4 text-lg animate-pulse-glow"
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Moon" size={24} className="text-primary" />
            <span className="font-heading text-xl">Тайная Магия</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Все права защищены. Магические услуги предоставляются только совершеннолетним.
          </p>
        </div>
      </footer>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading flex items-center">
              <Icon name="Shield" size={20} className="mr-2 text-primary" />
              Защищенная консультация
            </DialogTitle>
            <DialogDescription>
              Заполните форму для записи на приватную консультацию. Все данные конфиденциальны.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email или Telegram"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Опишите вашу ситуацию..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={3}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}