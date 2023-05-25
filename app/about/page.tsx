import AboutSectionOne from "@/components/Products/ProductSectionOne";
import AboutSectionTwo from "@/components/Products/ProductSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import About from "@/components/About/";
import Contact from "@/components/Contact";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="О нас"
        description="Страница с информацией о нашей компании."
      />

      <About />
      <Contact />
    </>
  );
};

export default AboutPage;
