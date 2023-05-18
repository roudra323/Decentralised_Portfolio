import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
  );
}

export default Navbar;
