import './Blog.css'
import BlogItem from './BlogItem';
function Blog() {
    return (
      <section id="blog">
        <div class="container">
          <div class="section-info">
            <h2 class="section-title">BLOG</h2>
            <p class="section-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="row">
            <BlogItem
          </div>
        </div>
      </section>
    );
}
export default Blog 