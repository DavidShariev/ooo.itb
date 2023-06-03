import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Image from "next/dist/client/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <>
      <Breadcrumb pageName="Операционная система: EMIAS" description="" />

      <section className="product_siem">
        <div className="container">
          <div className="-mx-4 my-20 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image src="/products/EMIAC.png" alt="EMIAC.png" fill />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <SectionTitle
                    title="ОПЕРАЦИОННАЯ СИСТЕМА EMIAS OS 1.0"
                    paragraph="Операционная система EMIAS OS 1.0 автоматизированной информационной системы города Москвы «Единая медицинская информационно-аналитическая система города Москвы»."
                    mb="44px"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto my-20 max-w-[1200px]">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Сертификаты
              </h2>
              <div className="flex flex-wrap justify-between gap-10 lg:flex-nowrap">
                <div className="flex w-full  gap-10">
                  <Image
                    width={50}
                    height={50}
                    alt=""
                    src="/licenses/logo_emiac.svg"
                  ></Image>
                  <p className="my-5 text-base text-body-color">
                    Операционная система EMIAS OS 1.0 сертифицирована
                    Федеральной службой по техническому и экспортному контролю
                    России. Сертификат ФСТЭК России № 3807 от 3 сентября 2019
                    года (Соответствует требованиям документов: Требования
                    доверия(5), Требования к ОС, Профиль защиты ОС
                    (ИТ.ОС.А5.ПЗ)).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Contact />
        </div>
      </section>
    </>
  );
};

export default page;
