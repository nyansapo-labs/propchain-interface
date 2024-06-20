import { COLORS } from "@/constants/theme";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Text,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { LuGavel } from "react-icons/lu";

const PropertyCard = ({ property }: any) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={property.aunction.image} alt={property.description} />

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
          color={"lightgray"}
          as="h5"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.aunction.propdesc.desc}
        </Text>
        <Flex justifyContent={"space-between"} alignItems={"center"} gap={5}>
          <Text color="gray.500">Current Bid: {property.bid.bidC.amount}</Text>
          <Text color="gray.500" as="span" fontSize={"12px"}>
            Ends At: {property.bid.closeDate}
          </Text>
        </Flex>
        <>
          <Link href={`/auctions/${property.aunction.listnumber}`} passHref>
            <Box
              px={3}
              py={2}
              // whileHover={{ scale: 1.04 }}
              // whileTap={{ scale: 0.9 }}
              bg={COLORS.actionBtnBG}
              borderRadius="8px"
              border="1px solid #0095D9"
              color="white"
              fontWeight={400}
            >
              <HStack>
                <Box>
                  <LuGavel />
                </Box>

                <Text fontSize="sm" fontWeight="400">
                  Bid Now
                </Text>
              </HStack>
            </Box>
          </Link>
        </>
      </VStack>
    </Box>
  </Box>
);

export default PropertyCard;
