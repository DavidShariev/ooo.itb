"use client";

import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Image } from "@nextui-org/react";

const Card = ({ data, path }) => {
  const { id, attributes } = data;

  return (
    <div key={id}>
      <article className="group">
        <div className="p-4">
          <div className="mb-5">
            <p className=" mb-2 text-lg font-semibold">{attributes.date}</p>
            <h3 className="  font-bold text-black dark:text-white lg:text-4xl">
              {attributes.title}
            </h3>
          </div>

          {attributes.image?.data && (
            <div className="relative mt-8  flex max-h-[400px] items-center justify-center overflow-hidden">
              <Image
                src={
                  "http://localhost:1337" + attributes.image.data.attributes.url
                }
                width={"100%"}
                height={"100%"}
              ></Image>
            </div>
          )}

          <article className="prose  my-5 dark:prose-invert">
            {
              // eslint-disable-next-line
            }
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="max-h-[200px] overflow-hidden"
            >
              {attributes.body}
            </ReactMarkdown>
          </article>

          <Link
            href={path + "/" + id}
            className="my-5  inline-block rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
          >
            читать полностью
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Card;
