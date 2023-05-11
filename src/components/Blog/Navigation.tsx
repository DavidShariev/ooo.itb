import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="hidden lg:block lg:w-[400px]">
      <h2 className="mb-8 w-full text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight ">
        Навигация:
      </h2>
      <ul>
        <li className="mb-5 hover:opacity-60">
          <Link href="/about">О нас</Link>
        </li>
        <li className="mb-5 hover:opacity-60">
          <Link href="/about/news">Новости</Link>
        </li>
        <li className="mb-5 hover:opacity-60">
          <Link href="/about/press">Мероприятия</Link>
        </li>
        <li className="mb-5 hover:opacity-60">
          <Link href="/about/licenses">Лицензии и мероприятия</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
