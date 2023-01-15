import {
  Box, Container,
  FlexProps, Heading, Stack, Text
} from '@chakra-ui/react';

const Main = (props: FlexProps) => {
  return (
    <Container as="main" role="main" direction="row" py="16" {...props}>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            The First DAO <br />for  {" "}
            <Text
              bgGradient='linear(to-r, #E31D1C, #FF0080)'
              bgClip='text'
            >
              Switzerland.³
            </Text>
          </Heading>
          <Stack textAlign={'center'}>
            <Text fontSize="2xl">
              ³ web3 spaces w/ Meetups, Workshops and Hackerhouses in real life
            </Text>
            <Text fontSize="2xl">
              ³ Community spirit: Connect, Learn and Build
            </Text>
            <Text fontSize="2xl">
              ³ Just do Web3: Take Ownership. LFG 🚀
            </Text>
          </Stack>
          <Text fontSize="2xl">
            Grab a ☕️ and read our <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/100hBiuGn7VzweSgTpl_SsJA6UjHcsh81tqXx0b2DyBk/edit#heading=h.aasa0wyt1wn'>📖</a>.
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
        </Stack>
      </Container>
    </Container>
  );
};

export default Main;
