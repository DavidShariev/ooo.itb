import SectionTitle from "../Common/SectionTitle";
import Card from "./Card";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Мероприятия"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid  grid-cols-1 gap-y-20">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
