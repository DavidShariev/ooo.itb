"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Image from "next/image";

import Service1 from "./service/Service1";
import Service2 from "./service/Service2";
import Service3 from "./service/Service3";
import Service4 from "./service/Service4";
import Service5 from "./service/Service5";
import Service6 from "./service/Service6";
import Service7 from "./service/Service7";
import Service8 from "./service/Service8";

const Carousel = () => {
  const [firstCarousel, setFirstCarousel] = useState(null);
  const [secondCarousel, setSecondCarousel] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const firstCarouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
  };
  const secondCarouselSettings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
  };

  useEffect(() => {
    setSlidesToShow(Math.floor(window.innerWidth / 500));
  }, []);

  return (
    <>
      <Slider
        className="my-10 "
        asNavFor={firstCarousel}
        ref={(slider) => {
          setSecondCarousel(slider);
        }}
        {...secondCarouselSettings}
      >
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Проектирование систем информационной безопасности
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Аттестационные испытания и аттестация на соответствие требованиям по
            защите информации
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Безопасность объектов КИИ
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Контроль защищенности конфиденциальной информации от
            несанкционированного доступа и её модификации в средствах и системах
            информатизации
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Тестирование на проникновение (pentest)
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Сертификация средств защиты
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Поставка компьютерного и сетевого оборудования
          </h3>
        </div>
        <div className="pointer h-full">
          <h3 className="px-5 text-lg font-bold uppercase">
            Оценка уровня защищенности информационно инфаструктуры
          </h3>
        </div>
      </Slider>

      <Slider
        asNavFor={secondCarousel}
        className="mt-20 py-20"
        ref={(slider) => {
          setFirstCarousel(slider);
        }}
        {...firstCarouselSettings}
      >
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Service7 />
        <Service8 />

        <div id="8">
          <h2 className="text-3xl font-bold">
            Оценка уровня защищенности информационно инфаструктуры
          </h2>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
