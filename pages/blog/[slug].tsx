import Link from "next/link";
// import { getAllSlugs, getPostData } from "../../lib/articles";
import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next'
import { Article, ArticleThumbnail, StructuredTextContent } from "../../models/article";
import { request } from "../../lib/datocms";
import { APP_PATHS_MANIFEST } from "next/dist/shared/lib/constants";
import { Image as DatoCMS_Responsive_Image, StructuredText, RenderBlockContext } from "react-datocms"
import { MyCustomBlockRenderer } from "./CustomBlockRenderer";


const SLUG_QUERY = `query SlugsOfAllBlogs {
    allBlogArticles {
      slug
    }
}`

interface IArticleWithOnlySlug {
    slug: string
}

export const getStaticPaths = async () => {
    const slugQueryResult = await request({
        query: SLUG_QUERY,
        // variables: { limit: 10 }
    })

    let paths: string[] = [];
    slugQueryResult.allBlogArticles.map((article: IArticleWithOnlySlug) => paths.push(`/blog/${article.slug}`))
    return {
      paths,
      fallback: false,
    };
};

type IBlogArticle = {
    blog: Article
}

const ARTICLE_QUERY = `query BlogArticle($slug: String) {
    blogArticle(filter: {slug: {eq: $slug}}) {
      author
      blogText {
        value
        links
        blocks {
          __typename
          image {
            responsiveImage {
              aspectRatio
              src
              srcSet
              sizes
              height
              title
              webpSrcSet
              width
            }
            id
            filename
            url
          }
          id
        }
      }
      blogAssets {
        responsiveImage {
          alt
          aspectRatio
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
      category
      date
      slug
      id
      title
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

export const getStaticProps: GetStaticProps<IBlogArticle> = async (context) => {
    const slug = context.params?.slug as string
    const data = await request({
        query: ARTICLE_QUERY,
        variables: { slug: slug}
    });
    
    
    // it's .blogarticle because of the query returns a object called blogArticle
    return {
        props: {
            blog: data.blogArticle
        }
    }
    
    // // this function always returns an article (maybe also with empty strings, if path is empty, the BlogPost Page handles this, not yet implemented )
    // const article = getPostData(path)
    // return {
    //     props: { blog: article }
    // }
}

// const renderBlock = (context: RenderBlockContext<StructuredTextContent>) => {
//     switch (context.node.type) {
//       case 'block':
//         return <MyCustomBlockRenderer key={context.node.id} {...context} />;
//       default:
//         return null;
//     }
// };



// watch this tutorial https://www.youtube.com/watch?v=aKZJnqLialw
// learn how to setup datamodel
// how to add data
// how to retrieve data and display them in methods 

const BlogArticle: NextPage<IBlogArticle> = (props: IBlogArticle) => {
    const { blog } = props;
    // console.log(blog.blogText.value.document)
    // console.log(blog.blogText)
    // console.log(blog.blogText.value.document.children)
    for (let block in blog.blogText.blocks) {}
    const someBlock = blog.blogText.blocks?.at(0)
    return (
        <div>
            <div style={{ maxWidth: "600px", marginTop: "20px" }}>
                <DatoCMS_Responsive_Image data={blog.coverImage.responsiveImage} />
                <h1>{blog.title}</h1>
                <p>{blog.author} / {blog.date}</p>
                {/* <p>{blog.blogText.}</p> */}
                
                <StructuredText
                    data={blog.blogText}
                    // data={someBlock}
                    
                    renderBlock={({ record }) => {
                        // console.log(record)
                        
                        // console.log(record.image.responsiveImage.src)
                        console.log(record.__typename)
                        // return <div></div>
                        switch (record.__typename) {
                          
                          case "ImageRecord":
                            console.log("here")
                            return <img src={record.image.responsiveImage.src} alt={record.image.alt} />;
                          default:
                            return null;
                        }
                      }}
                />
                <div style={{ marginTop: "50px" }}>
                  <Link href="/blog">
                      <p>⬅️&nbsp;&nbsp;Go back</p>
                  </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogArticle;