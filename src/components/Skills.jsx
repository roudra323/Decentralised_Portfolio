import { Flex, Text, Box, Divider, Spacer } from "@chakra-ui/react";

function Skills() {
  return (
    <Box textAlign="center">
      <Text as="h3" fontSize="4xl" fontWeight="bold">
        Skills
      </Text>
      <Divider orientation="horizontal" />
      <Flex>
        <Box p="30px" pr="60px">
          <Text as="h4">Solidity</Text>
          <Text as="h4">Smart Contract</Text>
          <Text as="h4">Hardhat</Text>
          <Text as="h4">EtherJS</Text>
        </Box>

        <Box p="30px">
          <Text as="h4">ReactJS</Text>
          <Text as="h4">JavaScript</Text>
          <Text as="h4">Python</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Skills;
