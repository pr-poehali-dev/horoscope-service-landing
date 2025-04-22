import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OrderForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    serviceType: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка формы:", formState);
    // Можно добавить toast с уведомлением
  };

  return (
    <section id="order" className="w-full py-16 md:py-24 bg-apple-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Закажите свой гороскоп</h2>
          <p className="text-lg text-apple-darkgray">
            Заполните форму, и мы свяжемся с вами для уточнения деталей
          </p>
        </div>

        <Card className="max-w-xl mx-auto border-none shadow-md bg-white">
          <CardHeader>
            <CardTitle>Персональный заказ</CardTitle>
            <CardDescription>
              Предоставьте точные данные для максимально точного расчета
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Введите ваше имя" 
                  value={formState.name} 
                  onChange={handleChange} 
                  required 
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="example@mail.com" 
                  value={formState.email} 
                  onChange={handleChange} 
                  required 
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="birthDate">Дата рождения</Label>
                <Input 
                  id="birthDate" 
                  name="birthDate" 
                  type="date" 
                  value={formState.birthDate} 
                  onChange={handleChange} 
                  required 
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="birthTime">Время рождения (если известно)</Label>
                <Input 
                  id="birthTime" 
                  name="birthTime" 
                  type="time" 
                  value={formState.birthTime} 
                  onChange={handleChange} 
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="birthPlace">Место рождения</Label>
                <Input 
                  id="birthPlace" 
                  name="birthPlace" 
                  placeholder="Город, страна" 
                  value={formState.birthPlace} 
                  onChange={handleChange} 
                  required 
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="serviceType">Выберите услугу</Label>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Выберите тип гороскопа" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="natal">Натальная карта</SelectItem>
                    <SelectItem value="personal">Личный гороскоп</SelectItem>
                    <SelectItem value="compatibility">Совместимость</SelectItem>
                    <SelectItem value="yearly">Прогноз на год</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full rounded-lg h-12 bg-black hover:bg-black/90">
                Заказать гороскоп
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
