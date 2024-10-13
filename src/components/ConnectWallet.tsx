import { useMemo } from 'react'
import { ConnectionProvider , WalletProvider } from '@solana/wallet-adapter-react'
import {clusterApiUrl} from "@solana/web3.js"
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function ConnectWallet() {
   const endpoint = clusterApiUrl("devnet");
   const wallets = useMemo(() => [], []);

  return (
    <div>
      <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <WalletMultiButton>

          </WalletMultiButton>
        </WalletModalProvider>
        <p>Put the rest of your app here</p>
      </WalletProvider>
    </ConnectionProvider>
    </div>
  )
}

export default ConnectWallet
