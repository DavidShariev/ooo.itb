import ProductSectionOne from "@/src/components/Products/ProductSectionOne";
import ProductSectionTwo from "@/src/components/Products/ProductSectionTwo";

// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/src/components/Common/ScrollUp";
import Contact from "@/src/components/Contact";
import Services from "@/src/components/Services";
import Hero from "@/src/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <ProductSectionOne />
      <ProductSectionTwo />
      <Contact />
    </>
  );
}
