"use client";

import React from "react";
import {
  Stack,
  Flex,
  Box,
  Image,
  Text,
  ModalCloseButton,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import ModalComponent from "@/components/ModalComponent";

const SuccessModal = ({
  onOpen,
  isOpen,
  onClose,
}: {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <ModalComponent
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Stack w="100%">
        <Flex justify="center" alignItems="center" flexDir="column">
          <Image src="image/check_successful.png" w={"122px"} alt="an image" />

          <VStack w={"100%"} textAlign="center" py="10px" px="10px">
            <Text fontWeight={600} mt="10px" fontSize="18px">
              Your detail has been Submitted! Thank you.
            </Text>
            <Text as="span" fontSize="14px" pt="20px">
              Your Location uploaded is going to be attached with Your Ghana
              Card. Ghana Post will approve your Pin.
            </Text>
          </VStack>

          <Button onClick={onClose}>Cancel</Button>
        </Flex>
      </Stack>
    </ModalComponent>
  );
};

export default SuccessModal;
