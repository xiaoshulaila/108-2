import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { clearWalletStorage } from '../utils/storage';
import { handleWalletError } from '../utils/errors/wallet';

export function useWallet() {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const connect = async () => {
    try {
      if (!window.ethereum) {
        window.open('https://metamask.io/download/', '_blank');
        return;
      }

      await connectAsync({ 
        connector: injected({
          shimDisconnect: true
        })
      });
    } catch (error) {
      handleWalletError(error);
    }
  };

  const disconnect = async () => {
    try {
      await disconnectAsync();
      clearWalletStorage();
      // 强制刷新页面以确保状态完全清理
      window.location.reload();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return {
    address,
    isConnected,
    connect,
    disconnect
  };
}