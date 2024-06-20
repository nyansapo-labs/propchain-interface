import React from "react";
import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { COLORS } from "@/constants/theme";
import ActionHero from "./action";

const HeroSection = () => {
  return (
    <Box
      as="section"
      id="home"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      flexDir="column"
      bgImage={["/image/Hero_BG_Image.png"]}
      bgSize={"cover"}
      bgPos={["", "inherit", "inherit"]}
      py="6%"
      color="white"
    >
      <Flex
        flexDir="column"
        justify="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading fontWeight={400}>Let's Make Location Easier, and</Heading>

        <Heading mt="8px" fontWeight={400}>
          Help Find you a good Land Property
        </Heading>

        <Text mt="30px" fontWeight={400} fontSize="13px">
          Help Find you a good Land Property, Help Find you a good Land Property
        </Text>

        <Box mt="50px">
          <ActionHero />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
