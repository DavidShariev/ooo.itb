import Card from "@/components/Blog/Card";
import Navigation from "@/components/Blog/Navigation";
import SingleBlog from "@/components/Blog/SingleBlog";
import pressData from "@/components/Blog/pressData";
import Breadcrumb from "@/components/Common/Breadcrumb";

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/presses?populate=deep");
    return res.json();
  } catch (e) {
    console.log(e.message);
    return { data: null, meta: null };
  }
}

export default async function Press() {
  const { data, meta } = await getData();
  console.log(data);

  return (
    <>
      <Breadcrumb
        pageName="Публикации"
        description="ООО 'ИТБ' ведет активнуют деятельность, организует и учавствует во множестве мероприятий"
      />

      <section className="my-20">
        <div className="max container flex justify-between gap-20 lg:flex">
          <Navigation />

          {data && (
            <div className="grid max-w-[1000px] grid-cols-1 gap-y-12">
              {data.map((data) => {
                return (
                  <div key={data.id}>
                    <Card data={data} path="/about/press/" />;
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
