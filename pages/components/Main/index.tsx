import { Container, FlexProps, Text } from '@chakra-ui/react';
import { Feature } from '../../../shared/components/Feature/Feature';
import FeatureList from '../../../shared/components/FeatureList/FeatureList';

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
      <Text fontSize="3xl">Features</Text>

      <FeatureList>
        <Feature feature={features[0]} />
        <Feature feature={features[1]} />
        <Feature feature={features[2]} />
      </FeatureList>
    </Container>
  );
};

export default Main;
