"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Box, Text, HStack } from "@chakra-ui/react";
import { COLORS } from "@/constants/theme";
import { LuUpload } from "react-icons/lu";

const Action = () => {
  return (
    <Link href="#" passHref>
      <Box
        as={motion.button}
        px={3}
        py={2}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        bg={COLORS.actionBtnBG}
        borderRadius="8px"
        border="1px solid #0095D9"
        color="white"
        fontWeight={400}
      >
        <HStack>
          <Box>
            <LuUpload />
          </Box>

          <Text fontSize="sm" fontWeight="400">
            Upload an Aunction
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default Action;
