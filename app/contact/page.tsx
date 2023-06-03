import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

export default async function ContactPage() {
  return (
    <>
      <Breadcrumb
        pageName="Страница котактов"
        description="Оставьте нам сообщение и мы обязательно вам ответим."
      />

      <Contact />
    </>
  );
}
