import { Box, Flex, Grid, HStack, useColorModeValue } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <Box as="nav" p={5} boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <HStack justify="space-between">
        <Link href="/">
          <Logo width={32} height={32} />
        </Link>
        <Flex justify="end">
          <Grid templateColumns="repeat(5, 1fr)" alignItems="center">
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/events">Events</Link>
            <Link href="/membership">Membership</Link>
          </Grid>
          <ConnectButton />
        </Flex>
      </HStack>
    </Box>
  );
};

export default Navbar;
