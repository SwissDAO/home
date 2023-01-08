import { Container, FlexProps, Text } from '@chakra-ui/react';
import Features from '../Features';

const features = [
  {
    heading: 'Access Control',
    body: 'Get access to community',
  },
  {
    heading: 'Access Control',
    body: 'Get access to community',
    reversed: true,
  },
  {
    heading: 'Access Control',
    body: 'Get access to community',
  },
];

const Main = (props: FlexProps) => {
  return (
    <Container as="main" role="main" direction="row" py="16" {...props}>
      {/* <Container flex="1">
        Main
      </Container> */}
      <Text fontSize="3xl">Features</Text>
      <Features features={features} />
    </Container>
  );
};

export default Main;
