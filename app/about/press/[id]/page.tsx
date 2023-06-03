"use client";

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { blogAxios } from "@/axios";

export default function Page() {
  const [data, setData] = useState<any>({
    data: null,
  });
  const [isLoading, setLoading] = useState(false);

  const path = usePathname();
  const id = path.split("/").reverse()[0];

  useEffect(() => {
    setLoading(true);
    blogAxios(`presses/${id}?populate=deep`)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <h1 className="font-bold">Загрузка...</h1>
        </div>
      </section>
    );
  }
  console.log(data);
  if (data.data !== null) {
    return (
      <>
        <section className="pb-[120px] pt-[150px]">
          <div className="container">
            <div className="mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <p className=" text-lg font-semibold">
                    {data.data.attributes.date}
                  </p>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    {data.data.attributes.title}
                  </h2>

                  {data.data.attributes.image.data && (
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={data.data.attributes.image.data.attributes.url}
                          alt="image"
                          fill
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <div className="flex items-center">
                          <TagButton text="Назад" href="/about/press" />
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                          Мы в сетях:
                        </h5>
                        <div className="flex items-center sm:justify-end">
                          <SharePost />
                        </div>
                      </div>
                    </div>

                    <article className=" prose max-w-none  dark:prose-invert">
                      {
                        // eslint-disable-next-line
                      }
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {data.data.attributes.body}
                      </ReactMarkdown>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
