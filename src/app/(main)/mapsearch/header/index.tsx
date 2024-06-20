"use client";

import React from "react";
import { Box, HStack, Flex, Text, Button } from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import SearchAction from "./search";
import { COLORS } from "@/constants/theme";

const MapHeader = () => {
  return (
    <Box zIndex={50} h="80px" border="0px solid #314D53" bg="transparent">
      <ContainerWrapper maxW={"1150px"} mx={"auto"}>
        <Flex h={"80px"} justify={"space-between"} align="center">
          <HStack gap="30px">
            <SearchAction />

            <HStack>
              <Button
                boxShadow={COLORS.mapNavBoxShadow}
                color={COLORS.descFontColor}
                bg={COLORS.whiteBG}
                borderRadius="100px"
                fontWeight={400}
                fontSize="14px"
                _hover={{
                  bg: `${COLORS.actionBtnBG}`,
                  color: `${COLORS.whiteBG}`,
                }}
              >
                Aunctioned Land
              </Button>

              <Button
                boxShadow={COLORS.mapNavBoxShadow}
                color={COLORS.descFontColor}
                bg={COLORS.whiteBG}
                borderRadius="100px"
                fontWeight={400}
                fontSize="14px"
                _hover={{
                  bg: `${COLORS.actionBtnBG}`,
                  color: `${COLORS.whiteBG}`,
                }}
              >
                Aunctioned Building
              </Button>
            </HStack>
          </HStack>

          <Text>Logo</Text>
        </Flex>
      </ContainerWrapper>
    </Box>
  );
};

export default MapHeader;
