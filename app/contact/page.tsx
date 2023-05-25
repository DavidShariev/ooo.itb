import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import axios from "axios";

export default async function ContactPage() {
  return (
    <>
      <Breadcrumb
        pageName="Страница котактов"
        description="Оставьте на сообщение и мы обязательно вам ответим."
      />

      <Contact />
    </>
  );
}
