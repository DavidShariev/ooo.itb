import AboutSectionOne from "@/components/Products/ProductSectionOne";
import AboutSectionTwo from "@/components/Products/ProductSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Licenses from "@/components/Licenses";

const LicensesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Лицензии и сертификаты" description="" />

      <Licenses />
      <Contact />
    </>
  );
};

export default LicensesPage;
