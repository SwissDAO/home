import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import { CONFIG } from '../../../shared/const';
import Feature from '../Feature';
import FeatureList from '../FeatureList';
import Mint from '../Mint';

const features = [
  {
    heading: 'Earn Badges',
    body: 'Earn a specific Badge!',
    cta: {
      label: 'Earn Badge',
      onClick: () => console.log('lol'),
    },
    image: '/images/membershipcard2.svg',
  },
  {
    heading: 'Earn Experience',
    body: 'Get your experience verified!',
    image: '/images/membershipcard3.svg',
  },
  {
    heading: 'Different card levels',
    body: 'Level-up your card to silver, gold or even platinum!',
    image: '/images/membershipcard4.svg',
  },
];

const Content = () => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState(0);

  const { data: balanceOf } = useContractRead({
    ...CONFIG,
    functionName: 'balanceOf',
    args: [address],
  });

  const { data: attributes } = useContractRead({
    ...CONFIG,
    functionName: 'holdersAttributes',
    args: [address],
  });

  useEffect(() => {
    setBalance(
      Number(ethers.utils.formatUnits(ethers.BigNumber.from(balanceOf || 0), 0))
    );
  }, [balanceOf]);

  const membershipDetails = attributes as any;

  console.log(balance);

  return (
    <>
      {isConnected &&
        <Container as="main" role="main" py="16">
          <Grid>
            <GridItem>
              {balance == 0 && (
                <>
                  <h2>No Membership Card found!</h2>

                  <h3>Mint a Membership Card here:</h3>

                  <Mint />
                </>
              )}

              {balance > 0 && (
                <>
                  <h2>Your Membership Card:</h2>

                  <Image
                    height={400}
                    width={400}
                    src="/images/membershipcard.svg"
                    alt=""
                  />

                  <Formik
                    initialValues={{ name: membershipDetails.name }}
                    onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                      }, 1000);
                    }}
                  >
                    {props => (
                      <Form>
                        <Field name="name">
                          {({ field, form }: { field: any, form: any }) => (
                            <FormControl
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel>Cardholder name</FormLabel>
                              <Input {...field} placeholder="name" />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <Button
                          mt={4}
                          colorScheme="teal"
                          isLoading={props.isSubmitting}
                          type="submit"
                        >
                          Update Membercard
                        </Button>
                      </Form>
                    )}
                  </Formik>

                  <h3>Skills</h3>
                  <ul>
                    <li>Solidity: 100</li>
                    <li>DAO: 50</li>
                  </ul>

                  <FeatureList>
                    <Feature feature={features[0]} />
                    <Feature feature={features[1]} />
                    <Feature feature={features[2]} />
                  </FeatureList>
                </>
              )}
            </GridItem>
          </Grid>
        </Container>
      }
    </>

  );
};

export default Content;
