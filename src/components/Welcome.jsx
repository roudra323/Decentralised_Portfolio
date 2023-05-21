import { Text, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Welcome() {
  const [developerType, setDeveloperType] = useState("Blockchain Developer");

  useEffect(() => {
    const textList = ["Smart Contract Developer", "Blockchain Developer"];

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
          currentText = "";
        } else {
          currentText = currentText.substring(0, currentText.length - 1);
        }
      }
      setDeveloperType(currentText);
    }, 90); // Change text every 90 milliseconds

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Box textAlign="center">
        <Text
          as="h1"
          bgGradient="linear(to-l, #d3cce3, #e9e4f0)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          pt="30rem"
        >
          Heyy, Roudra here
        </Text>
      </Box>

      <Box textAlign="center">
        <Text
          as="h2"
          bgGradient="linear(to-l, #d3cce3, #e9e4f0)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          &nbsp;
          {developerType}
        </Text>
      </Box>
    </div>
  );
}

export default Welcome;
