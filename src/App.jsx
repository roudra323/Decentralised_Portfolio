import abi from "../artifacts/contracts/Portfolio.sol/Portfolio.json";
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Flex, Spacer } from "@chakra-ui/react";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const { address, isConnected, isDisconnected } = useAccount();

  const contractInstance = async () => {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractABI = abi.abi;

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      contractInstance();
      console.log("Connected");
    }
  }, [isConnected]);

  const handleShowMessageClick = async () => {
    if (state.contract) {
      const message = await state.contract.readMsg("<address to show msg>");
      console.log("Message:", message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: 12,
      }}
    >
      <ConnectButton onPress={contractInstance} />
      {console.log("state", state)}
      <div className="show-msg">
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default App;
