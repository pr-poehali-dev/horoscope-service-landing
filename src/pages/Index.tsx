import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import FeatureSection from "@/components/FeatureSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      
      <main>
        <HeroSection />
        
        <section id="services">
          <ServiceSection />
        </section>
        
        <section id="features">
          <FeatureSection />
        </section>
        
        <OrderForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
