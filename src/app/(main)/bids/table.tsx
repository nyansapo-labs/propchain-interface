"use client";

import {
  HStack,
  Icon,
  Flex,
  Text,
  useToast,
  Avatar,
  Input,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SortingFn, createColumnHelper } from "@tanstack/react-table";
import { useStyles } from "./style";
import { COLORS } from "@/constants/theme";
import { BsChevronExpand } from "react-icons/bs";
// import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import { AunctionData, AunctionDataProps } from "@/constants/dummyJson";

interface BidFormValues {
  bidAmount: string;
}

const columnHelper = createColumnHelper<AunctionDataProps>();

interface SortingFns {
  myCustomSorting: SortingFn<unknown>;
}

export function ColumsFN() {
  const { iconsSize, prodImg } = useStyles();

  const [copied, setCopied] = useState<boolean>(false);
  const toast = useToast();

  const initialValues: BidFormValues = { bidAmount: "" };

  const handleSubmit = (values: BidFormValues) => {
    console.log("Bid submitted:", values.bidAmount);
  };

  return [
    columnHelper.accessor("aunction.image", {
      header: () => (
        <HStack color="black" ml={"30px"}>
          <Text>Image</Text>
        </HStack>
      ),
      cell: (info) => (
        <HStack mx="30px" width={"200px"}>
          <Image
            src={info.getValue()}
            alt="properties img"
            {...prodImg}
            mixBlendMode={"multiply"}
          />
        </HStack>
      ),
    }),
    columnHelper.accessor("aunction.listnumber", {
      header: ({ column }) => (
        <HStack
          color="black"
          as="button"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          mx="20px"
        >
          <Text>List Number</Text>
          {/* <Icon as={BsChevronExpand} w="18px" h="18px" /> */}
        </HStack>
      ),
      cell: (info) => (
        <HStack
          borderColor="black"
          justify={"space-between"}
          px="10px"
          py="5px"
          w="50px"
          mx="20px"
          color="black"
        >
          <Text fontSize="14px" fontWeight={400}>
            {info.getValue()}
          </Text>
        </HStack>
      ),
    }),
    columnHelper.accessor("aunction.propdesc", {
      header: ({ column }) => (
        <HStack
          color="black"
          as="button"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          mx="30px"
        >
          <Text>Property Description</Text>

          {/* <Icon as={BsChevronExpand} w="18px" h="18px" /> */}
        </HStack>
      ),
      cell: (info) => (
        <Flex flexDir="column" w="200px" mx="30px">
          <Text fontWeight={600} fontSize="14px">
            {info.getValue().title}
          </Text>
          {/* {moment(info?.row?.original?.createdAt).format("MMM Do, YYYY")} */}
          <Text
            fontSize="14px"
            fontWeight={400}
            mt="10px"
            maxW="200px"
            color={COLORS.descFontColor}
          >
            {info.getValue().desc}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor("bid", {
      header: ({ column }) => (
        <HStack
          color="black"
          as="button"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          mx="30px"
        >
          <Text>Bids</Text>

          {/* <Icon as={BsChevronExpand} w="18px" h="18px" /> */}
        </HStack>
      ),
      cell: (info) => (
        <Flex flexDir="column" mx="30px">
          <HStack>
            <Flex flexDir="column">
              <Text fontWeight={600} fontSize="14px" color="black">
                {info.getValue().bidM.title}
              </Text>
              <Text fontSize="14px" fontWeight={600} color="#E71212" mt="8px">
                {info.getValue().bidM.amount}
              </Text>
            </Flex>

            <Flex flexDir="column">
              <Text fontWeight={600} fontSize="14px" color="black">
                {info.getValue().bidC.title}
              </Text>
              <Text
                fontSize="14px"
                fontWeight={600}
                color="GHc 20,000"
                mt="8px"
              >
                {info.getValue().bidC.amount}
              </Text>
            </Flex>

            <Flex flexDir="column">
              <Text fontWeight={600} fontSize="14px" color="black">
                {info.getValue().myBid}
              </Text>

              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                  <Form>
                    <FormControl id="bidAmount" mt="8px">
                      <FormLabel>Bid Amount</FormLabel>
                      <InputGroup>
                        <Field
                          as={Input}
                          type="text"
                          name="bidAmount"
                          placeholder=""
                          bg="white"
                          border="1px solid #E3E4E6"
                          _focus={{
                            boxShadow: "none",
                            outline: "none",
                            border: "1px solid #E3E4E6",
                          }}
                          _placeholder={{
                            fontWeight: "300",
                          }}
                        />
                        <InputRightElement width="auto">
                          <Button
                            type="submit"
                            size="sm"
                            bg="#0095D9"
                            color="white"
                            _hover={{ bg: "#007bbd" }}
                            isLoading={isSubmitting}
                          >
                            Place Bid
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <ErrorMessage name="bidAmount">
                        {(msg) => (
                          <Text mt="6px" color="red.500">
                            {msg}
                          </Text>
                        )}
                      </ErrorMessage>
                    </FormControl>
                  </Form>
                )}
              </Formik>
            </Flex>
          </HStack>

          <Flex
            bg="#F5F5F5"
            w="393px"
            h="70px"
            mt="15px"
            py="10px"
            px="10px"
            flexDir="column"
            borderRadius="10px"
          >
            <HStack>
              <Text color="#262626">Close Date</Text>
              <Text fontWeight={400} fontSize="14px" color="#E71212">
                {info.getValue().closeDate}
              </Text>
            </HStack>

            <HStack mt="8px">
              <Text color="#262626">Count Down</Text>
              <Text fontWeight={400} fontSize="14px" color="#E71212">
                {info.getValue().countDown}
              </Text>
            </HStack>
          </Flex>
          {/* {moment(info?.row?.original?.updatedAt).format("MMM Do, YYYY")} */}
        </Flex>
      ),
    }),
  ];
}
