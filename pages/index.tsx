import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Content } from './components/Content';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar';

export default function Home() {
  const { isConnected } = useAccount();
  const [account, setAccount] = useState(false);

  // https://github.com/vercel/next.js/discussions/35773 -> 🙂 smh
  useEffect(() => {
    setAccount(isConnected);
  }, [isConnected])

  return (
    <Flex direction="column" flex="1">
      <Navbar />
      {account ? (
        <Content account={account} />
      ) : (
        <Main />
      )}
      <Footer />
    </Flex>
  )
}
