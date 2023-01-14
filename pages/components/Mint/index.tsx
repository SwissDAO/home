import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { CONFIG } from '../../shared/const';

const Mint = () => {
  const [name, setName] = useState('');

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...CONFIG,
    functionName: 'mint',
    args: [name],
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleInputChange = (e: any) => setName(e.target.value);

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        write?.();
      }}
    >
      {props => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl
                isRequired
                isInvalid={form.errors.name && form.touched.name}
              >
                <FormLabel>Put your name here:</FormLabel>
                <Input value={name} onChange={handleInputChange} />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <div>
            <Button disabled={!write || isLoading} type="submit">
              {isLoading ? 'Minting...' : 'Mint'}
            </Button>
            {isSuccess && (
              <div>
                Successfully minted your NFT!
                <div>
                  <Link href={`https://etherscan.io/tx/${data?.hash}`}>
                    Etherscan
                  </Link>
                </div>
              </div>
            )}
            {(isPrepareError || isError) && (
              <div>Error: {(prepareError || error)?.message}</div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Mint;
