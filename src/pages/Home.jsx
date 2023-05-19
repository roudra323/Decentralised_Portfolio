import { Flex, Text, Center, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Home() {
  const [developerType, setDeveloperType] = useState("Blockchain Developer");

  useEffect(() => {
    const textList = [
      "Solidity Developer",
      "Smart Contract Developer",
      "Blockchain Developer",
    ];

    let currentIndex = 0;
    let isErasing = false;
    let currentText = "";

    const timer = setInterval(() => {
      if (!isErasing) {
        if (currentText.length === textList[currentIndex].length) {
          isErasing = true;
        } else {
          currentText = textList[currentIndex].substring(
            0,
            currentText.length + 1
          );
        }
      } else {
        if (currentText.length === 0) {
          isErasing = false;
          currentIndex = (currentIndex + 1) % textList.length;
        } else {
          currentText = currentText.substring(0, currentText.length - 1);
        }
      }
      setDeveloperType(currentText);
    }, 100); // Change text every 100 milliseconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" h="50vh">
      <VStack>
        <Text
          as="h1"
          bgGradient="linear(to-l, #d3cce3, #e9e4f0)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Heyy, Roudra here
        </Text>
        <Text
          as="h2"
          bgGradient="linear(to-l, #d3cce3, #e9e4f0)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          {developerType}
        </Text>
      </VStack>
    </Flex>
  );
}

export default Home;
