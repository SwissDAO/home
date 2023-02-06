import localFont from '@next/font/local';
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
import { Analytics } from '@vercel/analytics/react';
import { goerli } from '@wagmi/core/chains';
import merge from 'lodash/merge';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import Layout from '../shared/layouts/layout';
import '../styles/globals.scss';

const avenir = localFont({
  src: [
    {
      path: '../public/fonts/Avenir-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});

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
    borderRadius: 'large',
    overlayBlur: 'small',
  }),
  {
    colors: {
      modalTextSecondary: 'black',
      menuItemBackground: '#f2f2f2',
      closeButtonBackground: 'transparent',
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

const nextUiTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#E31D1C',
      secondary: '#FFFFFF',
      accent: '#00B13C',
      gradient: 'linear-gradient(90deg, $primary 100%, $secondary 100%)',
      link: '#FFFFFF',
    },
    fonts: {
      sans: 'Avenir',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={nextUiTheme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          appInfo={appInfo}
          chains={chains}
          modalSize={'compact'}
          theme={customTheme}
        >
          <main className={avenir.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
          <Analytics />
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
