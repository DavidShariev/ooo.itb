import Image from "next/image";
import React from "react";
import serviceImage5 from "@/public/services/services_5.png";

const Service5 = () => {
  return (
    <div
      id="3"
      className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
    >
      <div className="mb-5 flex flex-wrap justify-center gap-20">
        <div className="flex-1">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Тестирование на проникновение (PENTEST)
          </h2>
          <p className="text-lg">
            Компания ООО «Инновационные Технологии в Бизнесе» оказывает услуги
            по тестированию на проникновение (Pentest) информационных систем. За
            последние годы специалистами компании был получен богатейший опыт
            проведения тестирования на проникновении информационных систем
            Заказчиков. Используя инновационные подходы, методики, и передовые
            средства специалисты компании провели тестирование ИС, ИСПДн, АС,
            АСУ ТП, ГИС.
          </p>
        </div>
        <div className="flex-0">
          <Image src={serviceImage5} width="400" height="400" alt=""></Image>
        </div>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Опыт компании
        </h2>
        <ul>
          <p className="py-3">
            Основными заказчиками услуги по тестированию на проникновение
            (Pentest) выступали:
          </p>
          <li>- Генерирующие компании (ГЭС, ТЭЦ)</li>
          <li>- Энергосбытовые компании</li>
          <li>- Компании Группы «Интер РАО ЕЭС»</li>
          <li>- Государственные и корпоративные порталы</li>
        </ul>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Состав услуг
        </h2>
        <ul>
          <p className="py-3">
            В состав работ по тестированию на проникновение (Pentest) может
            входить:
          </p>
          <li>- Проведение исследования внешнего периметра</li>
          <li>- Проведение исследования внутреннего периметра</li>
          <li>- Анализ защищенности веб-приложений</li>
          <li>- Анализ защищенности мобильных приложений</li>
          <li>- Анализ защищенности беспроводного эфира</li>
          <li>- Социотехническое тестирование</li>
        </ul>
        <p className="py-3">
          В ходе тестирования специалист по анализу защищенности выполняет роль
          злоумышленника, мотивированного на нарушение информационной
          безопасности Заказчика. Предоставление услуг тестирования на
          проникновения основывается на методологиях OWASP (Open Web Application
          Security Project); OSSTMM (The Open Source Security Testing
          Methodology Manual); NIST Cybersecurity Framework; ГОСТ Р 56939-2016.
        </p>
        <p className="py-3">
          Возможны форматы оказания услуги как Black Box\Gray Box\White Box
        </p>
        <p className="py-3">
          Стоимость оказания услуги оценивается на основе данных предоставляемых
          Заказчиком в Опросном листе на предварительном этапе подготовке к
          оказанию услуги.
        </p>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Нагрузочное тестирование (DOS-Атака)
        </h2>
        <p className="my-3">
          По предварительному согласованию со специалистами Заказчика
          ответственными за обеспечение информационной безопасности порталов
          Заказчика возможно проведение нагрузочного тестирования на предмет
          отказоустойчивости порталов так называемым DOS-атакам, с применением
          специализированного программного обеспечения. Специализированное
          программное обеспечение выполняет атаку вида «отказ в обслуживании»
          путём постоянных передач на нужный сайт или узел TCP-, UDP-пакетов или
          HTTP-запросов с целью появления сбоев в работе целевого узла, стоит
          отметить что данное программное обеспечение способно отправлять
          запросы в режиме многопоточности. Стоит отметить что в общем случае
          для не стабильной работы целевой системы как правило достаточно в 200
          потоков отправить 65 000 000 UDP запросов на 80 или же 443 TCP порт,
          что займет около 20 минут.
        </p>
      </div>

      <div className="my-20">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
          Анализ результатов
        </h2>
        <ul className="py-5">
          <p className="py-3">
            По результатам выполнения заданных проверок формируется сводный
            отчет в формате rtf, html или pdf. Экспертом Исполнителя проводится
            анализ обнаруженных уязвимостей\сценариев компрометации и степени их
            влияния на защищенность объекта обследования осуществляется
            экспертным методом. Формат описания уязвимостей включает:
          </p>
          <li>- краткое описание;</li>
          <li>- подробное описание;</li>
          <li>- решение;</li>
          <li>- ссылки;</li>
        </ul>
        <p className="my-3">
          Для эксплуатации уязвимостей конфигурации не всегда требуются
          специальные программные средства. Нарушитель может воспользоваться
          штатными средствами системы. Устранение такого рода уязвимостей, как
          правило, требует внесения изменений в настройки системы. Определение
          уровня защищенности объекта обследования осуществляется путем
          обработки, анализа и оценки результатов аудита состояния
          информационной безопасности корпоративной информационной системы.
        </p>
        <p className="my-3">
          По результатам, полученным в ходе оказания услуги, экспертами дается
          заключение об уровне защищенности объекта обследования и приводятся
          рекомендации по повышению уровня защищенности.
        </p>
      </div>
    </div>
  );
};

export default Service5;
