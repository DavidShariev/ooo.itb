import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./stages.scss";

const Stages = () => {
  const [firstCarousel, setFirstCarousel] = useState(null);
  const [secondCarousel, setSecondCarousel] = useState(null);

  const settingsFirst = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    Infinity: true,
    arrows: true,
  };

  const settingsSecond = {
    slidesToShow: 4,
    arrows: false,
    Infinity: true,
    vertical: true,
    dots: false,
    verticalSwiping: true,
  };

  return (
    <div className="container my-20 flex max-w-full flex-wrap items-stretch gap-10 lg:flex-nowrap">
      <div className="max-h-[1000px]  lg:w-1/3 ">
        <div className="mb-10">
          <h1 className="mb-auto text-3xl font-bold">Этапы:</h1>
        </div>

        <Slider
          asNavFor={secondCarousel}
          ref={(slider) => {
            setFirstCarousel(slider);
          }}
          className="h-full"
          {...settingsSecond}
        >
          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_1.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 1</h3>
                  <p className=" text-body-color">Обследование объекта</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_2.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 2</h3>
                  <p className=" text-body-color">
                    Определение перечня источников события
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_3.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 3</h3>
                  <p className=" text-body-color">Установка компонентов</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_4.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 4</h3>
                  <p className=" text-body-color">
                    Настройка компонентов и источников
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_1.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 1</h3>
                  <p className=" text-body-color">Обследование объекта</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_2.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 2</h3>
                  <p className=" text-body-color">
                    Определение перечня источников события
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_3.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 3</h3>
                  <p className=" text-body-color">Установка компонентов</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex gap-5">
                <img
                  className="max-h-[100px]"
                  src="/images/siem/stage_4.png"
                ></img>
                <div className="lg:max-w-[200px]">
                  <h3 className="text-xl font-bold">Этап 4</h3>
                  <p className=" text-body-color">
                    Настройка компонентов и источников
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="max-h-[1000px] max-w-full lg:w-2/3">
        <Slider
          asNavFor={firstCarousel}
          ref={(slider) => {
            setSecondCarousel(slider);
          }}
          {...settingsFirst}
          className=""
        >
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 1
              </h2>
              <img src="/images/siem/stage_1.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 2
              </h2>
              <img src="/images/siem/stage_2.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 3
              </h2>
              <img src="/images/siem/stage_3.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 4
              </h2>
              <img src="/images/siem/stage_4.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 1
              </h2>
              <img src="/images/siem/stage_1.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 2
              </h2>
              <img src="/images/siem/stage_2.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 3
              </h2>
              <img src="/images/siem/stage_3.png"></img>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="absolute top-5 left-5 text-xl font-bold">
                Этап 4
              </h2>
              <img src="/images/siem/stage_4.png"></img>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Stages;
