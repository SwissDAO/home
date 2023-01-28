import Link from "next/link";
import { getAllSlugs, getPostData } from "../../lib/articles";
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next'
import { Article } from "../../models/article";

export const getStaticPaths = () => {
    const paths = getAllSlugs();
    return {
      paths,
      fallback: false,
    };
};

type IBlogPost = {
    blog: Article
}
  
export const getStaticProps: GetStaticProps<IBlogPost> = async (context) => {
    console.log(context)
    const path = context.params?.slug as string
    console.log(path)
    // this function always returns an article (maybe also with empty strings, if path is empty, the BlogPost Page handles this, not yet implemented )
    const article = getPostData(path)
    return {
        props: { blog: article }
    }
}


const BlogPost: NextPage<IBlogPost> = (props: IBlogPost) => {
    const { blog } = props;
    return (
        <div>
            <div style={{ maxWidth: "600px", marginTop: "20px" }}>
                {/* <Image src={postData.coverImage} alt={postData.title} layout="fill" /> */}
                <h1>{blog.title}</h1>
                <p>
                {blog.author} / {blog.date}
                </p>
                <p>{blog.content}</p>
                <div style={{ marginTop: "50px" }}>
                <Link href="/blog">
                    <p>⬅️&nbsp;&nbsp;Go back</p>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;