"use client";

import Card from "@/components/Blog/Card";
import Navigation from "@/components/Blog/Navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useRef, useState } from "react";
import qs from "qs";

import { blogAxios } from "@/axios";

export default function Conferences() {
  const titleValueInput = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<any>({
    data: null,
  });
  const [filterTags, setFilterTags] = useState<any>([]);
  const [searchParams, setSearchParams] = useState<any>(" ");
  const [data, setData] = useState<any>({
    data: null,
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const query = qs.stringify(
      {
        filters: {
          title: {
            $containsi: searchParams,
          },
          $and: [
            ...filterTags.map((tag: any) => {
              return {
                tags: {
                  text: {
                    $eqi: tag,
                  },
                },
              };
            }),
          ],
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );

    blogAxios
      .get(`conferences?${query}&sort[0]=date%3Adesc&populate=deep`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });

    blogAxios
      .get(`tags?populate=deep`)
      .then(({ data }) => {
        setTags(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [searchParams, filterTags]);

  return (
    <>
      <Breadcrumb
        pageName="Мероприятия"
        description="ООО 'ИТБ' ведет активнуют деятельность, организует и учавствует во множестве мероприятий"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="flex items-end justify-between gap-5">
            <div className="w-full">
              <label className="mb-2 block font-semibold lg:text-xl">
                Искать
              </label>
              <input
                ref={titleValueInput}
                type="text"
                placeholder="Поиск по названию..."
                className="palceholder-body-color mr-5 w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-body-color outline-none focus:border-primary dark:bg-white dark:bg-opacity-10"
              />
            </div>

            <button
              className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-md bg-primary text-white"
              onClick={() => {
                setSearchParams(titleValueInput.current?.value as string);
              }}
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="py-5">
            <p className="mb-2 font-semibold lg:text-xl">Теги</p>
            <div className="flex flex-wrap  px-2">
              {tags.data !== null ? (
                tags.data?.map(
                  ({
                    attributes,
                    id,
                  }: {
                    attributes: {
                      text: string;
                      [some: string]: any;
                    };
                    id: number;
                  }) => {
                    return (
                      <button
                        className={
                          "mb-3 mr-3 inline-flex items-center justify-center rounded-md bg-primary  px-4 py-2 text-body-color duration-300 hover:bg-opacity-100 hover:text-white " +
                          (filterTags.includes(attributes.text)
                            ? " text-white"
                            : " bg-opacity-10 ")
                        }
                        key={id}
                        onClick={function (
                          e: React.MouseEvent<HTMLButtonElement>
                        ) {
                          const btn = event?.target as HTMLElement;
                          let tags = [...filterTags];

                          if (filterTags.includes(attributes.text)) {
                            const idDeleteTag = tags.indexOf(attributes.text);
                            tags.splice(idDeleteTag, 1);
                          } else {
                            tags.push(btn.innerText);
                          }

                          setFilterTags([...tags]);
                        }}
                      >
                        {attributes.text}
                      </button>
                    );
                  }
                )
              ) : (
                <p className=" text-lg font-bold lg:text-xl">Загрузка...</p>
              )}
            </div>
          </div>
        </div>

        <div className="max container flex justify-between gap-20 lg:flex">
          <Navigation />

          {data.data && (
            <div className="grid max-w-[1000px] grid-cols-1 gap-y-12">
              {data.data.map((data: any) => {
                return (
                  <div key={data.id}>
                    <Card
                      id={data.id}
                      data={data.attributes}
                      path="/about/conferences/"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
