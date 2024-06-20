"use client";

import { PROPCHAIN_SVG } from "@/assets/svg";
import { Flex, keyframes } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

  return (
    <Flex
      pos="absolute"
      bg="white"
      h="90vh"
      w="100%"
      align={"center"}
      justify="center"
      flexDirection={"column"}
      alignSelf="center"
    >
      <Flex
        w="15vw"
        h={"15vw"}
        borderRadius="10vw"
        align={"center"}
        justify="center"
        borderWidth={1}
        borderColor="#E3E4E6"
        animation={`${pulse} 2s infinite`}
      >
        {PROPCHAIN_SVG().propchain_Logo()}
      </Flex>
    </Flex>
  );
}
