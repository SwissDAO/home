import { createTheme, NextUIProvider } from '@nextui-org/react';
import {
  connectorsForWallets,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  argentWallet,
  ledgerWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { goerli } from '@wagmi/core/chains';
import merge from 'lodash/merge';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.scss';
import Layout from './layouts/layout';

const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [infuraProvider({ apiKey: process.env.INFURA_KEY! }), publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: 'swissDAO Membership Card',
  chains,
});

const appInfo = {
  appName: 'swissDAO Membership Card',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Apps',
    wallets: [
      argentWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
    ],
  },
]);

const customTheme = merge(
  lightTheme({
    accentColor: 'black',
    accentColorForeground: 'white',
    borderRadius: 'large',
    overlayBlur: 'small',
  }),
  {
    colors: {
      connectButtonBackground: 'blue',
      modalTextSecondary: 'black',
      menuItemBackground: '#f2f2f2',
      actionButtonBorder: 'yellow',
      closeButtonBackground: 'white',
      closeButton: 'black',
      generalBorder: 'black',
      profileForeground: 'white',
      profileAction: '#f2f2f2',
      profileActionHover: '#f2f2f2',
    },
  },
  {
    shadows: {
      profileDetailsAction: 'none',
    },
  },
  {
    fonts: {
      body: 'inherit',
    },
  }
);

const wagmiClient = createClient({
  connectors,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider>
    <NextUIProvider theme={createTheme({
      type: 'dark',
    })}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          appInfo={appInfo}
          chains={chains}
          modalSize={'compact'}
          theme={customTheme}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
      {/* </ChakraProvider> */}
    </NextUIProvider>
  );
}
