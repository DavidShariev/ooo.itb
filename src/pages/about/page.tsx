import AboutSectionOne from "@/src/components/Products/ProductSectionOne";
import AboutSectionTwo from "@/src/components/Products/ProductSectionTwo";
import Breadcrumb from "@/src/components/Common/Breadcrumb";
import About from "@/src/components/About/";
import Contact from "@/src/components/Contact";

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
