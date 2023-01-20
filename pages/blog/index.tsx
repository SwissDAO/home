import { blogarticles } from "../../data/articles";
import { Article } from "../../models/article";

import { Container, Row, Col, Card, Text, Grid, Spacer } from '@nextui-org/react';
import { User } from "@nextui-org/react";

interface IBlogProps {}

const Blog = (props: IBlogProps) => {
  return (
    <Container fluid display="flex" justify="center" direction="row" css={{"padding-top": "4rem"}}>
      <h1>Blog</h1>
      <Container md display="flex" alignContent="center" direction="column" css={{"padding-top": "2rem"}}>
        {
          blogarticles.slice(0,2).map((blog: Article)=> {
            return(
              <Card css={{ mw: "600px", "margin-top": "2rem", "border-radius": "0.35rem", "padding": "2rem" }}>
                <Card.Body>
                  {/* <Card.Header>
                  image
                  </Card.Header> */}
                  <Card.Body>
                    <Text h3>{blog.title}</Text>
                    <Row>
                      <Text h5 css={{"padding-right": "0.75rem"}}>{blog.category}</Text>
                      <Text h5>{blog.date}</Text>
                    </Row>
                    <Text>
                      {blog.abstract}
                    </Text>
                  </Card.Body>
                  <User
                    css={{"padding-top": "1rem"}}
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name={blog.author}
                    description="DAO Core"
                  />
                </Card.Body>
              </Card>)
            })
        }
      </Container>
    </Container>
  );
};

export default Blog;