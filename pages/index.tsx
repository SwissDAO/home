import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import Content from './components/Content';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [account, setAccount] = useState(false);

  // https://github.com/vercel/next.js/discussions/35773 -> 🙂 smh
  // useEffect(
  //   () => setAccount(isConnected),

  //   [isConnected]
  // );

  return (
    <Flex direction="column" flex="1">
      <Navbar />
      {isConnected ? <Content /> : <Main />}
      <Footer />
    </Flex>
  );
}
