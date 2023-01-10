import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import MEMBERCARD_ABI from '../../../artifacts/Membercard.json';

const Content = ({ account }: { account: boolean }) => {
  const { address } = useAccount();
  const [balance, setBalance] = useState(0);

  const { data: balanceOf } = useContractRead({
    address: '0xf2fa99322a359eF5De22944c7EdFe9BCb7769426',
    abi: MEMBERCARD_ABI,
    functionName: 'balanceOf',
    args: [address],
  });

  const { config } = usePrepareContractWrite({
    address: '0xf2fa99322a359eF5De22944c7EdFe9BCb7769426',
    abi: MEMBERCARD_ABI,
    functionName: 'mint',
    args: ["Nice"]
  })

  const { data, isLoading, isSuccess, writeAsync: write } = useContractWrite(config)

  const { isSuccess: txSuccess, error: txError } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    setBalance(
      Number(ethers.utils.formatUnits(ethers.BigNumber.from(balanceOf || 0), 0))
    );
  }, [balanceOf]);

  const mint = async () => {
    try {
      await write?.()
      console.log(`Congrats, your NFT is here: https://etherscan.io/tx/${data?.hash}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container as="main" role="main" py="16">
      <Grid>
        <GridItem>
          {!account && <h2>Your Keys to the Ecosystem!</h2>}

          {account && balance <= 0 && (
            <>
              <h2>No Membership Card found!</h2>

              <h3>Mint a Membership Card here:</h3>

              <button onClick={mint}>
                Mint
              </button>
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
