import React from "react";
import Navigation from "../Blog/Navigation";
import fstecLogo from "@/public/images/licenses/logo_fstec.svg";
import fsbLogo from "@/public/images/licenses/logo_fsb.svg";

const index = () => {
  return (
    <section id="licenses">
      <div className="container ">
        <div className="gap-20 pt-20 lg:flex">
          <Navigation />

          <div className="w-full">
            <div className="mb-14">
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Лицензии
              </h2>
              <ul>
                <li className="flex gap-10">
                  <img
                    width={"50px"}
                    src="/images/licenses/logo_fstec.svg"
                  ></img>
                  <p className="my-5 text-base text-body-color">
                    Лицензия ФСТЭК России на деятельность по разработке и(или)
                    производству средств защиты конфиденциальной информации №
                    Л050-00107-00/00579766 от 10 мая 2010 года;
                  </p>
                </li>
                <li className="flex gap-10">
                  <img
                    width={"50px"}
                    src="/images/licenses/logo_fstec.svg"
                  ></img>
                  <p className="my-5 text-base text-body-color">
                    Лицензия ФСТЭК России на деятельность по разработке и(или)
                    производству средств защиты конфиденциальной информации №
                    Л050-00107-00/00579766 от 10 мая 2010 года;
                  </p>
                </li>
                <li className="flex gap-10">
                  <img width={"50px"} src="/images/licenses/logo_fsb.svg"></img>
                  <p className="my-5 text-base text-body-color">
                    Лицензия ФСТЭК России на деятельность по разработке и(или)
                    производству средств защиты конфиденциальной информации №
                    Л050-00107-00/00579766 от 10 мая 2010 года;
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Сертификаты
              </h2>
              <ul>
                <li>
                  <p className=" my-5 text-base text-body-color">
                    - Операционная система EMIAS OS 1.0 автоматизированной
                    системы города Москвы «Единая медицинская
                    информационно-аналитическая система города Москвы»
                    Сертификат ФСТЭК России №3807 от 3 сентября 2019 года
                    (Соответствует требованиям документов: Требования
                    доверия(5), Требования к ОС, Профиль защиты ОС
                    (ИТ.ОС.А5.ПЗ)).
                  </p>
                </li>
                <li>
                  <p className=" my-5 text-base text-body-color">
                    - Свидетельство о государственной регистрации программы для
                    ЭВМ (SIEM Security Capsule) Минкомсвязи России № 2016613392
                    от 25 марта 2016 года, в едином реестре российских программ
                    для электронных вычислительных машин и баз данных.
                  </p>
                </li>
                <li>
                  <p className=" my-5 text-base text-body-color">
                    - Security Capsule SIEM - система мониторинга и корреляции
                    событий информационной безопасности. Сертификат ФСТЭК России
                    № 6493 от 9 ноября 2016 года на ТУ и 4 уровень контроля НДВ.
                  </p>
                </li>
                <li>
                  <p className=" my-5 text-base text-body-color">
                    - Сертификат соответствия требованиям системы менеджмента
                    качества ГОСТ ISO 9001-2015 (ISO 9001:2015) №
                    СДС.ФР.СМ.00386.20.Р от 19 октября 2020 года.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
