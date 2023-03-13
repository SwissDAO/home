import { Container, Card, Text, Row, User } from "@nextui-org/react";
import { ArticleThumbnail } from "../../models/article";
import Image from "next/image";
import { Image as DatoCMS_Responsive_Image} from "react-datocms"
import Link from "next/link";

interface IThumbnailProps {
    id: string
    blog: ArticleThumbnail
}

const Thumbnail = (props: IThumbnailProps) => {
    const { blog } = props;
    // get height of image via cms, maybe better than just 300px

    return (
        <div style={{marginBottom: "2rem", marginTop: "2rem"}}>
            <Link href={`/blog/${blog.slug}`} >
                <Card css={{ mw: "600px", minWidth: "375px",  "border-radius": "0.35rem", "padding": "2rem" }}>
                    <Card.Body>
                        <Card.Header>
                            <Container fluid css={{ "min-height": "100px", "objectFit": 'cover', "position": "relative","aspectRatio": "16/10"}}>
                                <DatoCMS_Responsive_Image data={blog.coverImage.responsiveImage}/>
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
            </Link>
        </div>
    )
}

export default Thumbnail;