import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import styled from 'styled-components';
import Spline from "@splinetool/react-spline";
import { useAccount, useBalance, useContractRead } from 'wagmi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MEMBERCARD_ABI from '../artifacts/Membercard.json';
import { ethers } from 'ethers';

const Container = styled.div`
  min-height: 100vh;
  padding: 8em 2em;
  flex: 1;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  padding: 0 2em;
  width: 100%;
  height: 100px;
`

const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  grid-template-columns: 50% 50%;
`

const GridItem = styled.div``

export default function Home() {
  const { isConnected, address } = useAccount();

  const [account, setAccount] = useState(false);
  const [balance, setBalance] = useState(0)

  const { data: balanceOf } = useContractRead({
    address: '0x4772b8ce690cEC47c22f6B2FE1cFD6F3E6Db29ad',
    abi: MEMBERCARD_ABI,
    functionName: 'balanceOf',
    args: [address],
  });

  // https://github.com/vercel/next.js/discussions/35773 -> 🙂 smh
  useEffect(() => {
    setAccount(isConnected);
    setBalance(Number(ethers.utils.formatUnits(ethers.BigNumber.from(balanceOf || 0), 0)));
  }, [balanceOf, isConnected])

  return (
    <>
      <Header>
        <h1>
          🇨🇭swissDAO🏔️ Membership Card
        </h1>
        <ConnectButton />
      </Header>

      <Container>
        <Head>
          <title>🇨🇭swissDAO🏔️ - Membership Card</title>
          <meta name="description" content="swissDAO Membership Card" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid>
          <GridItem>
            {!account && (
              <h2>Your Keys to the Ecosystem!</h2>
            )}

            {account && balance <= 0 && (
              <>
                <h2>No Membership Card found!</h2>

                <h3>Mint a Membership Card here:</h3>

                <button>Mint</button>
              </>
            )}

            {account && balance > 0 && (
              <>
                <h2>Your Membership Card:</h2>

                <h3>Skills</h3>
                <ul>
                  <li>Solidity: 100</li>
                  <li>DAO: 50</li>
                </ul>
              </>
            )}

          </GridItem>
          <GridItem>
            <Image height={400} width={400} src="/videos/SwissDAO_Sneakpeak.gif" alt="" />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
