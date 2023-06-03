import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductSectionOne from "@/components/Products/ProductSectionOne";
import ProductSectionTwo from "@/components/Products/ProductSectionTwo";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProductSectionOne />
      <ProductSectionTwo />
      <Contact />
      <Footer />
    </main>
  );
}
