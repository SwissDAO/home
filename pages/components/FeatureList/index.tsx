import { SimpleGrid } from '@chakra-ui/react';

type Props = {};

const FeatureList = ({ children }: { children: React.ReactNode }) => {
  return (
    <SimpleGrid
      spacing={5}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {children}
    </SimpleGrid>
  );
};

export default FeatureList;
