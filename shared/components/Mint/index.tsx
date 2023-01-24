import { useState } from 'react';
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction
} from 'wagmi';
import { CONFIG } from '../../const';

const Mint = () => {
  const { address, isConnected } = useAccount();
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

  return (
    <>
      {isConnected && (
        // <Formik
        //   initialValues={{ name: '' }}
        //   onSubmit={(values, actions) => {
        //     write?.();
        //   }}
        // >
        //   {props => (
        //     <Form>
        //       <Field name="name">
        //         {({ field, form }: { field: any; form: any }) => (
        //           <FormControl
        //             isRequired
        //             isInvalid={form.errors.name && form.touched.name}
        //           >
        //             <FormLabel>Put your name here:</FormLabel>
        //             <Input
        //               value={name}
        //               onChange={e => setName(e.target.value)}
        //             />
        //             <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        //           </FormControl>
        //         )}
        //       </Field>

        //       <div>
        //         <Button disabled={!write || isLoading} type="submit">
        //           {isLoading ? 'Minting...' : 'Mint'}
        //         </Button>
        //         {isSuccess && (
        //           <div>
        //             Successfully minted your NFT!
        //             <div>
        //               <Link href={`https://etherscan.io/tx/${data?.hash}`}>
        //                 Etherscan
        //               </Link>
        //             </div>
        //           </div>
        //         )}
        //         {(isPrepareError || isError) && (
        //           <div>Error: {(prepareError || error)?.message}</div>
        //         )}
        //       </div>
        //     </Form>
        //   )}
        // </Formik>
        <p>mint</p>
      )}
    </>
  );
};

export default Mint;
