import {
  Flex,
  Text,
  VStack,
  Box,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="50vh"
      overflow-y="scroll"
    >
      <VStack spacing={8}>
        <Welcome />
        <Projects />
        <Skills />
        <Contact />
      </VStack>
    </Flex>
  );
}

export default Home;
