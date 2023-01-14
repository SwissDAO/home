import { ChakraProvider } from '@chakra-ui/react';
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  argentWallet,
  ledgerWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { goerli } from '@wagmi/core/chains';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.scss';

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [infuraProvider({ apiKey: process.env.INFURA_KEY! }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'swissDAO Membership Card',
  chains,
});

const appInfo = {
  appName: 'swissDAO Membership Card',
};

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: 'Apps',
//     wallets: [
//       argentWallet({ chains }),
//       trustWallet({ chains }),
//       ledgerWallet({ chains }),
//     ],
//   },
// ]);

const wagmiClient = createClient({
  connectors,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          appInfo={appInfo}
          chains={chains}
          modalSize={'compact'}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
