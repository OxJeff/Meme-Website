import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';

interface ProductShowcaseProps {
  isWalletConnected: boolean;
}

function ProductShowcase({ isWalletConnected }: ProductShowcaseProps) {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience AI-Powered Anime Chat</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with your favorite anime characters through advanced AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-b from-purple-900/50 to-black/50 rounded-xl p-8 backdrop-blur-lg border border-purple-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <Bot className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">AI Chatbot</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Engage in natural conversations with AI-powered anime characters
            </p>
            <button
              className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 ${
                isWalletConnected
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-gray-700 cursor-not-allowed'
              }`}
              disabled={!isWalletConnected}
            >
              <MessageSquare className="w-5 h-5" />
              <span>{isWalletConnected ? 'Start Chatting' : 'Connect Wallet to Chat'}</span>
            </button>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80"
              alt="Anime-style artwork"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Featured Characters</h3>
                <p className="text-gray-300">
                  Discover our growing collection of AI-powered anime personalities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;