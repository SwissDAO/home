import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import Button from "../button/button";

const WalletButton = () => {
  const { openConnectModal } = useConnectModal();

  const renderWalletButton = (
    onClick: () => void,
    label: string,
    active = false
  ) => {
    return (
      <>
        <Button
          onClick={onClick}
        >
          {label}
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