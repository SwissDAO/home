import { GridItem } from "@chakra-ui/react";
import { Grid } from "@nextui-org/react";
import { useAccount } from "wagmi";
import Content from "../components/Content";

const Membership = () => {
  const { isConnected } = useAccount();

  return isConnected ? <Content /> : (
    // <Grid templateColumns='repeat(2, 1fr)' gap={6}>
    //   <GridItem w='33%' h='10' bg='blue.500' />
    //   <GridItem w='66%' h='10' bg='blue.500' />
    // </Grid>
    <Grid>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
    </Grid>
  );
};

export default Membership;
