import React from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { COLORS } from "@/constants/theme";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <Box>
      <ContainerWrapper>
        <Flex alignItems="center" justify="space-between" pt="70px" pb="70px">
          <Box>
            <Heading color={COLORS.fontColor} fontSize="32px" fontWeight={400}>
              {" "}
              We are ready to make you Dream
            </Heading>
            <Heading color={COLORS.fontColor} fontSize="32px" fontWeight={400}>
              Come true.
            </Heading>
            <Text
              color={COLORS.fontColor}
              fontSize="14px"
              mt="24px"
              maxW="500px"
              fontWeight={400}
              lineHeight="18.62px"
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est aborum et dolorum fuga. 
            </Text>

            <Box mt="30px">{/* <Action /> */}</Box>
          </Box>

          <Box>
            <Image
              src="image/illustration_image.png"
              alt="illustration_image"
              w="529px"
              h="467px"
            />
          </Box>
        </Flex>
      </ContainerWrapper>
    </Box>
  );
};

export default SectionTwo;
