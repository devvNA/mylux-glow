import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShopByConcern from "@/components/ShopByConcern";
import BrandStory from "@/components/BrandStory";
import Bestsellers from "@/components/Bestsellers";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ShopByConcern />
        <BrandStory />
        <Bestsellers />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
