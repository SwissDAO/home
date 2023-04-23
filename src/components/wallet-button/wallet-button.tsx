import stylesText from '@/styles/module/animated-text.module.scss';
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import Button from '../button/button';
import styles from './wallet-button.module.scss';

const WalletButton = () => {
  const { openConnectModal } = useConnectModal();

  const renderWalletButton = (
    onClick: () => void,
    label: string,
    active = false
  ) => {
    return (
      <>
        <Button onClick={onClick} className={styles.button}>
          <span className={stylesText.animatedGradient}>{label}</span>
        </Button>
      </>
    );
  };

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, mounted }) => {
        return (
          <>
            {(() => {
              if (!mounted || !account || !chain)
                return renderWalletButton(
                  () => openConnectModal?.(), 'Profile'
                );

              if (chain.unsupported)
                return renderWalletButton(openChainModal, 'Switch Network');

              return renderWalletButton(
                openAccountModal,
                account.displayName,
                true
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default WalletButton;