import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="hidden lg:block lg:w-[400px]">
      <h2 className="mb-8 w-full text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight ">
        Навигация:
      </h2>
      <ul>
        <li className="mb-5 font-semibold text-body-color hover:text-primary ">
          <Link href="/about/press">Публикации</Link>
        </li>
        <li className="mb-5 font-semibold text-body-color hover:text-primary ">
          <Link href="/about/news">Новости</Link>
        </li>
        <li className="mb-5 font-semibold text-body-color hover:text-primary ">
          <Link href="/about/conferences">Мероприятия</Link>
        </li>
        <li className="mb-5 font-semibold text-body-color hover:text-primary ">
          <Link href="/about/licenses">Лицензии и сертификаты</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
