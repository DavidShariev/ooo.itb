import React from "react";
import serviceImage1 from "@/public/services/services_1.png";
import Image from "next/image";
import Notice from "../Notice";

const index = () => {
  return (
    <div
      id="1"
      className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
    >
      <div className="mb-20 flex flex-wrap justify-center gap-20">
        <div className="flex-1">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Проектирование систем информационной безопасности
          </h2>
          <p className="text-lg">
            ООО «Инновационные Технологии в Бизнесе» более тринадцати лет
            оказывает услуги по проектированию и внедрению систем защиты
            информации. Преимуществом нашей компании является понимание, знание
            и умение разрабатывать системы защиты информации, информационные
            системы в защищенном исполнении, соответствующие в полном объеме
            требованиям законодательства, нормативным документа и требованиям
            регуляторов без ухудшения функциональных характеристик, показателей
            качества и надежности.
          </p>
        </div>
        <div className="flex-0">
          <Image src={serviceImage1} width="400" height="400" alt=""></Image>
        </div>
      </div>
      <div>
        <p className="my-5 text-lg font-semibold text-black dark:text-white">
          Накоплен значительный практический опыт реализации проектов систем
          защиты информационной безопасности для:
        </p>
        <ul className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          <li>
            - Государственных информационных систем федерального и регионального
            уровней (ГИС, РИС)
          </li>
          <li>- Инфотелекоммуникационных систем</li>
          <li>- Информационных систем персональных данных (ИСПДн)</li>
          <li>
            - Автоматизированных систем управления технологическими процессами
            (АСУ ТП)
          </li>
          <li>- Объектов критической информационной инфраструктуры (ОКИИ)</li>
        </ul>
      </div>

      <Notice
        text={
          "Соответствие проектов требованиям по безопасности информации, реализованных нашими специалистами, подтверждается аттестатами соответствия, оформленными по результатам аттестационных испытаний. При проектировании систем защиты уделяется особое внимание применению встроенных механизмов защиты в прикладное программное обеспечение, программно-технические средства (подробнее). Модели угроз информационной безопасности, разработанных на предварительном этапе выполнения проектных работ, прошли согласования во ФСТЭК России"
        }
      />

      <div>
        <h2 className="mb-5 mt-20  text-2xl font-bold text-black dark:text-white">
          Подходы и задачи
        </h2>
        <div className="flex flex-wrap gap-10 lg:flex-nowrap">
          <div>
            <ul className="">
              <p className="mb-3 text-xl text-black dark:text-white">
                Подходы к разработке проектов основываются на требованиях
                регуляторов в области ИБ
              </p>
              <li>
                - Федеральная служба по техническому и экспортному контролю
                (ФСТЭК России)
              </li>
              <li>
                - Федеральная служба безопасности Российской Федерации (ФСБ
                России)
              </li>
              <li>
                - Министерство цифрового развития, связи и массовых коммуникаций
                Российской Федерации (Минцифры России)
              </li>
            </ul>
            <p className="my-5 ">
              Задачи обеспечения информационной безопасности становятся особенно
              актуальны в условиях цифровизации. Цифровизация – это внедрение
              современных цифровых технологий в различные сферы жизни и
              производства.
            </p>
            <p className="my-5">
              При разработке и внедрении цифровых решений особенно актуальна
              задача формулирование требований по ИБ, т.е. на этапе обоснования
              и разработке технического задания на проектируемую систему, что в
              полной мере коррелируется с требованиями НМД регуляторов в области
              ИБ.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-xl text-black dark:text-white">
              Заказчики
            </h3>
            <ul>
              <li>
                - Региональные органы исполнительной и подведомственные
                организации города Москвы, Санкт-Петербурга, Ленинградской
                области, Новгородской области
              </li>
              <li>- Организации и предприятия Группы компаний «Интер РАО»</li>
              <li>- Территориальные Фонды ОМС</li>
              <li>- Дошкольные образовательные учреждения</li>
              <li>- Медицинские учреждения</li>
              <li>- Организации и предприятия ЖКХ</li>
              <li>- И другие</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-5 mt-8 text-2xl font-bold text-black dark:text-white">
          Импортозамищение
        </h2>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          В условиях санкционного давления обоснованно ужесточились требования
          ФСТЭК России и ФСБ России по применению импортных программных и
          программно-технических средств защиты информации. В ряде случаев
          отказаться от таких средств либо затруднительно, либо невозможно. Со
          временем эта проблема, без сомнения, будет устранена. Специалисты ООО
          «ИТБ» имеют большой опыт проектирования и внедрения систем защиты
          информации в текущих условиях с учетом импортозамещения путём
          применения соответствующих технических и организационных решений.
        </p>
      </div>

      <Notice
        text={
          "Заказчикам предлагаются решения, включенные в Единый реестр российских программ для электронных вычислительных машин и баз данных Минцифры России."
        }
      />

      <div>
        <h2 className="my-5 mt-16 text-2xl font-bold text-black dark:text-white">
          Дополнительные услуги
        </h2>

        <ul className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          <p className="white:text-white my-3 font-semibold text-black dark:text-white">
            При выполнении работ по проектированию систем защиты информационной
            безопасности специалисты компании по требованию и согласованию с
            Заказчиком оказывают следующие дополнительные услуги:
          </p>
          <li>
            - контроль защищенности конфиденциальной информации от НСД и ее
            модификации в средствах и системах информатизации
          </li>
          <li>- статический анализ исходного кода ПО</li>
          <li>тестирование на проникновение (Pentest)</li>
          <li>
            - фаззинг тестирование в соответствии с Методики выявления
            уязвимостей и недекларированных возможностей в программном
            обеспечении, а также ГОСТР 56939- 2016 Защита информации разработка
            безопасного программного обеспечения. Общие требования
          </li>
          <li>
            - оценка уровня защищенности информационных систем (информационной
            инфраструктуры)
          </li>
          <li>
            - реализация информирования ФСБ России о компьютерных инцидентах
            путем направления информации в Национальный координационный центр по
            компьютерным инцидентам (НКЦКИ) в соответствии с определенными НКЦКИ
            форматами представления информации о компьютерных инцидентах в
            государственную систему обнаружения, предупреждения и ликвидации
            последствий компьютерных атак (ГосСОПКА) на информационные ресурсы
            Российской Федерации
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;