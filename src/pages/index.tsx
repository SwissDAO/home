import { Container, Text } from '@nextui-org/react';

export default function Home() {
  return (
    <Container
      display="flex"
      direction="column"
      justify="center"
      alignContent="center"
      css={{
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Text h1 css={{ margin: 0 }}>
        The First DAO <br />
        for
      </Text>
      <Text
        h1
        css={{
          textGradient: '90deg, #E31D1C, #FF0080',
        }}
      >
        Switzerland.³
      </Text>

      <Text h3>
        ³ web3 spaces w/ Meetups, Workshops and Hackerhouses in real life
      </Text>
      <Text h3>³ Community spirit: Connect, Learn and Build</Text>
      <Text h3>³ Just do Web3: Take Ownership. LFG 🚀</Text>

      <Text h5>
        Grab a ☕️ and read our{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/100hBiuGn7VzweSgTpl_SsJA6UjHcsh81tqXx0b2DyBk/edit#heading=h.aasa0wyt1wn"
        >
          📖
        </a>
        .
      </Text>

      {/* <Stack
              direction={'column'}
              spacing={1}
              align={'center'}
              alignSelf={'center'}>
            <Button mt="1" colorScheme='red' size='md'>
              <NextLink href="https://forms.gle/qvDhsqWsJiT9fAVi6" passHref>
                <Link target="_blank" rel="noopener noreferrer">Newsletter</Link>
              </NextLink>
            </Button>
          </Stack> */}
      {/* <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button mt="1" leftIcon={<SiDiscord />} color='#5865F2' variant='outline' colorScheme='whiteAlpha' size='md'>
              <NextLink href="https://discord.com/invite/5kvQ3Q6G4x" passHref>
                <Link target="_blank" rel="noopener noreferrer">Join Discord</Link>
              </NextLink>
            </Button>
          </Stack> */}
    </Container>
  );
}
