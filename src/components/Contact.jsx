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
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Contact() {
  return (
    <div>
      <Box textAlign="center">
        <Text as="h3" fontSize="4xl" fontWeight="bold">
          Contact
        </Text>
        <Divider orientation="horizontal" />
        {/* Add your contact content here */}
      </Box>
    </div>
  );
}

export default Contact;
