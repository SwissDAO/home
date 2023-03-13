import { ArticleThumbnail } from "../../models/article";

import { Container, Row, Col, Card, Text, Grid, Spacer } from '@nextui-org/react';
import { User } from "@nextui-org/react";
import Thumbnail from "./Thumbnail";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";

// export async function getStaticPaths() {
//   const data = await request({ query: `{ allPosts { slug } }` });

//   return {
//     paths: data.allPosts.map((post) => `/posts/${post.slug}`),
//     fallback: false,
//   };
// }
const MY_QUERY = `query ThumbnailsOfAllBlogs {
  allBlogArticles {
    id
    title
    date
    author
    abstract
    category
    slug
    coverImage {
      responsiveImage {
        alt
        aspectRatio
        height
        sizes
        src
        srcSet
        title
        width
        webpSrcSet
      }
    }
  }
}
`

export async function getStaticProps() {
  const data = await request({
    query: MY_QUERY,
    // variables: { limit: 10 }
  })

  return {
    props: { data }
  }
}

interface IBlogProps {
  data: Object
}

const Blog = (props: IBlogProps) => {
  const { data } = props as { [key: string]: any };
  console.log(data.allBlogArticles)
  const blogProp = Object.keys(data)[0];
  const blogarticles = data[blogProp]
  // console.log(j)
  // const blogarticles = getAllArticles();
  return (
    <Container fluid display="flex" alignItems="center" direction="column" css={{"padding-top": "4rem", "padding-bottom": "8rem"}}>
      <h1>Blog</h1>
      <Container fluid display="flex" alignContent="center" direction="column" css={{"padding-top": "2rem" }}>
        {
          blogarticles.map((blog: ArticleThumbnail)=> {
            return(
              <Thumbnail id={blog.id} blog={blog}></Thumbnail>
              )
            })
        }
      </Container>
    </Container>
  );
};

export default Blog;