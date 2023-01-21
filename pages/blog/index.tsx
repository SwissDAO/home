import { blogarticles } from "../../data/articles";
import { Article } from "../../models/article";

import { Container, Row, Col, Card, Text, Grid, Spacer } from '@nextui-org/react';
import { User } from "@nextui-org/react";
import Thumbnail from "./components/Thumbnail";

interface IBlogProps {}

const Blog = (props: IBlogProps) => {
  return (
    <Container fluid display="flex" justify="center" direction="row" css={{"padding-top": "4rem"}}>
      <h1>Blog</h1>
      <Container md display="flex" alignContent="center" direction="column" css={{"padding-top": "2rem"}}>
        {
          blogarticles.slice(0,2).map((blog: Article)=> {
            return(
              <Thumbnail blog={blog}></Thumbnail>
              )
            })
        }
      </Container>
    </Container>
  );
};

export default Blog;