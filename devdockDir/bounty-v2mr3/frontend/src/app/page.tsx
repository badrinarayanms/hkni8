"use client";

import { useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, useConnect, useContractWrite } from 'wagmi';

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();

  const [bountyDetails, setBountyDetails] = useState({
    amount: '',
    description: '',
    deadline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add contract interaction logic here
  };

  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Open Innovation Bounty Platform</h1>
      {!isConnected ? (
        <button
          onClick={() => connect()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Amount (ETH)</label>
            <input
              type="number"
              value={bountyDetails.amount}
              onChange={(e) => setBountyDetails({...bountyDetails, amount: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Create Bounty
          </button>
        </form>
      )}
    </main>
  );
}