import React from 'react';
import { Twitter, MessageSquare, Github } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import RoadmapSection from './components/RoadmapSection';
import ProductShowcase from './components/ProductShowcase';
import ReferralSection from './components/ReferralSection';
import CommunitySection from './components/CommunitySection';
import { useWallet } from './hooks/useWallet';

function App() {
  const { address, isConnecting, connectWallet } = useWallet();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white">
      <Toaster position="top-right" />
      <Header 
        isWalletConnected={!!address} 
        onConnectWallet={connectWallet}
        isConnecting={isConnecting}
        walletAddress={address}
      />
      <main>
        <ProductShowcase isWalletConnected={!!address} />
        <RoadmapSection />
        <ReferralSection isWalletConnected={!!address} />
        <CommunitySection />
      </main>
      <footer className="bg-black/50 backdrop-blur-lg py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                AnimeAI Chat
              </h3>
              <p className="text-gray-400 mt-2">Experience the future of anime interaction</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2024 AnimeAI Chat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;