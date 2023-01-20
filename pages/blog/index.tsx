import { blogarticles } from "../../data/articles";
import { Article } from "../../models/article";


interface IBlogProps {}

const Blog = (props: IBlogProps) => {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {
          blogarticles.map((blog: Article)=> {
            return (<div>{blog.title}</div>)
            })
        }
      </div>
    </div>
  );
};

export default Blog;