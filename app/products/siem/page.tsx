"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import React from "react";
import Video from "@/components/Video";
import Contact from "@/components/Contact";
import Accordion from "@/components/Accordion";
import siemModulesData from "@/components/Siem/modulesData";
import Stages from "@/components/Siem/Stages";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const page = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section className="product_siem">
      <div className="container">
        <Breadcrumb pageName="Средвства защиты: SIEM" description="" />

        <div className="-mx-4 my-20 flex flex-wrap items-center justify-between px-5 lg:flex-nowrap">
          <div className="w-full px-4">
            <SectionTitle
              title="SECURITY CAPSULE SIEM"
              paragraph="Система мониторинга и корреляции событий информационной безопасности Security Capsule SIEM разрабатывается с 2009 года является отечественным программным обеспечением и по праву может считаться Первой Российской SIEM-системой."
              mb="44px"
            />

            <h3 className="mb-4 mt-10 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Может применяться:
            </h3>
            <div
              className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="На объектах КИИ" />
                  <List text="В составе ГосСОПКА" />
                  <List text="В АСУ ТП" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="В ГИС" />
                  <List text="В ИСПДн" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:max-w-xl">
            <div
              className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px]"
              data-wow-delay=".2s"
            >
              <Image
                src="/images/SIEM.png"
                alt="about-image"
                fill
                className="scale-x-180 mx-auto max-w-full lg:mr-0"
              />
            </div>
          </div>
        </div>

        <div className="  pb-16 ">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="my-20 hidden w-full px-4 lg:block lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className=" max-w-full "
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Архитектура"
                paragraph="Security Capsule SIEM не имеет ограничений по масштабированию, а также количеству подключаемых источников данных.
При необходимости, система может быть развернута в виртуальной среде. Security Capsule SIEM представляет собой систему с модульной архитектурой, включающей в себя:"
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Модуль сбора событий" />
                    <List text="Модуль нормализации" />
                    <List text="Модуль корреляции" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Модуль хранения" />
                    <List text="Консоль" />
                    <List text="Источники" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Accordion data={siemModulesData} />
        </div>

        <Stages />

        <div className="my-20">
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
            Лицензии
          </h2>
          <div className="flex flex-wrap justify-between gap-10 lg:flex-nowrap">
            <div className="flex w-full  gap-10">
              <img width={"50px"} src="/images/licenses/logo_fstec.svg"></img>
              <p className="my-5 text-base text-body-color">
                Лицензия ФСТЭК России на деятельность по разработке и(или)
                производству средств защиты конфиденциальной информации №
                Л050-00107-00/00579766 от 10 мая 2010 года;
              </p>
            </div>
            <div className="flex w-full  gap-10">
              <img width={"50px"} src="/images/siem/lic_2.svg"></img>
              <p className="my-5 text-base text-body-color">
                Security Capsule SIEM зарегистрирована в реестре Российского
                программного обеспечения. Свидетельство о государственной
                регистрации программы для ЭВМ (Security Capsule SIEM)
                Минкомсвязи России № 2016613392 от 25 марта 2016 года.
                Регистрационный номер в реестре Минкомсвязи России № 1139.
              </p>
            </div>
          </div>
        </div>

        <Video />

        <Contact />
      </div>
    </section>
  );
};

export default page;
