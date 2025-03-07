"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  const { openSignIn } = useClerk();
  const router = useRouter();
  const words = [
    {
      text: "Ezup",
    },
    {
      text: "your",
    },
    {
      text: "Start",
    },
    {
      text: "UP",
    },
    {
      text: " ",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const handleSignIn = () => {
    openSignIn({
      redirectUrl: '/dashboard'
    });
  };

  return (
    <LandingPage/>
  );
}


import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wallet, Shield, Globe, Zap, ChevronRight, Github, Twitter, Linkedin } from "lucide-react"

export  function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Zap className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold">CryptoSphere</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#roadmap" className="text-sm text-gray-300 hover:text-white transition-colors">
            Roadmap
          </Link>
          <Link href="#token" className="text-sm text-gray-300 hover:text-white transition-colors">
            Token
          </Link>
          <Link href="#team" className="text-sm text-gray-300 hover:text-white transition-colors">
            Team
          </Link>
        </nav>
        <Button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Wallet className="size-4" />
          Connect Wallet
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-[#0F172A] text-purple-400 hover:bg-[#0F172A]/80">Now in Beta</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Decentralized
              </span>{" "}
              Finance
            </h1>
            <p className="text-lg text-gray-400 max-w-md">
              Experience the next generation of Web3 technology with our secure, scalable, and user-friendly platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="border-[#0F172A] bg-[#0F172A]/50 hover:bg-[#0F172A] text-white">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75"></div>
            <div className="relative bg-[#0F172A] p-6 rounded-lg border border-gray-800">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Price</span>
                  <span className="font-bold">$1,245.32</span>
                </div>
                <div className="h-40 w-full bg-gradient-to-tr from-[#020617] to-[#0F172A] rounded-md flex items-center justify-center">
                  <div className="w-full h-24 relative">
                    <svg viewBox="0 0 100 20" className="w-full h-full">
                      <path
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="0.5"
                        d="M0,10 Q30,5 50,10 T100,10"
                        vectorEffect="non-scaling-stroke"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#020617] p-2 rounded">
                    <p className="text-xs text-gray-400">24h Change</p>
                    <p className="text-green-500">+5.23%</p>
                  </div>
                  <div className="bg-[#020617] p-2 rounded">
                    <p className="text-xs text-gray-400">Volume</p>
                    <p>$24.5M</p>
                  </div>
                  <div className="bg-[#020617] p-2 rounded">
                    <p className="text-xs text-gray-400">Market Cap</p>
                    <p>$1.2B</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Wallet className="mr-2 size-4" />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0F172A]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                $1.2B+
              </p>
              <p className="text-gray-400">Total Value Locked</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                120K+
              </p>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                50+
              </p>
              <p className="text-gray-400">Supported Chains</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                99.9%
              </p>
              <p className="text-gray-400">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-[#0F172A] text-purple-400 hover:bg-[#0F172A]/80 mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CryptoSphere?</h2>
          <p className="text-gray-400">
            Our platform offers cutting-edge Web3 technology with a focus on security, scalability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0F172A] p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors group">
            <div className="size-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
              <Shield className="size-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
            <p className="text-gray-400">
              Military-grade encryption and multi-signature authentication to keep your assets safe.
            </p>
          </div>

          <div className="bg-[#0F172A] p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors group">
            <div className="size-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
              <Zap className="size-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Experience near-instant transactions with our optimized Layer 2 scaling solutions.
            </p>
          </div>

          <div className="bg-[#0F172A] p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors group">
            <div className="size-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
              <Globe className="size-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cross-Chain Support</h3>
            <p className="text-gray-400">
              Seamlessly interact with multiple blockchains through our unified interface.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#0F172A]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="bg-[#020617] text-purple-400 hover:bg-[#020617]/80 mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Secure, Seamless</h2>
            <p className="text-gray-400">
              Getting started with CryptoSphere is easy. Follow these simple steps to begin your Web3 journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg blur-sm opacity-75"></div>
              <div className="relative bg-[#020617] p-6 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">
                    1
                  </div>
                  <ChevronRight className="size-5 text-gray-600 hidden md:block" />
                </div>
                <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">
                  Link your preferred Web3 wallet to access all of our platform's features.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg blur-sm opacity-75"></div>
              <div className="relative bg-[#020617] p-6 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">
                    2
                  </div>
                  <ChevronRight className="size-5 text-gray-600 hidden md:block" />
                </div>
                <h3 className="text-xl font-bold mb-2">Deposit Funds</h3>
                <p className="text-gray-400">
                  Transfer your crypto assets to your CryptoSphere account securely and instantly.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg blur-sm opacity-75"></div>
              <div className="relative bg-[#020617] p-6 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Start Trading</h3>
                <p className="text-gray-400">
                  Begin trading, staking, or participating in our DeFi ecosystem with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="bg-[#0F172A] text-purple-400 hover:bg-[#0F172A]/80 mb-4">Roadmap</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Ahead</h2>
          <p className="text-gray-400">
            We're constantly evolving. Here's what we have planned for the future of CryptoSphere.
          </p>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 mb-2">Completed</Badge>
              <h3 className="text-2xl font-bold mb-2">Q1 2023</h3>
              <p className="text-gray-400">
                Platform launch and initial token distribution. Basic trading functionality and wallet integration.
              </p>
            </div>
            <div className="md:col-span-2 bg-[#0F172A] p-6 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Platform Beta Launch</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Token Generation Event</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Basic Trading Features</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Multi-Wallet Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 mb-2">In Progress</Badge>
              <h3 className="text-2xl font-bold mb-2">Q2 2023</h3>
              <p className="text-gray-400">
                Enhanced security features, cross-chain integration, and advanced trading tools.
              </p>
            </div>
            <div className="md:col-span-2 bg-[#0F172A] p-6 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Advanced Security Features</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>Cross-Chain Integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-gray-600 flex items-center justify-center mt-0.5">
                    <div className="size-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <span>Advanced Trading Tools</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-gray-600 flex items-center justify-center mt-0.5">
                    <div className="size-3 bg-blue-400 rounded-full"></div>
                  </div>
                  <span>Mobile App Beta</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Badge className="bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 mb-2">Upcoming</Badge>
              <h3 className="text-2xl font-bold mb-2">Q3-Q4 2023</h3>
              <p className="text-gray-400">
                Governance launch, institutional features, and expanded ecosystem integrations.
              </p>
            </div>
            <div className="md:col-span-2 bg-[#0F172A] p-6 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-gray-600 flex items-center justify-center mt-0.5">
                    <div className="size-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Governance System Launch</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-gray-600 flex items-center justify-center mt-0.5">
                    <div className="size-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Institutional Features</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-gray-600 flex items-center justify-center mt-0.5">
                    <div className="size-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Ecosystem Expansion</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-gray-600 flex items-center justify-center mt-0.5">
                    <div className="size-3 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>Global Marketing Campaign</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="bg-[#0F172A]">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#020617] text-purple-400 hover:bg-[#020617]/80 mb-4">Token</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CSPH Token Economics</h2>
              <p className="text-gray-400 mb-6">
                Our native token powers the entire CryptoSphere ecosystem, providing utility, governance, and rewards.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Staking Rewards</h3>
                    <p className="text-sm text-gray-400">Earn passive income by staking your CSPH tokens</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Governance Rights</h3>
                    <p className="text-sm text-gray-400">Vote on platform upgrades and protocol changes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                      <line x1="16" x2="2" y1="8" y2="22" />
                      <line x1="17.5" x2="9" y1="15" y2="15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Fee Discounts</h3>
                    <p className="text-sm text-gray-400">Reduced trading fees when paying with CSPH</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-[#020617] p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <Zap className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">CSPH</h3>
                      <p className="text-xs text-gray-400">CryptoSphere Token</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">+12.4%</Badge>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Token Distribution</span>
                    <span>100,000,000 CSPH</span>
                  </div>

                  <div className="h-10 bg-[#0F172A] rounded-full overflow-hidden">
                    <div className="flex h-full">
                      <div className="h-full bg-purple-600 w-[30%]" title="Team & Advisors (30%)"></div>
                      <div className="h-full bg-blue-600 w-[25%]" title="Community Rewards (25%)"></div>
                      <div className="h-full bg-indigo-600 w-[20%]" title="Liquidity (20%)"></div>
                      <div className="h-full bg-violet-600 w-[15%]" title="Development (15%)"></div>
                      <div className="h-full bg-fuchsia-600 w-[10%]" title="Marketing (10%)"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-purple-600 rounded-full"></div>
                      <span>Team & Advisors (30%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-blue-600 rounded-full"></div>
                      <span>Community Rewards (25%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-indigo-600 rounded-full"></div>
                      <span>Liquidity (20%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-violet-600 rounded-full"></div>
                      <span>Development (15%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-fuchsia-600 rounded-full"></div>
                      <span>Marketing (10%)</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Buy CSPH Tokens
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
          <div className="relative z-10 px-6 py-12 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Future of Finance?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Don't miss out on the Web3 revolution. Join thousands of users already benefiting from our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#020617] hover:bg-white/90">
                <Wallet className="mr-2 size-4" />
                Connect Wallet
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="size-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Zap className="size-5 text-white" />
                </div>
                <span className="text-xl font-bold">CryptoSphere</span>
              </div>
              <p className="text-gray-400">The future of decentralized finance, built for everyone.</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Twitter className="size-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Github className="size-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="size-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Exchange
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Staking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Yield Farming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    NFT Marketplace
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CryptoSphere. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}