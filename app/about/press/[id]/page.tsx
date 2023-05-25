"use client";

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function Page() {
  const [data, setData] = useState({
    data: null,
  });
  const [isLoading, setLoading] = useState(false);

  const path = usePathname();
  const id = path.split("/").reverse()[0];

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1337/api/presses/${id}?populate=deep`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="pt-[150px] pb-[120px]">
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
        <section className="pt-[150px] pb-[120px]">
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
                    <div className="mt-8">
                      <img
                        src={
                          "http://localhost:1337" +
                          data.data.attributes.image.data.attributes.url
                        }
                      ></img>
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
