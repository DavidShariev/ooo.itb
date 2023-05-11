import Breadcrumb from "@/src/components/Common/Breadcrumb";
import Contact from "@/src/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Страница котактов"
        description="Оставьте на сообщение и мы обязательно вам ответим."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
