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

const descriptions = [
  {
    title: 'Unique ID',
    content: 'Distinguish from other tokens'
  },
  {
    title: 'Proof of membership',
    content: 'Proves membership in group or community'
  },
  {
    title: 'Exclusive Access',
    content: 'To private communities, events, or merchandise'
  },
  {
    title: 'Discounts',
    content: 'On products or services'
  },
  {
    title: 'Digital assets',
    content: 'Artwork, music, videos or other files'
  },
  {
    title: 'Token-based Access',
    content: 'To membership benefits or exclusive events'
  },
  {
    title: 'Transferable',
    content: 'Ownership can be transferred'
  },
  {
    title: 'Immutable',
    content: 'Recorded on blockchain, providing ownership and transfer history'
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

        <Grid.Container gap={2}>
          {descriptions.map((item, i) => (
            <Grid key={i} xs={12} sm={6} md={3} style={{ display: 'flex', textAlign: 'center', gap: '1em', paddingBottom: '2em' }} direction="column" justify="center" alignItems="center">
              <FaGithub fontSize={'2em'} />

              <Text h3 style={{ margin: 0 }}>
                {item.title}
              </Text>

              <Text>
                {item.content}
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
            <GridItem
              image={item.image}
              lead={item.lead}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid.Container>

      <Container display="flex" justify="center" alignItems="center" style={{ paddingBottom: '10em' }}>
        <Text h1>
          Get bounties on the way!
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

      <Container display="flex" direction='column' justify="center" alignItems="center" style={{ paddingBottom: '10em' }}>
        <Text h1>
          Frequently Asked Questions.
        </Text>

        <Collapse.Group bordered splitted>
          <Collapse title="What is a membership NFT card?">
            <Text>
              A membership NFT card is a non-fungible token (NFT) that
              represents membership in a club or organization.
              It can be bought and sold like other NFTs, but it also
              grants the holder certain benefits or access to exclusive
              content or experiences.
            </Text>
          </Collapse>
          <Collapse title="How does one acquire a membership NFT card?">
            <Text>
              Membership NFT cards can be acquired through a variety of means,
              such as purchasing them on a marketplace, winning them in a contest,
              or receiving them as a gift. They can also be minted by the organization
              issuing the card, and made available for purchase directly from them.
            </Text>
          </Collapse>
          <Collapse title="What are some benefits of owning a membership NFT card?">
            <Text>
              Benefits can vary depending on the organization issuing the card,
              but they may include exclusive access to content or events,
              discounts on merchandise or services, or special perks and privileges.
            </Text>
          </Collapse>
          <Collapse title="Can a membership NFT card be transferred or sold?">
            <Text>
              Yes, as NFTs, membership NFT cards can be bought,
              sold, and traded on the open market, just like any other NFT.
            </Text>
          </Collapse>
          <Collapse title="What happens to my membership NFT card if the organization that issued it goes out of business?">
            <Text>
              The value and usefulness of the membership NFT card would likely be
              affected if the organization that issued it goes out of business.
              It may still hold value as a collectible item, but the benefits and
              access associated with it would likely no longer be available.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Container>
    </Container >
  );
}
