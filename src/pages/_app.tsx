import Layout from '@/layouts/layout';
import '@/styles/globals.scss';
import localFont from '@next/font/local';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import {
  connectorsForWallets,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  argentWallet,
  ledgerWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { Analytics } from '@vercel/analytics/react';
import { goerli } from '@wagmi/core/chains';
import merge from 'lodash/merge';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const avenirMedium = localFont({
  src: '../../public/fonts/Avenir-Medium.woff2',
  weight: '400',
  style: 'normal',
});

const avenirHeavy = localFont({
  src: '../../public/fonts/Avenir-Heavy.woff2',
  weight: '800',
  style: 'normal',
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

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);

  return (
    <NextUIProvider theme={nextUiTheme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          appInfo={appInfo}
          chains={chains}
          modalSize={'compact'}
          theme={customTheme}
        >
          <style jsx global>{`
            html {
              --font-base: ${avenirMedium.style.fontFamily};
              --font-strong: ${avenirHeavy.style.fontFamily};
            }
          `}</style>
          {getLayout(<Component {...pageProps} />)}
          <Analytics />
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}
