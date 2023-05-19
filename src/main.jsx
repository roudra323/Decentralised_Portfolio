import "./polyfills";
import "@rainbow-me/rainbowkit/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { sepolia, mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

const { chains, provider } = configureChains(
  [sepolia, mainnet, polygon, optimism, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "DappBoilerPlate",
  projectId: "31308eb244f6bc63240801613d341bef", //project id from rainbowkit
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider modalSize="compact" theme={darkTheme()} chains={chains}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
