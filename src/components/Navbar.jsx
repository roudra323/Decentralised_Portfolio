import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <Flex align="center" p="10px">
      <Flex justify="space-between" p="10px">
        <Text pr="20px">Home</Text>
        <Text pr="20px">Projects</Text>
        <Text pr="20px">Skills</Text>
        <Text pr="20px">Contact</Text>
      </Flex>
      <Spacer />
      <ConnectButton />
    </Flex>
  );
}

export default Navbar;
