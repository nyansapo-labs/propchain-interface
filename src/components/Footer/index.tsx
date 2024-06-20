import { PROPCHAIN_SVG } from "@/assets/svg";
import { COLORS } from "@/constants/theme";
import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";
import { LinkComponent } from "@/components/LinkComponent";

const Footer = () => {
  return (
    <Box
      pt="50px"
      as="footer"
      bg={COLORS.generalBGColor}
      py="2.5rem"
      px="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW="64rem"
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid #0095D91A"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            {PROPCHAIN_SVG().propchain_footer_logo()}
          </Box>

          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color={COLORS.fontColor}
              mb="0.5rem"
              fontSize="14px"
              fontWeight="400"
            >
              Home
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkComponent href="#">
                <Text fontSize="14px" fontWeight={300}>
                  Call-to-Action
                </Text>
              </LinkComponent>

              <LinkComponent href="#">
                <Text fontSize="14px" fontWeight={300}>
                  Upload Your Bid
                </Text>
              </LinkComponent>
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color={COLORS.fontColor}
              mb="0.5rem"
              fontSize="14px"
              fontWeight="400"
            >
              Bids
            </Heading>
            <List lineHeight="2">
              <LinkComponent href="#">
                <Text fontSize="14px" fontWeight={300}>
                  Owner Bid
                </Text>
              </LinkComponent>

              <LinkComponent href="#">
                <Text fontSize="14px" fontWeight={300}>
                  Stake Price
                </Text>
              </LinkComponent>

              <LinkComponent href="#">
                <Text fontSize="14px" fontWeight={300}>
                  Find Land
                </Text>
              </LinkComponent>

              <LinkComponent href="#">
                <Text fontSize="14px" fontWeight={300}>
                  Find Location
                </Text>
              </LinkComponent>
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color={COLORS.fontColor}
              mb="0.5rem"
              fontSize="14px"
              fontWeight="400"
            >
              Search
            </Heading>
            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Map
              </Text>
            </LinkComponent>

            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Find Location
              </Text>
            </LinkComponent>

            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Find Land
              </Text>
            </LinkComponent>

            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Locate Point
              </Text>
            </LinkComponent>

            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Search by Word
              </Text>
            </LinkComponent>
          </Box>

          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color={COLORS.fontColor}
              mb="0.5rem"
              fontSize="14px"
              fontWeight="400"
            >
              Upload
            </Heading>
            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Map
              </Text>
            </LinkComponent>

            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Upload Your Bid
              </Text>
            </LinkComponent>

            <LinkComponent href="#">
              <Text fontSize="14px" fontWeight={300}>
                Upload Your GPS
              </Text>
            </LinkComponent>
          </Box>
        </Flex>
      </Box>
      <Flex maxW="64rem" mx="auto" alignItems="center" px={10}>
        <Text color="black" fontSize="19px" pl="0.5rem" textAlign="center">
          &copy; Develop and Design by PropChain. {new Date().getFullYear()},
          all copy observed
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
