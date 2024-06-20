"use client";

import React, { ReactNode } from "react";
import {
  WALLETCONNECT_CONFIG,
  WALLETCONNECT_PROJECT_ID,
} from "@/constants/config";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { State, WagmiProvider } from "wagmi";

// Setup queryClient
const queryClient = new QueryClient();

if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  );
}

createWeb3Modal({
  wagmiConfig: WALLETCONNECT_CONFIG,
  //@ts-ignore
  projectId: WALLETCONNECT_PROJECT_ID,
  themeMode: "light",
  themeVariables: {
    "--w3m-z-index": 5000,
    "--w3m-accent": "#0095D9",
    "--w3m-border-radius-master": "8px",
  },
});

export function Web3Modal({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={WALLETCONNECT_CONFIG} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
