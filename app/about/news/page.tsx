import { blogAxios } from "@/axios";
import Card from "@/components/Blog/Card";
import Navigation from "@/components/Blog/Navigation";

import Breadcrumb from "@/components/Common/Breadcrumb";

import newsData from "./newsData";

async function getData() {
  // try {
  //   const data = await blogAxios
  //     .get("news?sort[0]=date%3Adesc&populate=deep")
  //     .then((data) => {
  //       return data.data;
  //     })
  //     .catch((e) => {
  //       return { data: null, meta: null };
  //     });

  //   return data;
  // } catch (e) {
  //   return { data: null, meta: null };
  // }

  return { data: newsData, meta: null };
}

type new_data = {
  id: number;
  attributes: {
    title: string;
    body: string;
    date: string;
    createAt: string;
    updatedAt: string;
    image: {
      name: string;
      src: string;
      [str: string]: any;
    };
  };
};

export default async function News() {
  const { data }: { data: any | null } = await getData();

  return (
    <>
      <Breadcrumb
        pageName="Новостная лента"
        description="Новости организации."
      />
      <section id="news" className="py-16 md:py-20 lg:py-24">
        <div className="max container flex justify-between gap-20 lg:flex">
          <Navigation />

          {data && (
            <div className="grid max-w-[1000px] grid-cols-1 gap-y-12">
              {data.map((data: any) => {
                return (
                  <div key={data.id}>
                    <Card
                      data={data.attributes}
                      id={data.id}
                      path="/about/news/"
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
