"use client";

import React, { useRef, useState, useEffect } from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  Stack,
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  Center,
  Icon,
  VStack,
  FormControl,
  Textarea,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { COLORS } from "@/constants/theme";
import { MdGpsFixed } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PROPCHAIN_SVG } from "@/assets/svg";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import propchain_ABI from "@/constants/abi/propchain.abi.json";
import { propchain_contractAddress } from "@/utils/config";
import SuccessModal from "./SuccessModal";

const validationSchema = Yup.object({
  gpsAddress: Yup.string().required("GPS Address is required"),
  startingPrice: Yup.string().required("Auction starting price is required"),
  closeDate: Yup.string().required("Close Date is required"),
});

const validationRegisterSchema = Yup.object({
  gpsLocation: Yup.string().required("GPSLocation is required"),
  gpsAddress: Yup.string().required("GPSAddress is required"),
  ghanaCradId: Yup.string().required("GPSLocation is required"),
});

const UploadAunction: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const initialRegisterValues = {
    gpsLocation: "",
    gpsAddress: "",
    ghanaCardId: "",
  };

  const initialValues = {
    gpsAddress: "",
    startingPrice: "",
    closeDate: null,
  };

  const [file, setFile] = useState<string>("");
  const [cid, setCid] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);

  //**IPFS Upload */
  const uploadFile = async (fileToUpload: any) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      console.log("uploading....");
      setCid(resData.IpfsHash);
      console.log("uploaded....");
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading Ghana card Id to IPFS");
    }
  };

  const {
    data: hash,
    isPending,
    isSuccess: isTrxSubmitted,
    isError: isWriteContractError,
    writeContract,
    error: WriteContractError,
    reset,
  } = useWriteContract();

  const {
    isLoading: isRegistering,
    isSuccess: isRegisterConfirmed,
    isError: isWaitTrxError,
    error: WaitForTransactionReceiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const RegisterLandOwners = async () => {
    // First, upload the file to IPFS and get the CID**hash
    console.log(file, "this is file");
    if (file) {
      await uploadFile(file);
    }

    console.log("sending t");

    writeContract({
      address: propchain_contractAddress,
      abi: propchain_ABI,
      functionName: "registerProperty",
      args: [
        initialRegisterValues.gpsLocation,
        initialRegisterValues.gpsAddress,
        cid || initialRegisterValues.ghanaCardId,
      ],
    });
    console.log("pass through this");
  };

  const istransactionLoading = uploading || isPending || isRegistering;

  const handleRegisterSubmit = (values: typeof initialRegisterValues) => {
    console.log(values);
    setFile(values.ghanaCardId);
    RegisterLandOwners();
  };

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission logic
    console.log(values);
  };

  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      flexDir="column"
      py="8%"
      color="black"
    >
      <ContainerWrapper>
        <Flex flexDir="column">
          <Box>
            <Heading fontSize="30px" fontWeight={400} textTransform="uppercase">
              LAND OWNER AUCTIONS
            </Heading>
            <Text
              fontSize="14px"
              mt="8px"
              fontWeight={400}
              color={COLORS.descFontColor}
            >
              Choose an action below to proceed.
            </Text>
          </Box>

          <Tabs mt="30px">
            <TabList>
              <Tab>Register as a Land Owner</Tab>
              <Tab>Create an Auction as a Land Owner</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text color="#787777" py="30px">
                  Fill in this form to register as a land owner.
                </Text>
                {/* Registration form goes here */}
                <Formik
                  initialValues={initialRegisterValues}
                  validationSchema={validationRegisterSchema}
                  onSubmit={handleRegisterSubmit}
                >
                  {({ isSubmitting, setFieldValue }) => (
                    <Form>
                      <Flex flexDir="column">
                        <FormControl id="gpsLocation">
                          <Field
                            as={Input}
                            type="text"
                            name="gpsLocation"
                            bg="#F1F4F7"
                            border="1px solid #0095D91A"
                            w="100%"
                            h="40px"
                            fontWeight={300}
                            _focus={{
                              boxShadow: "none",
                              outline: "none",
                              border: "1px solid #0095D91A",
                            }}
                            placeholder="Location"
                            _placeholder={{
                              fontWeight: "300",
                            }}
                          />
                          <ErrorMessage name="gpsLocation">
                            {(msg) => (
                              <Text mt="8px" color="red.500">
                                {msg}
                              </Text>
                            )}
                          </ErrorMessage>
                        </FormControl>

                        <FormControl id="gpsAddress" mt="15px">
                          <Field
                            as={Input}
                            name="gpsAddress"
                            bg="#F1F4F7"
                            border="1px solid #0095D91A"
                            w="100%"
                            h="40px"
                            placeholder="GPS Address"
                            _focus={{
                              boxShadow: "none",
                              outline: "none",
                              border: "1px solid #0095D91A",
                            }}
                            _placeholder={{
                              fontWeight: "300",
                            }}
                          />
                          <ErrorMessage name="gpsAddress">
                            {(msg) => (
                              <Text mt="8px" color="red.500">
                                {msg}
                              </Text>
                            )}
                          </ErrorMessage>
                        </FormControl>

                        <FormControl id="ghanaCardId" mt="15px">
                          <Field
                            as={Input}
                            name="ghanaCardId"
                            bg="#F1F4F7"
                            border="1px solid #0095D91A"
                            w="100%"
                            h="40px"
                            placeholder="Ghana Card ID"
                            _focus={{
                              boxShadow: "none",
                              outline: "none",
                              border: "1px solid #0095D91A",
                            }}
                            _placeholder={{
                              fontWeight: "300",
                            }}
                          />
                          <ErrorMessage name="ghanaCardId">
                            {(msg) => (
                              <Text mt="8px" color="red.500">
                                {msg}
                              </Text>
                            )}
                          </ErrorMessage>
                        </FormControl>
                      </Flex>

                      <HStack mt="30px" gap={5}>
                        <Button
                          bg={COLORS.actionBGBtn}
                          _hover={{
                            bg: `${COLORS.actionBGBtn}`,
                          }}
                          h="39px"
                          borderRadius="5px"
                          boxShadow="0px 4px 10px 0px #00000059"
                          py="10px"
                          px="20px"
                          color="white"
                          fontWeight={400}
                          isLoading={istransactionLoading}
                          onClick={RegisterLandOwners}
                        >
                          Register
                        </Button>
                      </HStack>
                    </Form>
                  )}
                </Formik>
              </TabPanel>

              <TabPanel>
                <Text color="#787777" py="30px">
                  Fill in this form to put your property up for bidding.
                </Text>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, setFieldValue }) => (
                    <Form>
                      <Flex flexDir="column">
                        <FormControl id="gpsAddress">
                          <Field
                            as={Input}
                            type="text"
                            name=" gpsAddress"
                            bg="#F1F4F7"
                            border="1px solid #0095D91A"
                            w="100%"
                            h="40px"
                            fontWeight={300}
                            _focus={{
                              boxShadow: "none",
                              outline: "none",
                              border: "1px solid #0095D91A",
                            }}
                            placeholder="GPS Address"
                            _placeholder={{
                              fontWeight: "300",
                            }}
                          />
                          <ErrorMessage name=" gpsAddress">
                            {(msg) => (
                              <Text mt="8px" color="red.500">
                                {msg}
                              </Text>
                            )}
                          </ErrorMessage>
                        </FormControl>

                        <FormControl id="startingPrice" mt="30px">
                          <Field
                            as={Input}
                            name="startingPrice"
                            bg="#F1F4F7"
                            border="1px solid #0095D91A"
                            h="40px"
                            placeholder="Starting Price"
                            _focus={{
                              boxShadow: "none",
                              outline: "none",
                              border: "1px solid #0095D91A",
                            }}
                            _placeholder={{
                              fontWeight: "300",
                            }}
                          />
                          <ErrorMessage name="startingPrice">
                            {(msg) => (
                              <Text mt="8px" color="red.500">
                                {msg}
                              </Text>
                            )}
                          </ErrorMessage>
                        </FormControl>

                        <FormControl id="closeDate" mt="24px">
                          <Field
                            as={Input}
                            type="date"
                            name="closeDate"
                            bg="#F1F4F7"
                            border="1px solid #0095D91A"
                            w="100%"
                            h="40px"
                            fontWeight={300}
                            _focus={{
                              boxShadow: "none",
                              outline: "none",
                              border: "1px solid #0095D91A",
                            }}
                            // placeholder="Minimum Bid"
                            _placeholder={{
                              fontWeight: "300",
                            }}
                          />
                          <ErrorMessage name="closeDate">
                            {(msg) => (
                              <Text mt="8px" color="red.500">
                                {msg}
                              </Text>
                            )}
                          </ErrorMessage>
                        </FormControl>
                      </Flex>

                      <HStack mt="30px" gap={5}>
                        <Button
                          bg={COLORS.actionBGBtn}
                          _hover={{
                            bg: `${COLORS.actionBGBtn}`,
                          }}
                          h="39px"
                          borderRadius="5px"
                          boxShadow="0px 4px 10px 0px #00000059"
                          py="10px"
                          px="20px"
                          color="white"
                          fontWeight={400}
                        >
                          Upload Auction
                        </Button>

                        <Button
                          border="0.5px solid #C1C4C5"
                          bg="#E3E4E6"
                          py="10px"
                          px="20px"
                          fontWeight={400}
                          h="39px"
                          borderRadius="5px"
                          _hover={{
                            bg: `#E3E4E6`,
                          }}
                          fontSize="14px"
                          color={COLORS.descFontColor}
                        >
                          Save as Draft
                        </Button>
                      </HStack>
                    </Form>
                  )}
                </Formik>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>

        {
          <SuccessModal
            onClose={onClose}
            onOpen={onOpen}
            isOpen={isRegisterConfirmed}
          />
        }
      </ContainerWrapper>
    </Box>
  );
};

export default UploadAunction;
