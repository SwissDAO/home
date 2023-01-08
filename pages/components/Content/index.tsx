import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import MEMBERCARD_ABI from '../../../artifacts/Membercard.json';

const Content = ({ account }: { account: boolean }) => {
  const { address } = useAccount();
  const [balance, setBalance] = useState(0);

  const { data: balanceOf } = useContractRead({
    address: '0x4772b8ce690cEC47c22f6B2FE1cFD6F3E6Db29ad',
    abi: MEMBERCARD_ABI,
    functionName: 'balanceOf',
    args: [address],
  });

  useEffect(() => {
    setBalance(
      Number(ethers.utils.formatUnits(ethers.BigNumber.from(balanceOf || 0), 0))
    );
  }, [balanceOf]);

  return (
    <Container as="main" role="main" py="16">
      <Grid>
        <GridItem>
          {!account && <h2>Your Keys to the Ecosystem!</h2>}

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
          <Image
            height={400}
            width={400}
            src="/videos/SwissDAO_Sneakpeak.gif"
            alt=""
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Content;
