import { blogAxios } from "@/axios";
import Card from "@/components/Blog/Card";
import Navigation from "@/components/Blog/Navigation";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import { AxiosResponse } from "axios";
import pressData from "./pressData";

async function getData() {
  return { data: pressData, meta: null };
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

export default async function Presses() {
  const { data }: { data: any | null } = await getData();

  return (
    <>
      <Breadcrumb
        pageName="Публикации"
        description="компании ООО 'Инновационные Технологии в Бизнесе'."
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
                      path="/about/press/"
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
