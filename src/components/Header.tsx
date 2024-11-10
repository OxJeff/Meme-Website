import React from 'react';
import { Wallet2, Loader2 } from 'lucide-react';

interface HeaderProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
  isConnecting: boolean;
  walletAddress?: string | null;
}

function Header({ isWalletConnected, onConnectWallet, isConnecting, walletAddress }: HeaderProps) {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="py-6 px-4 backdrop-blur-lg bg-black/30 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            AnimeAI Chat
          </h1>
        </div>
        <button
          onClick={onConnectWallet}
          disabled={isConnecting}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
            isWalletConnected
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30'
          }`}
        >
          {isConnecting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Wallet2 className="w-5 h-5" />
          )}
          <span>
            {isConnecting
              ? 'Connecting...'
              : isWalletConnected
              ? formatAddress(walletAddress!)
              : 'Connect Wallet'}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;