import ContainerWrapper from "@/components/ContainerWrapper";
import PropertyCard from "@/components/PropertyCard";
import { AunctionData } from "@/constants/dummyJson";
import { COLORS } from "@/constants/theme";
import {
  Box,
  Flex,
  GridItem,
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

const Auctions = () => {
  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      flexDir="column"
      pt={"7%"}
      color="black"
    >
      <ContainerWrapper>
        <VStack>
          <Box alignContent={"center"} textAlign={"center"}>
            <Heading fontSize="30px" fontWeight={400} textTransform="uppercase">
              Propchain Live Auctions
            </Heading>
            <Text
              fontSize="14px"
              mt="8px"
              fontWeight={400}
              color={COLORS.descFontColor}
            >
              Get the best bid. Generate Good money.
            </Text>
          </Box>

          <SimpleGrid columns={[1, null, 3]} spacing="40px" my={"5%"}>
            {AunctionData.map((property) => (
              <PropertyCard
                key={property.aunction.listnumber}
                property={property}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </ContainerWrapper>
    </Box>
  );
};

export default Auctions;
