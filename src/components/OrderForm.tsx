import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  birthDate: z.string().min(1, { message: "Выберите дату рождения" }),
  birthTime: z.string().min(1, { message: "Введите время рождения" }),
  birthPlace: z.string().min(2, { message: "Введите место рождения" }),
  package: z.string().min(1, { message: "Выберите пакет услуг" }),
});

const OrderForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      birthDate: "",
      birthTime: "",
      birthPlace: "",
      package: "basic",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  if (isSubmitted) {
    return (
      <motion.div
        id="order"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 bg-white dark:bg-cosmic-black"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto bg-white dark:bg-cosmic-gray/10 border-none shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Заказ принят!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Спасибо за ваш заказ. Мы уже начали расчет вашей натальной карты. В ближайшее время наш специалист свяжется с вами для уточнения деталей.
              </p>
              <Button
                className="bg-cosmic-purple hover:bg-cosmic-deepPurple text-white"
                onClick={() => setIsSubmitted(false)}
              >
                Оформить новый заказ
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    );
  }

  return (
    <div id="order" className="py-24 bg-white dark:bg-cosmic-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 astro-text-gradient inline-block"
          >
            Заказать натальную карту
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Заполните форму ниже для расчета вашей персональной натальной карты. Чем точнее информация, тем достовернее будет результат.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto bg-white dark:bg-cosmic-gray/10 border-none shadow-xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Ваше имя" {...field} className="bg-gray-50 dark:bg-cosmic-black/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="example@mail.com" {...field} className="bg-gray-50 dark:bg-cosmic-black/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Телефон</FormLabel>
                          <FormControl>
                            <Input placeholder="+7 (___) ___-__-__" {...field} className="bg-gray-50 dark:bg-cosmic-black/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="birthDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Дата рождения</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-gray-50 dark:bg-cosmic-black/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="birthTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Время рождения</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} className="bg-gray-50 dark:bg-cosmic-black/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="birthPlace"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Место рождения</FormLabel>
                          <FormControl>
                            <Input placeholder="Город, страна" {...field} className="bg-gray-50 dark:bg-cosmic-black/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-gray-700 dark:text-gray-300">Выберите пакет услуг</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            <FormItem className="flex flex-col space-y-1 p-4 rounded-lg border border-gray-200 dark:border-cosmic-gray/20 hover:border-cosmic-purple/50 dark:hover:border-cosmic-purple/50 cursor-pointer transition-all duration-200">
                              <FormControl>
                                <RadioGroupItem value="basic" className="sr-only" />
                              </FormControl>
                              <div className="font-semibold text-gray-800 dark:text-white">Базовая</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">2 900 ₽</div>
                            </FormItem>
                            
                            <FormItem className="flex flex-col space-y-1 p-4 rounded-lg border-2 border-cosmic-purple bg-cosmic-purple/5 dark:bg-cosmic-purple/10 hover:bg-cosmic-purple/10 dark:hover:bg-cosmic-purple/20 cursor-pointer transition-all duration-200">
                              <FormControl>
                                <RadioGroupItem value="extended" className="sr-only" />
                              </FormControl>
                              <div className="font-semibold text-gray-800 dark:text-white">Расширенная</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">4 900 ₽</div>
                            </FormItem>
                            
                            <FormItem className="flex flex-col space-y-1 p-4 rounded-lg border border-gray-200 dark:border-cosmic-gray/20 hover:border-cosmic-purple/50 dark:hover:border-cosmic-purple/50 cursor-pointer transition-all duration-200">
                              <FormControl>
                                <RadioGroupItem value="yearly" className="sr-only" />
                              </FormControl>
                              <div className="font-semibold text-gray-800 dark:text-white">Годовой прогноз</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">5 900 ₽</div>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-cosmic-purple hover:bg-cosmic-deepPurple text-white py-6 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cosmic-pulse"
                    >
                      Заказать расчет натальной карты
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderForm;
