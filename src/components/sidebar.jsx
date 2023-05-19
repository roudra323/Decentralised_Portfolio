import React from "react";
import { Box, Text, VStack, Avatar } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box w="250px" h="100vh" p={4} pt="50px">
      <VStack spacing={4} align="center">
        <Avatar
          size="2xl"
          src="https://ipfs.io/ipfs/QmRQ2aRSuhSsC1ofM7B58A7FTavqypxoTGfE4D28YZoYnv"
        />

        <Text>Item 2</Text>
        <Text>Item 3</Text>
        {/* Add more sidebar items */}
      </VStack>
    </Box>
  );
}

export default Sidebar;
