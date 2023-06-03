import React from "react";
import Image from "next/image";
import serviceImage3 from "@/public/services/services_3.png";
import siem from "@/public/products/SIEM.png";

const Service3 = () => {
  return (
    <div
      id="3"
      className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
    >
      <div className="mb-5 flex flex-wrap justify-center gap-20">
        <div className="flex-1">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Безопасность объектов КИИ
          </h2>
          <p className="text-lg">
            Компания ООО «Инновационные Технологии в Бизнесе» оказывает услуги
            по обеспечению безопасности объектов критической информационной
            инфраструктуры (КИИ) направленные на устойчивое функционирование
            объекта КИИ при проведении в отношении ее компьютерных атак.
          </p>
          <p></p>
        </div>
        <div className="flex-0">
          <Image src={serviceImage3} width="400" height="400" alt=""></Image>
        </div>
      </div>

      <div>
        <ul className="mb-5">
          <p className="my-3 text-black dark:text-white">
            КИИ входят в состав:
          </p>
          <li>- систем органов государственной власти</li>
          <li>- систем органов управления правоохранительных структур</li>
          <li>- систем финансово-кредитной и банковской деятельности</li>
          <li>- систем предупреждения и ликвидации чрезвычайных ситуаций</li>
          <li>- географические и навигационные систем</li>
          <li>
            - сети связи общего пользования на участках, без резервных видов
            связи
          </li>
          <li>- систем специального назначения</li>
          <li>
            - спутниковых систем для обеспечения органов управления и в спец.
            целях
          </li>
          <li>
            - систем управления добычей и транспортировкой нефти, нефтепродуктов
            и газа
          </li>
          <li>- систем управления водоснабжением и энергоснабжением</li>
          <li>
            - систем управления транспортом (наземным, воздушным, морским)
          </li>
          <li>- систем управления потенциально опасными объектами</li>
        </ul>
        <ul className="mb-5">
          <p className="my-3 text-black dark:text-white">
            Принципы обеспечения безопасности объектов КИИ основываются на:
          </p>
          <li>- Непрерывности и комплексности обеспечения безопасности КИИ</li>
          <li>- Законности</li>
          <li>- Приоритете предотвращения компьютерных атак</li>
        </ul>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Субъекты критической информационной инфраструктуры
        </h2>
        <p>
          Субъектами критической информационной инфраструктуры (КИИ) являются:
          государственные органы, государственные учреждения, российские
          юридические лица и (или) индивидуальные предприниматели, которым на
          праве собственности, аренды или на ином законном основании принадлежат
          информационные системы, информационно-телекоммуникационные сети,
          автоматизированные системы управления, функционирующие в сфере
          здравоохранения, науки, транспорта, связи, энергетики, банковской
          сфере и иных сферах финансового рынка, топливно-энергетического
          комплекса, в области атомной энергии, оборонной, ракетно-космической,
          горнодобывающей, металлургической и химической промышленности,
          российские юридические лица и (или) индивидуальные предприниматели,
          которые обеспечивают взаимодействие указанных систем или сетей.
        </p>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Уведомление НКЦКИ об инцидентах ИБ
        </h2>
        <Image
          src={siem}
          height={"200"}
          width={"200"}
          alt=""
          className="float-left"
        ></Image>
        <p className="py-3">
          С помощью дополнительного модуля («ГосСОПКА») реализованного в
          SIEM-системе Security Capsule SIEM мы в кратчайшие сроки реализуем
          Ваше взаимодействие с Национальным координационным центрои по
          компьютерным инцидентам (НКЦКИ) в части полуавтоматической отправки
          уведомлений о зафиксированных на объекте информатизации компьютерных
          инцидентах.
        </p>
        <p className="py-3">
          В Security Capsule SIEM уведомления о компьютерных инцидентах
          направляются в Государственную систему обнаружения, предупреждения и
          ликвидации последствий компьютерных атак (ГосСОПКА) по определенному
          НКЦКИ регламенту. Необходимо отметить, что для отправки уведомлений о
          компьютерных инцидентах на объекте информатизации должен быть
          организован защищённый канал с технической инфраструктурой (ТИ) НКЦКИ.
          Как правило, специалисты ООО «Инновационные Технологии в Бизнесе»
          реализуют защищенный канал с технической инфраструктурой НКЦКИ
          посредством применения продуктов ViPNet компании АО «Инфотекс», АПКШ
          «Континент» компании «Код Безопасности» и использованием линейки
          продуктов ООО «S-Terra». Более подробное описание вариантов
          организации защищенного канала c ТИ НКЦКИ приведено в Памятке.
        </p>
      </div>

      <div className="my-20 flex flex-wrap gap-10 lg:flex-nowrap">
        <div>
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Субъекты КИИ имеют право
          </h2>
          <ul>
            <li>
              - Получать от ФСТЭК, информацию, необходимую для обеспечения
              безопасности значимых объектов КИИ
            </li>
            <li>
              - Получать от указанного органа информацию о средствах и способах
              проведения компьютерных атак
            </li>
            <li>
              - Приобретать, арендовать, устанавливать и обслуживать средства,
              предназначенные для обнаружения, предупреждения и ликвидации
              последствий компьютерных атак и реагирования на компьютерные
              инциденты
            </li>
            <li>
              - Разрабатывать и осуществлять мероприятия по обеспечению
              безопасности ЗОКИИ
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Субъекты КИИ обязаны
          </h2>
          <ul>
            <li>- Информировать о компьютерных инцидентах ФСБ России</li>
            <li>- Оказывать содействие ФСБ России</li>
            <li>
              - Обеспечивать выполнение порядка, технических условий установки и
              эксплуатации средств ГосСОПКА
            </li>
            <li>- Соблюдать требования по обеспечению безопасности ЗОКИИ</li>
            <li>- Реагировать на компьютерные инциденты</li>
            <li>
              - Принимать меры по ликвидации последствий компьютерных атак
            </li>
            <li>- Обеспечивать беспрепятственный доступ к ЗОКИИ</li>
          </ul>
        </div>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Основные задачи системы безопасности ЗОКИИ
        </h2>
        <ul>
          <p className="my-3">
            Основными задачами системы безопасности ЗОКИИ являются:
          </p>
          <li>
            - Предотвращение неправомерного доступа к информации, обрабатываемой
            ЗОКИИ
          </li>
          <li>
            - Недопущение воздействия на технические средства обработки
            информации
          </li>
          <li>- Восстановление функционирования ЗОКИИ</li>
          <li>- Непрерывное взаимодействие с ГосСОПКА</li>
        </ul>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Требования по обеспечению безопасности ЗОКИИ
        </h2>
        <ul>
          <p className="my-3">
            Общие требования для обеспечения безопасности ЗОКИИ:
          </p>
          <li>
            - Планирование, разработка, совершенствование и осуществление
            внедрения мероприятий
          </li>
          <li>- Установление дополнительных отраслевый требований</li>
          <li>- Принятие организационных и технических мер</li>
          <li>
            - Установление параметров и характеристик программных и
            программно-аппаратных средств
          </li>
        </ul>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Оценка безопасности КИИ
        </h2>
        <ul>
          <p className="my-3">
            При осуществлении оценки безопасности КИИ проводится анализ:
          </p>
          <li>- Анализ данных</li>
          <li>- Анализ сведений, представляемых в ФСБ России</li>
          <li>
            - Анализ информации, представляемой субъектами КИИ и ФСТЭК России
          </li>
          <li>- Анализ иной информации</li>
        </ul>
      </div>
    </div>
  );
};

export default Service3;