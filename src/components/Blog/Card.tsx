import Link from "next/link";
import React from "react";
import TagButton from "./TagButton";

const Card = () => {
  return (
    <div className="">
      <article className="group">
        <img
          alt="Lava"
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-auto max-h-[400px] w-full rounded-xl object-cover shadow-xl transition "
        />

        <div className="p-4">
          <p className=" text-sm">10.03.2022</p>
          <h3 className=" text-2xl font-bold text-black dark:text-white">
            Finding the Journey to Mordor
          </h3>

          <div className="my-1 flex flex-wrap gap-4">
            <TagButton text="Новость" />
            <TagButton text="Текст" />
            <TagButton text="Тег" />
          </div>

          <p className="line-clamp-3 text-sm/relaxed mb-5 mt-2 text-body-color">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <Link className="my-5 hover:opacity-50" href="#">
            читать полностью...
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Card;
