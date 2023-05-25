"use client";

import React, { useEffect } from "react";
import { Collapse } from "@nextui-org/react";
import s from "./style.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const index = ({ data }) => {
  function clickHandler(e) {
    console.log(e.currentTarget.classList.toggle(s.accordion__hidden));
  }

  return (
    <div>
      {data.map((data) => {
        return (
          <div
            key={data.id}
            onClick={clickHandler}
            className={
              " border-collapse border-b-2 border-b-gray-500 pt-4 pl-5 " +
              s.accordion +
              " " +
              s.accordion__hidden
            }
          >
            <h3 className="relative cursor-pointer font-bold">
              {data.title}
              <IoIosArrowDown className="absolute top-2 right-2" />
            </h3>
            <div className={" my-2 overflow-hidden " + s.accordion__body}>
              <img
                className="float-left mr-3"
                src={`/images/siem/module_${data.id}.png`}
              ></img>
              <p className="text-lg text-body-color">{data.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
