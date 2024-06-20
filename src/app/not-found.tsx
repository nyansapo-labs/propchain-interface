"use client";
import { Flex, Text, Center, Link } from "@chakra-ui/react";
import { PROPCHAIN_SVG } from "@/assets/svg";
import { COLORS } from "@/constants/theme";

export const NotFound = () => {
  const { root, home } = useStyles();

  return (
    <Flex
      style={root}
      flexDir="column"
      minH="100vh"
      bgImage={["/image/illustration_image_BG.png"]}
      bgSize={"cover"}
      bgPos={["", "inherit", "inherit"]}
    >
      {PROPCHAIN_SVG().notfoundIllustration()}
      <Text style={home} textTransform="uppercase">
        Opps! Page Not Found
      </Text>

      <Center
        as={Link}
        bg={COLORS.actionBGBtn}
        borderRadius={"8px"}
        color="white"
        cursor="pointer"
        h="46px"
        py="10px"
        px="20px"
        mt="40px"
        href="/"
        style={{
          textDecoration: "none",
        }}
        fontSize="14px"
      >
        Go Back to Home
      </Center>
    </Flex>
  );
};

export default NotFound;

const useStyles = () => {
  return {
    root: {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    home: {
      color: "#262626",
      marginTop: "30px",
      fontSize: "17px",
      fontWeight: "600",
      paddingInline: 30,
    },
  };
};
