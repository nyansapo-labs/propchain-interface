import { http, createConfig } from "wagmi";
import { cookieStorage, createStorage } from "wagmi";
import { type Chain, sepolia, baseSepolia } from "wagmi/chains";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";
import { SITE_NAME, SITE_INFO, SITE_URL } from "@/utils/site";

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  );
}

const metadata = {
  name: SITE_NAME,
  description: SITE_INFO,
  url: SITE_URL,
  icons: [],
};

const chains = [sepolia, baseSepolia] as [Chain, ...Chain[]];

export const WALLETCONNECT_CONFIG = createConfig({
  chains,
  transports: {
    [sepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
  connectors: [
    walletConnect({
      //@ts-ignore
      projectId: WALLETCONNECT_PROJECT_ID,
      metadata,
      showQrModal: false,
    }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
