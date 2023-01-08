import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';

type Props = {
  features: [
    {
      heading: string;
      body: string;
      reversed?: boolean;
      image?: string;
    }
  ];
};

const Features = ({ features }: Props) => {
  return (
    <SimpleGrid
      spacing={5}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {features.map((feature, i) => {
        return (
          <Flex
            key={i}
            flexDirection={feature.reversed ? 'column-reverse' : 'column'}
            gap="1em"
          >
            <Card height="500px">
              <Image
                src={feature.image || 'https://bit.ly/dan-abramov'}
                alt="Dan Abramov"
                borderRadius="lg"
                boxSize="100%"
                objectFit="cover"
              />
            </Card>
            <Card height="200px">
              <CardHeader>
                <Heading size="md">{feature.heading}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{feature.body}</Text>
              </CardBody>
            </Card>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};

export default Features;
