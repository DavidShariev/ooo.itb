"use client";

import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { usePathname } from "next/navigation";
import remarkGfm from "remark-gfm";
import { blogAxios } from "@/axios";
import Image from "next/image";

const Page = () => {
  const [data, setData] = useState<any>({
    data: null,
  });
  const [tags, setTags] = useState<any>({
    data: null,
  });
  const [isLoading, setLoading] = useState(false);

  const path = usePathname();
  const id = path.split("/").reverse()[0];

  useEffect(() => {
    setLoading(true);
    blogAxios(`conferences/${id}?populate=deep`)
      .then((data) => {
        console.log(data);
        setData(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });

    blogAxios(`tags?populate=deep`)
      .then((data) => {
        setTags(data.data);
      })
      .catch((e) => {
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
  if (data.data !== null) {
    return (
      <>
        <section className=" pb-[120px] pt-[150px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <p className=" mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    {data.data.attributes.title}
                  </p>

                  <div>
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

                    <div className="items-start justify-between sm:flex">
                      <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color">
                          Теги:
                        </h5>
                        <div className="flex flex-wrap">
                          {data.data.attributes.tags.data.map(
                            ({
                              attributes,
                              id,
                            }: {
                              attributes: any;
                              id: any;
                            }) => {
                              return (
                                <div key={id}>
                                  <TagButton
                                    text={attributes.text}
                                    href={`/about/conferences`}
                                  />
                                </div>
                              );
                            }
                          )}
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
                        {data.data.attributes.body as string}
                      </ReactMarkdown>
                    </article>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="mb-5 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                  <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Вебинары:
                  </h3>
                  <ul className="p-8">
                    <li className="mb-4 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                      <RelatedPost
                        title="Демонстрация Security Capsule SIEM"
                        image="/images/blog/post-01.jpg"
                        slug="#"
                        date="17 май 2025"
                        time="среда 14:00 - 15:00"
                      />
                    </li>
                  </ul>
                </div>

                <div className="mb-5 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
                  <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Другие теги:
                  </h3>
                  <div className="flex flex-wrap px-8 py-6">
                    {tags.data !== null ? (
                      tags.data
                        .slice(0, 10)
                        .map(
                          ({
                            attributes,
                            id,
                          }: {
                            attributes: any;
                            id: any;
                          }) => {
                            return (
                              <div key={id}>
                                <TagButton
                                  text={attributes.text}
                                  href={`/about/conferences`}
                                />
                              </div>
                            );
                          }
                        )
                    ) : (
                      <h1>Загрузка...</h1>
                    )}
                  </div>
                </div>

                <NewsLatterBox />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Page;
