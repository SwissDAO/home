import {
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  Row,
  Text,
} from '@nextui-org/react';
import {
  IdentificationIcon,
  CheckCircleIcon,
  KeyIcon,
  HeartIcon,
  LockClosedIcon,
  CubeTransparentIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useAccount } from 'wagmi';
import Content from '@/components/membercard/content';

type GridItemProps = {
  xs: number;
  image: string;
  lead: string;
  description: string;
  tier?: 'bronze' | 'silver' | 'gold';
};

const descriptions = [
  {
    title: 'Unique ID',
    content: 'Every swissDAO member is unique',
    icon: <IdentificationIcon style={{ height: 40 }}></IdentificationIcon>,
  },
  {
    title: 'Proof of membership',
    content: 'Proves membership in the community',
    icon: <CheckCircleIcon style={{ height: 40 }}></CheckCircleIcon>,
  },
  {
    title: 'Exclusive Access',
    content: 'To events, job opportunities and revenue',
    icon: <KeyIcon style={{ height: 40 }}></KeyIcon>,
  },

  {
    title: 'Soulbound',
    content: 'Ownership cannot transferred',
    icon: <HeartIcon style={{ height: 40 }}></HeartIcon>,
  },
  {
    title: 'Immutable',
    content: 'Recorded on blockchain',
    icon: <LockClosedIcon style={{ height: 40 }}></LockClosedIcon>,
  },
  {
    title: 'Transparency',
    content: 'Contribution history of every member',
    icon: <CubeTransparentIcon style={{ height: 40 }}></CubeTransparentIcon>,
  },
];

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
];

export default function Membership() {
  const { isConnected } = useAccount();
  const cardRef = useRef<HTMLDivElement>(null);

  const GridItem = ({
    image,
    lead,
    description,
  }: Omit<GridItemProps, 'xs'>) => {
    return (
      <Card
        css={{
          mw: '100%',
          height: '$8xl',
          p: '$12',
          background: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        variant="bordered"
        isHoverable
      >
        <div
          style={{
            height: '100%',
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <Text>All your contribution stored</Text>

            <Text h3>Give your brain superpowers</Text>
            <Text>
              Mirror the way your mind works by associating notes through
              backlinks. Reflect builds you a second brain that you can
              reference anytime.
            </Text>
          </div>

          <div>
            <Row>
              <FaGithub fontSize={'2em'} />
              <Text>
                Your thoughts connected Backlink your notes to make everything
                easily searchable.
              </Text>
            </Row>

            <Row>
              <FaGithub fontSize={'2em'} />
              <Text>
                Frictionless thought capture Record your ideas and to-do&apos;s
                easily, so you never miss a thing.
              </Text>
            </Row>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} height={'100%'} width={'60%'} alt="" />
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
      <Container
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
        style={{ paddingBottom: '10em' }}
      >
        <Text h1 style={{ marginBottom: '3rem' }}>
          swissDAO Membership{' '}
        </Text>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/images/membership.svg`} alt="" />
      </Container>

      <Container
        display="flex"
        justify="center"
        alignItems="center"
        style={{ paddingBottom: '10em' }}
      >
        <Text h1 style={{ marginBottom: '3rem' }}>
          Membership Features
        </Text>

        <Grid.Container gap={2}>
          {descriptions.map((item, i) => (
            <Grid
              key={i}
              xs={12}
              sm={6}
              md={4}
              xl={2}
              style={{
                display: 'flex',
                textAlign: 'center',
                gap: '1em',
                paddingBottom: '2em',
              }}
              direction="column"
              justify="center"
              alignItems="center"
            >
              {item.icon}

              <Text h3 style={{ margin: 0 }}>
                {item.title}
              </Text>

              <Text>{item.content}</Text>
            </Grid>
          ))}
        </Grid.Container>
      </Container>

      {/* <Grid.Container
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
            <GridItem
              image={item.image}
              lead={item.lead}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid.Container> */}

      <Container
        display="flex"
        justify="center"
        alignItems="center"
        style={{ paddingBottom: '10em' }}
      >
        <Text h1 style={{ marginBottom: '3rem' }}>
          Collect XP and upgrade your NFT.
        </Text>

        <Grid.Container gap={2}>
          <Grid xs={12}>
            <Card
              ref={cardRef}
              css={{ mw: '100%', height: '$8xl', p: '$12', background: 'none' }}
              isHoverable
            >
              <Image
                src={`/images/tiers.svg`}
                alt=""
                fill
                style={{ objectFit: 'fill' }}
              />
            </Card>
          </Grid>
        </Grid.Container>
      </Container>

      <Container
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
        style={{ paddingBottom: '10em' }}
      >
        <Text h1 style={{ marginBottom: '3rem' }}>
          Frequently Asked Questions.
        </Text>

        <Collapse.Group bordered splitted>
          <Collapse title="What is a membership NFT?">
            <Text>
              A membership NFT is a non-fungible token (NFT) that represents
              membership in the swissDAO community. Our membership NFT is
              soulbound, meaning it&apos;s non-transferable. It grants the
              holder certain benefits or access to exclusive content or
              experiences.
            </Text>
          </Collapse>
          <Collapse title="How does one acquire a swissDAO membership NFT?">
            <Text>
              The membership NFT can only be acquired by attending a swissDAO
              event or contributing to swissDAO. We think of the membership NFT
              as a way to acknowledge and measure contribution to our community.
            </Text>
          </Collapse>
          <Collapse title="What are some benefits of owning a swissDAO membership NFT?">
            <Text>
              swissDAO membership NFTs are dynamic soulbound NFTs. The NFT keeps
              track of contribution with a property we call experience points
              (XP). With our education program, co-working, hacking and
              workshops members can earn XPs. Collected XPs allow members to
              find co-founders and find a job.
            </Text>
          </Collapse>
          <Collapse title="Can a membership NFT be transferred or sold?">
            <Text>
              No. Our membership NFT is soulbound, meaning it&apos;s
              non-transferable. It reflects your relationship to the community.
              Your relationship to your mother can also not be traded, right?
            </Text>
          </Collapse>
          <Collapse title="Bronze, Silver and Gold, really? Haven't you thought of cooler level names?">
            <Text>
              Don&apos;t worry, we agree but are still in heavy development of
              our platform. Why don&apos;t you come to our event and you share
              your ideas with us{' '}
              <span style={{ textDecoration: 'underline' }}>
                <Link href={'https://www.meetup.com/swissdao/'}>
                  meetup.com/swissdao/
                </Link>
              </span>
            </Text>
          </Collapse>
        </Collapse.Group>
      </Container>
    </Container>
  );
}
