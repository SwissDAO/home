import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from 'next/image';
import { useAccount } from "wagmi";
import Content from "../components/Content";

type GridItemProps = {
  xs: number;
  image: string;
  lead: string;
  description: string;
};

const features: GridItemProps[] = [
  {
    xs: 6,
    image: '/images/membershipcard.svg',
    lead: 'Beautiful websites',
    description: 'Make beautiful websites regardless of your design experience.'
  },
  {
    xs: 6,
    image: '/images/membershipcard.svg',
    lead: 'Beautiful websites',
    description: 'Make beautiful websites regardless of your design experience.'
  },
  {
    xs: 12,
    image: '/images/membershipcard.svg',
    lead: 'Beautiful websites',
    description: 'Make beautiful websites regardless of your design experience.'
  },
  {
    xs: 4,
    image: '/images/bronze.png',
    lead: 'Beautiful websites',
    description: 'Make beautiful websites regardless of your design experience.'
  },
  {
    xs: 4,
    image: '/images/membershipcard.svg',
    lead: 'Beautiful websites',
    description: 'Make beautiful websites regardless of your design experience.'
  },
  {
    xs: 4,
    image: '/images/membershipcard.svg',
    lead: 'Beautiful websites',
    description: 'Make beautiful websites regardless of your design experience.'
  },
];

const Membership = () => {
  const { isConnected } = useAccount();

  const GridItem = ({ image, lead, description }: Omit<GridItemProps, 'xs'>) => {
    return (
      <Card css={{ mw: "100%", height: '$8xl', p: "$12", background: 'none' }} variant="bordered" isHoverable>
        <div style={{ display: 'flex', justifyContent: 'center', height: '70%' }}>
          <Image
            height={300}
            width={200}
            src={image}
            alt=""
          />
        </div>

        <div style={{ height: '30%' }}>
          <Text h3>
            {lead}
          </Text>

          <Text>
            {description}
          </Text>
        </div>
      </Card>
    );
  };

  return isConnected ? <Content /> : (
    <Container css={{
      padding: '$md',
      '@md': {
        padding: '$4xl'
      },
    }}
    >
      <Container display="flex" justify="center">
        <Text h1 css={{ margin: 0, paddingBottom: "$xl" }}>
          Our Membership
        </Text>
      </Container>
      <Grid.Container gap={1} justify="center" direction="column" css={{
        '@xs': {
          flexDirection: 'row'
        },
      }}>
        {features.map((item, i) => (
          <Grid key={i} xs={item.xs}>
            <GridItem image={item.image} lead={item.lead} description={item.description} />
          </Grid>
        ))}
      </Grid.Container>

      <Container display="flex" justify="center" css={{ padding: "$xl" }}>
        <Button bordered>Get Started</Button>
      </Container>
    </Container>
  );
};

export default Membership;
