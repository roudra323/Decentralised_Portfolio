import React from "react";
import { Box, Text, VStack, Center, Divider, Image } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box
      w="250px"
      h="100vh"
      p={4}
      pt="35px"
      position="fixed"
      overflowY="auto"
      sx={{
        "@media (max-width: 767px)": {
          position: "static",
          height: "auto",
          mb: "20px",
        },
      }}
    >
      <VStack spacing={4} align="center">
        <Box border="8px" borderRadius="full">
          <Image paddingBottom="30px" src="/me.png" />
        </Box>

        <Text as="h4" fontWeight="bold" pt="10px">
          About Me
        </Text>

        <Divider orientation="horizontal" />

        <Text>
          Aspiring blockchain developer over 9 months of experience in Solidity,
          Hardhat, EtherJS, ReactJS, and React components, and a passion for
          blockchain technology. Currently pursuing BSc in Computer Science
        </Text>
        {/* Add more sidebar items */}
        <Text as="h4" fontWeight="bold" pt="10px">
          Education
        </Text>

        <Divider orientation="horizontal" />

        <Text>
          Aspiring blockchain developer over 9 months of experience in Solidity,
          Hardhat, EtherJS, ReactJS, and React components, and a passion for
          blockchain technology. Currently pursuing BSc in Computer Science
        </Text>
      </VStack>
    </Box>
  );
}

export default Sidebar;
