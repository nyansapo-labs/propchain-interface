"use client";

import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FaGavel } from "react-icons/fa";
import { AunctionData } from "@/constants/dummyJson";
import { COLORS } from "@/constants/theme";
import { useEffect, useState } from "react";
import { getCountdown } from "@/utils/helper";

const PropertyDetail = ({ params }: any) => {
  const { id } = params;
  const [countdown, setCountdown] = useState("");

  const property = AunctionData.find(
    (property) => property.aunction.listnumber === id
  );

  useEffect(() => {
    if (property) {
      const interval = setInterval(() => {
        setCountdown(getCountdown(property.bid.closeDate));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [property]);
  if (!property) {
    return (
      <Box p="6" pt={"10%"}>
        <Text>Property not found</Text>
      </Box>
    );
  }

  return (
    <Box p="6" pt={"7%"}>
      <Grid templateColumns="4fr 1fr" gap={5}>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={property.aunction.image}
              alt={property.aunction.propdesc.desc}
              width={"100%"}
              height={"380px"}
              aspectRatio={"auto"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </Box>
          <Box p="6">
            <VStack spacing="4" align="start">
              <Text
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.aunction.propdesc.title}
              </Text>
              <Text
                mt="1"
                fontWeight="semibold"
                as="h5"
                lineHeight="tight"
                noOfLines={1}
              >
                {property.aunction.propdesc.desc}
              </Text>
              <Text color="gray.500">
                Highest Bid: {property.bid.bidC.amount}
              </Text>
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
            <VStack spacing="4" align="start">
              <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                Place Your Bid
              </Text>
              <Text color="gray.500">
                {property.bid.bidC.title}: {property.bid.bidC.amount}
              </Text>
              <Text color="gray.500">Ends in : {countdown}</Text>
              <FormControl>
                <FormLabel htmlFor="bid-amount">Your Bid Amount</FormLabel>
                <Input
                  id="bid-amount"
                  type="number"
                  placeholder="Enter your bid"
                />
              </FormControl>
              <Button
                color={"white"}
                bgColor={COLORS.actionBtnBG}
                leftIcon={<FaGavel />}
              >
                Submit Bid
              </Button>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default PropertyDetail;
