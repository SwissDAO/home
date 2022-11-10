import {
  connectorsForWallets, getDefaultWallets, RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  argentWallet, ledgerWallet, trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import type { AppProps } from 'next/app';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.scss';

const { chains, provider } = configureChains(
  [
    //chain.mainnet,
    chain.goerli
  ],
  [
    infuraProvider({ apiKey: process.env.INFURA_KEY! }),
    publicProvider(),
  ]
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

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={appInfo} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}