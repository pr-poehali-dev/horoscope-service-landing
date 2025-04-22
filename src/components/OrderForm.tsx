
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, ArrowRight } from "lucide-react";

const OrderForm = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    } else {
      // Здесь будет логика отправки формы
      alert("Спасибо! Ваш заказ принят. Мы свяжемся с вами в ближайшее время.");
      setStep(1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  return (
    <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          <span className="astro-text-gradient">Рассчитать</span> натальную карту
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Заполните данные для точного расчета вашей персональной натальной карты
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Индикатор прогресса */}
        <div className="mb-10">
          <div className="flex justify-between items-center">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
                      ${i + 1 <= step 
                        ? 'bg-cosmic-purple text-white' 
                        : 'bg-gray-700 text-gray-300'}`}
                  >
                    {i + 1}
                  </div>
                  <div className="mt-2 text-sm text-gray-300">
                    {i === 0 ? 'Личные данные' : i === 1 ? 'Выбор услуги' : 'Контакты'}
                  </div>
                </div>
                
                {i < totalSteps - 1 && (
                  <div 
                    className={`h-1 flex-1 mx-2 
                      ${i + 1 < step ? 'bg-cosmic-purple' : 'bg-gray-700'}`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="cosmic-card p-8 rounded-2xl">
          <form onSubmit={handleSubmit}>
            {/* Шаг 1: Личные данные */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-6">Личные данные для расчета</h3>
                
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-white">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Введите ваше имя" 
                    className="bg-cosmic-gray/20 border-cosmic-purple/30 text-white" 
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="birthdate" className="text-white">Дата рождения</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-cosmic-gray/20 border-cosmic-purple/30 text-white"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP', { locale: ru }) : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-cosmic-black border-cosmic-purple/30">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="text-white"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="birthTime" className="text-white">Время рождения</Label>
                    <Input 
                      id="birthTime" 
                      type="time" 
                      className="bg-cosmic-gray/20 border-cosmic-purple/30 text-white" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="birthCity" className="text-white">Место рождения</Label>
                    <Input 
                      id="birthCity" 
                      placeholder="Город рождения" 
                      className="bg-cosmic-gray/20 border-cosmic-purple/30 text-white" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-white">Пол</Label>
                  <RadioGroup defaultValue="female">
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value="female" 
                          id="female" 
                          className="border-cosmic-purple/50 text-cosmic-purple"
                        />
                        <Label htmlFor="female" className="text-white">Женский</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value="male" 
                          id="male" 
                          className="border-cosmic-purple/50 text-cosmic-purple"
                        />
                        <Label htmlFor="male" className="text-white">Мужской</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
            
            {/* Шаг 2: Выбор услуги */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-6">Выберите тип натальной карты</h3>
                
                <RadioGroup defaultValue="premium">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border border-cosmic-purple/30 rounded-lg bg-cosmic-gray/20">
                      <RadioGroupItem 
                        value="basic" 
                        id="basic" 
                        className="border-cosmic-purple/50 text-cosmic-purple"
                      />
                      <div className="flex-1">
                        <Label htmlFor="basic" className="text-lg font-medium text-white">
                          Базовая натальная карта
                        </Label>
                        <p className="text-gray-300">Полный анализ основных аспектов</p>
                      </div>
                      <div className="text-lg font-semibold text-cosmic-purple">1 900 ₽</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border-2 border-cosmic-purple rounded-lg bg-cosmic-gray/20 relative">
                      <div className="absolute -top-3 left-4 bg-cosmic-purple text-white px-2 py-0.5 rounded-md text-xs">
                        Популярный выбор
                      </div>
                      <RadioGroupItem 
                        value="premium" 
                        id="premium" 
                        className="border-cosmic-purple/50 text-cosmic-purple"
                      />
                      <div className="flex-1">
                        <Label htmlFor="premium" className="text-lg font-medium text-white">
                          Премиум натальная карта
                        </Label>
                        <p className="text-gray-300">Детальный анализ с рекомендациями</p>
                      </div>
                      <div className="text-lg font-semibold text-cosmic-purple">3 900 ₽</div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border border-cosmic-purple/30 rounded-lg bg-cosmic-gray/20">
                      <RadioGroupItem 
                        value="yearly" 
                        id="yearly" 
                        className="border-cosmic-purple/50 text-cosmic-purple"
                      />
                      <div className="flex-1">
                        <Label htmlFor="yearly" className="text-lg font-medium text-white">
                          Годовой прогноз
                        </Label>
                        <p className="text-gray-300">Натальная карта + прогноз на год</p>
                      </div>
                      <div className="text-lg font-semibold text-cosmic-purple">5 900 ₽</div>
                    </div>
                  </div>
                </RadioGroup>
                
                <div className="space-y-3 mt-6">
                  <Label htmlFor="additional" className="text-white">Дополнительные опции</Label>
                  <Select>
                    <SelectTrigger className="w-full bg-cosmic-gray/20 border-cosmic-purple/30 text-white">
                      <SelectValue placeholder="Выберите дополнительные опции" />
                    </SelectTrigger>
                    <SelectContent className="bg-cosmic-black border-cosmic-purple/30">
                      <SelectItem value="consultation">Дополнительная консультация (+1500 ₽)</SelectItem>
                      <SelectItem value="report">Расширенный отчет (+800 ₽)</SelectItem>
                      <SelectItem value="compatibility">Анализ совместимости (+2000 ₽)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            
            {/* Шаг 3: Контактные данные */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-6">Контактные данные</h3>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-white">Электронная почта</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com" 
                    className="bg-cosmic-gray/20 border-cosmic-purple/30 text-white" 
                    required
                  />
                  <p className="text-sm text-gray-400">На этот адрес мы отправим вашу натальную карту</p>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-white">Номер телефона</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="bg-cosmic-gray/20 border-cosmic-purple/30 text-white"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="comments" className="text-white">Комментарии (необязательно)</Label>
                  <textarea 
                    id="comments" 
                    className="w-full rounded-md px-3 py-2 bg-cosmic-gray/20 border border-cosmic-purple/30 text-white"
                    rows={4}
                    placeholder="Ваши пожелания или вопросы к астрологу"
                  ></textarea>
                </div>
                
                {/* Итоговая сумма */}
                <div className="flex justify-between items-center p-4 border border-cosmic-purple/30 rounded-lg bg-cosmic-purple/10">
                  <div className="text-white font-medium">Итоговая стоимость:</div>
                  <div className="text-2xl font-bold text-cosmic-purple">3 900 ₽</div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={goBack}
                  className="border-cosmic-purple/50 text-white hover:bg-cosmic-purple/10"
                >
                  Назад
                </Button>
              ) : (
                <div></div>
              )}
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-cosmic-purple to-cosmic-deepPurple hover:opacity-90 text-white px-8 py-6 rounded-full shadow-lg shadow-cosmic-purple/20 hover:shadow-cosmic-purple/40 transition-all duration-300 transform hover:scale-105 group"
              >
                {step === totalSteps ? 'Отправить заказ' : 'Продолжить'}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </div>
        
        {/* Дополнительный продающий элемент */}
        <div className="mt-12 p-6 cosmic-card rounded-xl text-center">
          <div className="text-cosmic-purple text-lg font-medium mb-2">🔥 Специальное предложение</div>
          <h3 className="text-xl text-white font-bold mb-3">При заказе натальной карты сегодня</h3>
          <p className="text-gray-300 mb-4">
            Получите бесплатный мини-анализ совместимости с партнером в подарок (экономия 1000 ₽)
          </p>
          <div className="text-sm text-gray-400">Предложение действует до {format(new Date(new Date().setDate(new Date().getDate() + 3)), 'd MMMM', { locale: ru })}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
