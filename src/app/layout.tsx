import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_INFO,
  SITE_URL,
  SOCIAL_TWITTER,
} from "@/utils/site";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppHome from "@/components/HomeView/appview";
import { RootProvider } from "@/provider";

import { cookieToInitialState } from "wagmi";

import { headers } from "next/headers";
import { WALLETCONNECT_CONFIG } from "@/constants/config";
import { Web3Modal } from "@/provider/web3-provider";

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} · ${SITE_INFO}`,
    template: `${SITE_NAME} · %s`,
  },
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    title: SITE_NAME,
    capable: true,
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: "/opengraph-image",
  },
  twitter: {
    card: "summary_large_image",
    site: SOCIAL_TWITTER,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: "/opengraph-image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1.0,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    WALLETCONNECT_CONFIG,
    headers().get("cookie")
  );

  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <RootProvider>
          <Web3Modal initialState={initialState}>
            <AppHome>{children}</AppHome>
          </Web3Modal>
        </RootProvider>
      </body>
    </html>
  );
}
