import Card from "@/src/components/Blog/Card";
import Navigation from "@/src/components/Blog/Navigation";
import SingleBlog from "@/src/components/Blog/SingleBlog";
import blogData from "@/src/components/Blog/blogData";
import Breadcrumb from "@/src/components/Common/Breadcrumb";

const News = () => {
  return (
    <>
      <Breadcrumb
        pageName="Новостная лента"
        description="Новости нашей организации."
      />

      <section className="my-20">
        <div className="max container flex justify-between gap-20 lg:flex">
          <Navigation />

          <div className="grid max-w-[1000px] grid-cols-1 gap-y-12">
            {blogData.map((blog) => {
              return <Card key={blog.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
