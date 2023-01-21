import { Container, Card, Text, Row, User } from "@nextui-org/react";
import { Article } from "../../../models/article";
import Image from "next/image";

interface IThumbnailProps {
    blog: Article
}

const Thumbnail = (props: IThumbnailProps) => {
    const { blog } = props;

    // get height of image via cms
    
    return (
        <Card css={{ mw: "600px", "margin-top": "2rem", "border-radius": "0.35rem", "padding": "2rem" }}>
            <Card.Body>
            <Card.Header>
                <Container fluid css={{ "height": "300px", "objectFit": 'cover', "position": "relative"}}>
                    <Image src={blog.coverImage} fill alt={blog.title}></Image>
                </Container>
            </Card.Header>
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
        </Card>
    )
}

export default Thumbnail;