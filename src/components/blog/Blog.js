import "./Blog.css";
import BlogItem from "./BlogItem";
function Blog() {
  let blogs = [
    {
      blogImage: "",
      blogTitle: "post title 1",
      blogInfo: "(1)Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      blogAuthor: "hk2023",
      blogTime: "5",
    },
    {
      blogImage: "",
      blogTitle: "post title 2",
      blogInfo: "(2)Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      blogAuthor: "ali karimi",
      blogTime: "15",
    },
    {
      blogImage: "",
      blogTitle: "post title 3",
      blogInfo: "(3)Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      blogAuthor: "milad bahrami",
      blogTime: "10",
    },
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
      div
    </section>
  );
}
export default Blog;
