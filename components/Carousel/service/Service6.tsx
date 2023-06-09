import React from "react";
import Image from "next/image";
import serviceImage6 from "@/public/services/services_1.png";
import Notice from "../Notice";

const Service6 = () => {
  return (
    <div
      id="6"
      className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
    >
      <div className="mb-5 flex flex-wrap justify-center gap-20">
        <div className="flex-0">
          <Image src={serviceImage6} width="400" height="400" alt=""></Image>
        </div>
        <div className="flex-1">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Сертификация средств защиты информации
          </h2>
          <p className="my-5 text-lg">
            Компания «ИТБ» является разработчиком и производителем{" "}
            <strong>средств защиты информации</strong>, а также оказывает услуги
            по подготовке к сертификационным испытаниям программных и
            программно-технических средств защиты, встроенных механизмов защиты
            по требованиям безопасности информации ФСТЭК России №РОСС RU.0001
            .01БИ00.
          </p>
          <p className="my-5 text-lg">
            <strong>Сертификация</strong> является одним из приоритетных
            направлений деятельности компании. Процедура сертификации определена
            в Положении о сертификации средств защиты информации (Приказ ФСТЭК
            России от 3 апреля 2018 г. N 55).
          </p>
        </div>
      </div>

      <Notice text="Наличие/отсутствие сертификатов соответствия напрямую влияет на процесс подготовки и проведения аттестационных испытаний. Вопросы аттестационных испытаний подробно описаны в разделе «Аттестационные испытания и аттестация на соответствие требованиям по защите информации"></Notice>

      <div className="my-20">
        <h2 className="mb-5 mt-20  text-2xl font-bold text-black dark:text-white">
          Опыт компании
        </h2>

        <ul>
          <p className="my-3">
            ООО «ИТБ» является разработчиком и производителем сертифицированных
            средств защиты:
          </p>
          <li>
            - ОС «EMIAS 1.0» на соответствие требованиям профиля защиты
            операционных систем типа «А» пятого класса защиты ИТ.ОС.А5.ПЗ., УД 5
          </li>
          <li>
            - Системы мониторинга и корреляции событий информационной
            безопасности Security Capsule класса SIEM (Security information and
            event management) (ТУ, УД 5)
          </li>
        </ul>

        <ul>
          <p className="my-3">
            За более чем десятилетний период специалисты компании подготовили к
            сертификации и организовали серийное производство программных и
            программно-технических средств защиты, включая сертификацию
            встроенных механизмов защиты:
          </p>
          <li>
            - Встроенных механизмов защиты операционных систем Red Hat Linux
            (версии 2.1, 4.8, 5.5) на соответствие требованиям ТУ и РД МЭ
          </li>
          <li>
            - Средства защиты от НСД «Интернет Контроль Сервер», разработчиком
            которого является ООО «А-Реал Консалтинг»
          </li>
          <li>
            - Встроенных механизмов защиты IOS (Internetwork Operating System)
            компании Cisco Inc. На соответствие требованиям ТУ, РД МЭ
          </li>
          <li>
            - Встроенных межсетевых экранов в ОС семейства Linux (FreeBCD,
            Centos) на соответствие требованиям ТУ и РД МЭ
          </li>
        </ul>
      </div>

      <div className="my-20">
        <h2 className="mb-5 mt-20  text-2xl font-bold text-black dark:text-white">
          Целесообразность сертификации средств защиты информации
        </h2>

        <p className="my-3">
          <strong>
            Применение сертифицированных средств защиты ОБЯЗАТЕЛЬНО
          </strong>{" "}
          при создании систем защиты государственных информационных систем, а
          также для нейтрализации актуальных угроз информационных систем
          персональных данных.
        </p>

        <p className="my-3">
          <strong>
            Для обеспечения безопасности значимых объектов критической
            информационной инфраструктуры
          </strong>{" "}
          должны применяться средства защиты информации, прошедшие оценку на
          соответствие требованиям по безопасности в формах обязательной
          сертификации, испытаний или приемки (Приказ ФСТЭК России от 25 декабря
          2017 г. №239 «Об утверждении Требований по обеспечению безопасности
          значимых объектов критической информационной инфраструктуры Российской
          Федерации», в ред. приказа ФСТЭК России от 26 марта 2019 г. № 60).
        </p>

        <ul className="my-5">
          <p className="my-3">
            Приказы ФСТЭК России N 121 от 05.08.2021 и N 172 от 19.09.2022
            вносят ряд существенных изменений и дополнений в Положение о
            сертификации средств защиты информации (Приказ ФСТЭК России от 3
            апреля 2018 г. N 55) в части:
          </p>
          <li>
            - Сертификации средств защиты информации иностранного производства
          </li>
          <li>
            - Сроков проведения сертификационных испытаний, порядка
            взаимодействия заявителя, испытательной лаборатории и органа по
            сертификации
          </li>
          <li>
            - Внесения изменений в сертифицированное средство защиты информации
          </li>
          <li>- Маркирования сертифицированных средств защиты информации</li>
          <li>- Формы заявки на сертификацию</li>
        </ul>
      </div>

      <Notice text="Необходимо обратить особое внимание на выполнение требований регламентов о своевременном предоставлении сведений в федеральный орган по сертификации о выявленных уязвимостях, маркированных и переданных заказчикам средствах защиты информации, о ходе выполнения работ по сертификации средств защиты, сроках техничкой поддержки."></Notice>

      <div className="my-20">
        <h2 className="mb-5 mt-20  text-2xl font-bold text-black dark:text-white">
          Нормативно-правовая база
        </h2>

        <p className="my-3">
          Полный актуальный Государственный реестр сертифицированных средств
          защиты в системе сертификации ФСТЭК России доступен по ссылке.
        </p>
        <p className="my-3">
          Перечень нормативно – методических документов и требований по
          сертификации доступен для ознакомления и скачивания по ссылке.
        </p>
        <p className="my-3">
          В Приказе ФСТЭК России №239 от 25 декабря 2017 «Об утверждении
          требований по обеспечению безопасности значимых объектов критической
          информационной инфраструктуры (ОКИИ) Российской Федерации» указано,
          что в приоритетном порядке подлежат применению средства защиты
          информации, встроенные в программное обеспечение и (или)
          программно-аппаратные средства значимых объектов (при их наличии).
        </p>

        <ul className="my-5">
          <p className="my-3">
            Применение сертифицированных встроенных средств защиты
            (реализованных механизмов защиты) информации позволяет:
          </p>
          <li>
            - существенно уменьшить затраты на приобретение, установку и
            эксплуатацию наложенных (дополнительных) средств защиты
          </li>
          <li>- обеспечить неизменность среды функционирования системы</li>
          <li>
            - повысить степень доверия к программному обеспечению и
            программно-аппаратным средствам
          </li>
          <li>- получить конкурентные преимущества</li>
        </ul>

        <ul className="my-5">
          <p className="my-3">Основные нормативно-правовые документы:</p>
          <li>
            - Федеральный закон от 27 июля 2006 г. N 149-ФЗ «Об информации,
            информационных технологиях и о защите информации»
          </li>
          <li>
            - Приказ ФСТЭК России от 3 апреля 2018 г. N 55 «Об утверждении
            Положения о системе сертификации средств защиты информации»
          </li>
          <li>
            - Требования по безопасности информации, утвержденных приказом ФСТЭК
            России от 2 июня 2020 г. N 76
          </li>
          <li>
            - Методический документ. Утвержден ФСТЭК России 28 октября 2022 г.
            «Методика тестирования обновлений безопасности программных,
            программно-аппаратных средств»
          </li>
          <li>
            - Методический документ. Утвержден ФСТЭК России 28 октября 2022 г.
            «Методика оценки уровня критичности уязвимостей программных,
            программно-аппаратных средств»
          </li>
          <li>
            - Методический документ. Утвержден ФСТЭК России 5 февраля 2021 г.
            «Методика оценки угроз безопасности информации»
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service6;
