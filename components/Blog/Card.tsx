import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type CardProps = {
  id: number;
  data: any;
  path: string;
};

const Card = (props: CardProps) => {
  const { id, data, path } = props;
  return (
    <div key={id}>
      <article className="group">
        <div className="p-4">
          <div className="mb-5">
            <p className=" mb-2 text-lg font-semibold">{data.date}</p>
            <h3 className="  font-bold text-black dark:text-white lg:text-4xl">
              {data.title}
            </h3>
          </div>

          {data.image?.data && (
            <div className="relative mt-8 flex h-[400px] items-center justify-center overflow-hidden">
              <Image
                style={{ objectFit: "cover" }}
                src={data.image.data.attributes.url}
                alt=""
                fill
              ></Image>
            </div>
          )}

          <article className="prose  my-5 dark:prose-invert">
            {
              // eslint-disable-next-line
            }
            <ReactMarkdown className="max-h-[200px] overflow-hidden">
              {data.body}
            </ReactMarkdown>
          </article>

          <Link
            href={path + "/" + id}
            className="my-5  inline-block rounded-md bg-black/20 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
          >
            читать полностью
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Card;
