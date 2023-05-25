import Card from "@/components/Blog/Card";
import Navigation from "@/components/Blog/Navigation";
import newsData from "@/components/Blog/newsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/news?populate=deep");
    return res.json();
  } catch (e) {
    return { data: null, meta: null };
  }
}

export default async function News() {
  const { data, meta } = await getData();
  console.log(data);
  return (
    <>
      <Breadcrumb
        pageName="Новостная лента"
        description="Новости нашей организации."
      />

      <section className="my-20">
        <div className="max container flex justify-between gap-20 lg:flex">
          <Navigation />

          {data && (
            <div className="grid max-w-[1000px] grid-cols-1 gap-y-12">
              {data.map((data) => {
                return (
                  <div key={data.id}>
                    <Card data={data} path="/about/news/" />
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
