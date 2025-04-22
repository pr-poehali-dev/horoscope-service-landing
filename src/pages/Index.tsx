
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import FeatureSection from "@/components/FeatureSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Эффект создания звезд на фоне
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.getElementById('stars-container');
      if (!starsContainer) return;
      
      // Очистить предыдущие звезды при повторном рендере
      starsContainer.innerHTML = '';
      
      const starCount = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Случайное положение
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.8; // Только в верхней части страницы
        
        // Случайный размер
        const size = Math.random() * 3;
        
        // Случайная задержка анимации
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-cosmic-black to-cosmic-deepPurple/30 dark:from-cosmic-black dark:to-cosmic-deepPurple/50 overflow-hidden">
      <div id="stars-container" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"></div>
      
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        
        <section id="services">
          <ServiceSection />
        </section>
        
        <section id="features" className="relative">
          {/* Декоративный элемент */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cosmic-purple/30 filter blur-3xl"></div>
          <FeatureSection />
        </section>
        
        <section id="order" className="relative">
          {/* Декоративный элемент */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cosmic-blue/30 filter blur-3xl"></div>
          <OrderForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
