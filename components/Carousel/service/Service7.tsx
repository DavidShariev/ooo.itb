import Image from "next/image";
import React from "react";
import serviceImage7 from "@/public/images/services/services_7.png";

const Service7 = () => {
  return (
    <div
      id="6"
      className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
    >
      <div className="mb-5 flex flex-wrap justify-center gap-20">
        <div className="flex-0">
          <Image src={serviceImage7} width="400" height="400" alt=""></Image>
        </div>
        <div className="flex-1">
          <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
            Поставка компьютерного и сетевого оборудования
          </h2>
          <p className="my-5 text-lg">
            Компания ООО «Инновационные Технологии в Бизнесе» более десяти лет
            является широкопрофильным поставщиком оборудования и комплектующих.
          </p>
          <p className="my-5 text-lg">
            Мы сотрудничаем с ведущими дистрибьютерами страны, в этой связи мы
            предоставляем оптимальные цены, возможность большого выбора и
            поставки следующей продукции:
          </p>
        </div>
      </div>
      <div>
        <ul>
          <li>- Ноутбуки и планшетные компьютеры</li>
          <li>- Мониторы и профессиональные панели</li>
          <li>- Носители информации</li>
          <li>- Фото-, видео- и action-камеры, оптика, аксессуары</li>
          <li>- Мультимедиа и Аудио-, Видеооборудование</li>
          <li>- Климатическая техника</li>
          <li>- Системы хранения данных</li>
          <li>- Сетевое оборудование</li>
          <li>- Видеонаблюдение и безопасность</li>
          <li>- Программное обеспечение</li>
          <li>- Персональные компьютеры</li>
          <li>- Оргтехника и расходные материалы</li>
          <li>- Комплектующие для компьютера</li>
          <li>- Серверы и опции</li>
          <li>- Системы бесперебойного питания</li>
          <li>- Телефония и Аудио-, Видеоконференцсвязь</li>
        </ul>
      </div>
    </div>
  );
};

export default Service7;
