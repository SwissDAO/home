import { Button, Container, Grid, GridItem, Image, Input } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import MEMBERCARD_ABI from '../../../artifacts/Membercard.json';
import { Feature } from '../../../shared/components/Feature/Feature';
import FeatureList from '../../../shared/components/FeatureList/FeatureList';
import Features from '../Features';

const features = [
  {
    heading: 'Earn Badges',
    body: 'Earn a specific Badge!',
    cta: {
      label: 'Earn Badge',
      onClick: () => console.log('lol')
    }
  },
  {
    heading: 'Earn Experience',
    body: 'Get your experience verified!',
  },
  {
    heading: 'Different card levels',
    body: 'Level-up your card to silver, gold or even platinum!',
  },
];

const Content = ({ account }: { account: boolean }) => {
  const { address } = useAccount();
  const [balance, setBalance] = useState(0);

  const { data: balanceOf } = useContractRead({
    address: '0x6F650cB99aA260e74040f6BA8E0ebC8C7fb920F2',
    abi: MEMBERCARD_ABI,
    functionName: 'balanceOf',
    args: [address],
  });

  const { data: attributes } = useContractRead({
    address: '0x6F650cB99aA260e74040f6BA8E0ebC8C7fb920F2',
    abi: MEMBERCARD_ABI,
    functionName: 'holdersAttributes',
    args: [address],
  });

  const { config } = usePrepareContractWrite({
    address: '0x6F650cB99aA260e74040f6BA8E0ebC8C7fb920F2',
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
          {account && balance <= 0 && (
            <>
              <h2>No Membership Card found!</h2>

              <h3>Mint a Membership Card here:</h3>

              <Button onClick={mint}>
                Mint
              </Button>
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

              <Input
                value={(attributes as any)?.name}
                size='sm'
              />

              <FeatureList>
                <Feature feature={features[0]} />
                <Feature feature={features[1]} />
                <Feature feature={features[2]} />
              </FeatureList>
            </>
          )}
        </GridItem>
        <GridItem>
          <Image
            height={400}
            width={400}
            src="/images/membershipcard.svg"
            alt=""
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Content;
