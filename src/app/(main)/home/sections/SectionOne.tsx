import React from "react";
import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";
import Card, { ICardProps } from "./ServicesCard";

import { nanoid } from "@reduxjs/toolkit";
import { PROPCHAIN_SVG } from "@/assets/svg";

const SectionOne = () => {
  const cardData = [
    {
      title: "Provide Information",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem natus ",
      icon: PROPCHAIN_SVG().fileSVG(),
    },
    {
      title: "Security",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem natus ",
      icon: PROPCHAIN_SVG().securitySVG(),
    },
    {
      title: "Connect With People",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem natus ",
      icon: PROPCHAIN_SVG().peopleSVG(),
    },
    {
      title: "Search for Location",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem natus ",
      icon: PROPCHAIN_SVG().searchSVG(),
    },
  ];

  return (
    <Box as="section" id="services" flexDir="column" pt="50px">
      <ContainerWrapper>
        <Flex flexDir="column">
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Heading mt="8px" fontWeight={400} fontSize="18px">
              What did we do?
            </Heading>

            <Text mt="10px" fontWeight={400} fontSize="13px">
              Help Find you a good Land Property, Help Find you a good Land
              Property
            </Text>
          </Flex>

          <Box p={5} mt="30px">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
              {cardData.map((card) => (
                <Card
                  key={nanoid()}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </ContainerWrapper>
    </Box>
  );
};

export default SectionOne;
