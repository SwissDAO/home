import { blogarticles } from "../../data/articles";
import { Article } from "../../models/article";

import { Container, Row, Col, Card, Text, Grid, Spacer } from '@nextui-org/react';
import { User } from "@nextui-org/react";
import Thumbnail from "./components/Thumbnail";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps(preview: boolean) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

interface IBlogProps {}

const Blog = (props: IBlogProps) => {
  return (
    <Container fluid display="flex" alignItems="center" direction="column" css={{"padding-top": "4rem", "padding-bottom": "8rem"}}>
      <h1>Blog</h1>
      <Container fluid display="flex" alignContent="center" direction="column" css={{"padding-top": "2rem" }}>
        {
          blogarticles.map((blog: Article)=> {
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