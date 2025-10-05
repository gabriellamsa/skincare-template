import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/hero/Hero";
import Features from "@/components/sections/features/Features";
import Products from "@/components/sections/products/Products";
import About from "@/components/sections/about/About";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
