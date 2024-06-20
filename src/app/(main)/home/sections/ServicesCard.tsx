import React, { ReactNode } from "react";
import { Box, HStack, Image, Text, Flex } from "@chakra-ui/react";
import { COLORS } from "@/constants/theme";

export interface ICardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, description, icon }) => {
  return (
    <Flex
      maxW="md"
      bg="#F1F4F7"
      py="20px"
      px="20px"
      borderRadius="lg"
      flexDir="column"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box bg={COLORS.circleBG} borderRadius="50px" py="20px" px="20px">
        {icon}
      </Box>

      <Box p="6">
        <Box
          mt="1"
          fontSize="20px"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          textAlign="center"
        >
          {title}
        </Box>

        <Text mt="2" fontWeight={400} fontSize="14px" textAlign="center">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default Card;
