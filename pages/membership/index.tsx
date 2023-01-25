import { Button, Card, Collapse, Container, Grid, Row, Text } from '@nextui-org/react';
import Image from 'next/image';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useAccount } from 'wagmi';
import Content from '../../shared/components/Content';

type GridItemProps = {
  xs: number;
  image: string;
  lead: string;
  description: string;
  tier?: 'bronze' | 'silver' | 'gold';
};

const features: GridItemProps[] = [
  {
    xs: 12,
    image: '/images/membershipcard2.svg',
    lead: 'Beautiful websites',
    description:
      'Make beautiful websites regardless of your design experience.',
  },
  {
    xs: 12,
    image: '/images/membershipcard3.svg',
    lead: 'Beautiful websites',
    description:
      'Make beautiful websites regardless of your design experience.',
  },
  {
    xs: 12,
    image: '/images/membershipcard5.svg',
    lead: 'Beautiful websites',
    description:
      'Make beautiful websites regardless of your design experience.',
  },
  // {
  //   xs: 4,
  //   image: '/images/bronze.png',
  //   lead: 'Beautiful websites',
  //   description:
  //     'Make beautiful websites regardless of your design experience.',
  //   tier: 'bronze',
  // },
  // {
  //   xs: 4,
  //   image: '/images/membershipcard.svg',
  //   lead: 'Beautiful websites',
  //   description:
  //     'Make beautiful websites regardless of your design experience.',
  //   tier: 'silver',
  // },
  // {
  //   xs: 4,
  //   image: '/images/membershipcard.svg',
  //   lead: 'Beautiful websites',
  //   description:
  //     'Make beautiful websites regardless of your design experience.',
  //   tier: 'gold',
  // },
];

export default function Membership() {
  const { isConnected } = useAccount();
  const cardRef = useRef<HTMLDivElement>(null);

  const GridItem = ({
    image,
    lead,
    description,
  }: Omit<GridItemProps, 'xs'>) => {
    // return (
    //   <Card
    //     css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none' }}
    //     variant="bordered"
    //     isHoverable
    //   >
    //     <div
    //       style={{ display: 'flex', justifyContent: 'center', height: '70%' }}
    //     >
    //       <Image height={300} width={200} src={image} alt="" />
    //     </div>

    //     <div style={{ height: '30%' }}>
    //       <Text h3>{lead}</Text>

    //       <Text>{description}</Text>
    //     </div>
    //   </Card>
    // );

    return (
      <Card
        css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        variant="bordered"
        isHoverable
      >
        <div style={{ height: '100%', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <div>
            <Text>All your notes, connected</Text>

            <Text h3>Give your brain superpowers</Text>
            <Text>
              Mirror the way your mind works by associating notes through backlinks. Reflect builds you a second brain that you can reference anytime.
            </Text>
          </div>

          <div>
            <Row>
              <FaGithub fontSize={'2em'} />
              <Text>
                Your thoughts connected
                Backlink your notes to make everything easily searchable.
              </Text>
            </Row>

            <Row>
              <FaGithub fontSize={'2em'} />
              <Text>
                Frictionless thought capture
                Record your ideas and to-do’s easily, so you never miss a thing.
              </Text>
            </Row>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} height={'100%'} width={'60%'} alt="" />
      </Card >
    );
  };

  const TierItem = ({ tier }: { tier: string }) => {
    return (
      <Card
        ref={cardRef}
        css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none' }}
        variant="bordered"
        isHoverable
      >
        <Image
          src={`/images/${tier}.png`}
          alt=""
          fill
          style={{ objectFit: 'fill' }}
        />
      </Card>
    );
  };

  return isConnected ? (
    <Content />
  ) : (
    <Container
      css={{
        padding: '$md',
        '@md': {
          padding: '$3xl',
        },
      }}
    >
      <Container display="flex" direction='column' justify="center" alignItems="center" style={{ paddingBottom: '10em' }}>
        <Text h1>
          Our Membership. <br />
          A Special Card.
        </Text>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/membership.svg`}
          alt=""
        />
      </Container>

      <Container display="flex" justify="center" alignItems="center" style={{ paddingBottom: '10em' }}>
        <Text h1>
          What&apos;s shipped?!.
        </Text>

        {/* TODO Real Features  */}
        <Grid.Container gap={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <Grid key={i} xs={12} sm={6} md={3} style={{ display: 'flex', gap: '1em', paddingBottom: '2em' }} direction="column" justify="center" alignItems="center">
              <FaGithub fontSize={'2em'} />

              <Text h3 style={{ margin: 0 }}>
                Built for speed
              </Text>

              <Text>
                Instantly sync your notes across devices.
              </Text>
            </Grid>
          ))}
        </Grid.Container>
      </Container>

      <Grid.Container
        gap={5}
        justify="center"
        direction="column"
        style={{ paddingBottom: '10em' }}
        css={{
          '@xs': {
            flexDirection: 'row',
            width: '100%',
          },
        }}
      >
        {features.map((item, i) => (
          <Grid key={i} xs={item.xs}>
            {/* {item.xs === 4 ? (
              <TierItem tier={item.tier || 'bronze'} />
            ) : ( */}
            <GridItem
              image={item.image}
              lead={item.lead}
              description={item.description}
            />
            {/* )} */}
          </Grid>
        ))}
      </Grid.Container>

      <Container display="flex" justify="center" alignItems="center" style={{ paddingBottom: '10em' }}>
        <Text h1>
          Get bounties on the way!
        </Text>

        {/* TODO Real Features  */}
        <Grid.Container gap={2}>
          <Grid xs={12} md={4}>
            <Card
              ref={cardRef}
              css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none' }}
              variant="bordered"
              isHoverable
            >
              <Image
                src={`/images/${'bronze'}.png`}
                alt=""
                fill
                style={{ objectFit: 'fill' }}
              />
            </Card>
          </Grid>

          <Grid xs={12} md={4}>
            <Card
              ref={cardRef}
              css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none' }}
              variant="bordered"
              isHoverable
            >
              <Image
                src={`/images/${'bronze'}.png`}
                alt=""
                fill
                style={{ objectFit: 'fill' }}
              />
            </Card>
          </Grid>

          <Grid xs={12} md={4}>
            <Card
              ref={cardRef}
              css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none' }}
              variant="bordered"
              isHoverable
            >
              <Image
                src={`/images/${'bronze'}.png`}
                alt=""
                fill
                style={{ objectFit: 'fill' }}
              />
            </Card>
          </Grid>
        </Grid.Container>
      </Container>

      <Container display="flex" direction='column' justify="center" alignItems="center" style={{ paddingBottom: '10em' }}>
        <Text h1>
          Frequently Asked Questions.
        </Text>

        <Collapse.Group bordered splitted>
          <Collapse title="Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option B">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Option C">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Container>

      <Container display="flex" justify="center" css={{ padding: '$xl' }}>
        <Button bordered>Get Started</Button>
      </Container>
    </Container >
  );
}
