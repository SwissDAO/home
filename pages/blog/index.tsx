import { blogarticles } from "../../data/articles";
import { Article } from "../../models/article";

import { Container, Row, Col, Card, Text, Grid, Spacer } from '@nextui-org/react';
import { User } from "@nextui-org/react";
import Thumbnail from "./components/Thumbnail";

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