import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Blog/Navigation";
import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="gap-20 pt-20 lg:flex">
          <Navigation />

          <div className="w-full">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Кто мы такие:
            </h2>
            <p className="mb-8 text-base  !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-lg">
              Год основания: октябрь 2009. Основными направлениями деятельности
              компании являются: Проектирование, внедрение и сопровождение
              систем защиты информации, Сертификация средств защиты и встроенных
              механизмов защиты в прикладное ПО, ОС, СУБД, Аттестационные
              испытания ГИС, ИСПДн, АС. Компания является разработчиком и
              производителем системы мониторинга и корреляции событий
              информационной безопасности Security Capsule SIEM, операционной
              системы OS EMIAS 1.0.
            </p>
            <h2 className="mb-8 text-xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
              Основой производственной политики компании является:
              <ul className="mt-5 text-base font-normal !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-lg">
                <li className="mb-4">
                  1. комплексный подход к реализации поставленных задач на
                  основе использования широкого спектра представленных средств;
                </li>
                <li className="mb-4">
                  2. возможность предложения универсальных методов решения
                  поставленных задач в сочетании с учетом индивидуальных
                  особенностей и специфики деятельности заказчика.
                </li>
              </ul>
            </h2>
            <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-lg">
              Коллектив сотрудников объединяет четкое понимание целей компании и
              путей их достижения. Использование передовых технологий, строгое
              исполнение взятых на себя обязательств и качественное воплощение
              проектов позволяет компании завоевать доверие партнеров и получить
              конкурентные преимущества.
            </p>

            <div className="wrap flex items-center gap-10">
              <div className="flex-0 hidden md:block md:w-[200px]">
                <Image
                  src="/images/about/Russoft.png"
                  width={"175"}
                  height={"175"}
                  alt=""
                ></Image>
              </div>

              <div className="flex-1">
                <p className="text-base !leading-relaxed text-body-color  dark:opacity-90 sm:text-lg md:text-lg">
                  Компания ООО «Инновационные Технологии в Бизнесе» является
                  членом Ассоциации РУССОФТ. РУССОФТ - крупнейшее объединение
                  компаний разработчиков программного обеспечения в России,
                  ориентированных на глобальный рынок. На 2021 год РУССОФТ
                  объединяет 234 ИТ-компании со штатом более 70 000
                  высококвалифицированных сотрудников. РУССОФТ представляет всю
                  индустрию разработки ПО в России. Центральный офис Партнерства
                  находится в Санкт-Петербурге.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
