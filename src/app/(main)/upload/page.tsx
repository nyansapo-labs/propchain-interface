"use client";

import React, { useRef, useState } from "react";
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
} from "@chakra-ui/react";
import { COLORS } from "@/constants/theme";
import { MdGpsFixed } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PROPCHAIN_SVG } from "@/assets/svg";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  minimumBid: Yup.string().required("Minmum Bid is required"),
  pinGPS: Yup.string().required("Pin property GPS is required"),
  file: Yup.string().required("A file is required"),
  closeDate: Yup.string().required("Close Date is required"),
});

const UploadAunction = () => {
  const initialValues = {
    title: "",
    description: "",
    minimumBid: "",
    file: null,
    pinGPS: "",
    closeDate: null,
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [fileName, setFileName] = useState<string | null>(null);

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
              UPLOAD WHAT YOU WANT TO AUCTION
            </Heading>
            <Text
              fontSize="14px"
              mt="8px"
              fontWeight={400}
              color={COLORS.descFontColor}
            >
              Use this Opportunity get the best bid. Generate Good money.
            </Text>
          </Box>

          <Flex
            boxShadow={COLORS.mapNavBoxShadow}
            w="100%"
            mt="30px"
            borderRadius="10px"
            py="40px"
            px="40px"
            flexDir="column"
          >
            <Text color="#787777">
              Fill in this form to put your property up for biding.
            </Text>

            <Flex py="30px" px="30px" justify="center" alignItems="center">
              <Box>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, setFieldValue }) => (
                    <Form>
                      <Flex justify="space-between" gap={20}>
                        <VStack spacing={4} align="stretch">
                          <FormControl id="title">
                            <Field
                              as={Input}
                              type="text"
                              name="title"
                              bg="#F1F4F7"
                              border="1px solid #0095D91A"
                              w="341px"
                              h="40px"
                              fontWeight={300}
                              _focus={{
                                boxShadow: "none",
                                outline: "none",
                                border: "1px solid #0095D91A",
                              }}
                              placeholder="Auction Heading"
                              _placeholder={{
                                fontWeight: "300",
                              }}
                            />
                            <ErrorMessage name="title">
                              {(msg) => (
                                <Text mt="8px" color="red.500">
                                  {msg}
                                </Text>
                              )}
                            </ErrorMessage>
                          </FormControl>

                          <FormControl id="description" mt="30px">
                            <Field
                              as={Textarea}
                              name="description"
                              bg="#F1F4F7"
                              border="1px solid #0095D91A"
                              h="204px"
                              placeholder="Property Desription"
                              _focus={{
                                boxShadow: "none",
                                outline: "none",
                                border: "1px solid #0095D91A",
                              }}
                              _placeholder={{
                                fontWeight: "300",
                              }}
                            />
                            <ErrorMessage name="description">
                              {(msg) => (
                                <Text mt="8px" color="red.500">
                                  {msg}
                                </Text>
                              )}
                            </ErrorMessage>
                          </FormControl>

                          <FormControl id="minimumBid" mt="24px">
                            <Field
                              as={Input}
                              type="text"
                              name="minimumBid"
                              bg="#F1F4F7"
                              border="1px solid #0095D91A"
                              w="341px"
                              h="40px"
                              fontWeight={300}
                              _focus={{
                                boxShadow: "none",
                                outline: "none",
                                border: "1px solid #0095D91A",
                              }}
                              placeholder="Minimum Bid"
                              _placeholder={{
                                fontWeight: "300",
                              }}
                            />
                            <ErrorMessage name="minimumBid">
                              {(msg) => (
                                <Text mt="8px" color="red.500">
                                  {msg}
                                </Text>
                              )}
                            </ErrorMessage>
                          </FormControl>
                        </VStack>

                        <VStack spacing={4} align="stretch">
                          <FormControl id="pinGPS">
                            <InputGroup w="341px">
                              <Field
                                as={Input}
                                type="text"
                                name="pinGPS"
                                bg="#F1F4F7"
                                border="1px solid #0095D91A"
                                h="40px"
                                fontWeight={300}
                                _focus={{
                                  boxShadow: "none",
                                  outline: "none",
                                  border: "1px solid #0095D91A",
                                }}
                                placeholder="Pin property GPS"
                                _placeholder={{
                                  fontWeight: "300",
                                }}
                              />
                              <InputRightElement>
                                <Icon as={MdGpsFixed} color="#E71212" />
                              </InputRightElement>
                            </InputGroup>

                            <ErrorMessage name="pinGPS">
                              {(msg) => (
                                <Text mt="8px" color="red.500">
                                  {msg}
                                </Text>
                              )}
                            </ErrorMessage>
                          </FormControl>

                          <FormControl id="file" mt="30px">
                            <Flex
                              border="1px dashed #0095D980"
                              h="203px"
                              borderRadius="8px"
                              alignItems="center"
                              justifyContent="center"
                              flexDir="column"
                              onClick={() => fileInputRef.current?.click()}
                              cursor="pointer"
                            >
                              {PROPCHAIN_SVG().fileUploadSVG()}

                              <Button
                                mt="20px"
                                bg="#0095D9"
                                borderRadius="8px"
                                h="39px"
                                color="white"
                                fontWeight={400}
                                fontSize="14px"
                                _hover={{
                                  bg: "#0095D9",
                                }}
                                onClick={() => fileInputRef.current?.click()}
                              >
                                Browse
                              </Button>

                              {fileName && (
                                <Text
                                  as="span"
                                  fontWeight={350}
                                  fontSize="14px"
                                  color={COLORS.descFontColor}
                                  mt="10px"
                                >
                                  {fileName}
                                </Text>
                              )}

                              <Text
                                as="span"
                                fontWeight={350}
                                fontSize="14px"
                                color={COLORS.descFontColor}
                                mt="10px"
                              >
                                Upload or drag Jpeg or png of Property
                              </Text>
                            </Flex>
                            <Input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.jpg,.png"
                              display="none"
                              onChange={(e) => {
                                const file = e.currentTarget.files?.[0];
                                if (file) {
                                  setFieldValue("file", file);
                                  setFileName(file.name);
                                }
                              }}
                            />
                            <ErrorMessage name="file">
                              {(msg) => (
                                <Text mt="8px" color="red.500">
                                  {msg}
                                </Text>
                              )}
                            </ErrorMessage>
                          </FormControl>

                          <FormControl id="closeDate" mt="30px">
                            <Field
                              as={Input}
                              type="date"
                              name="closeDate"
                              bg="#F1F4F7"
                              border="1px solid #0095D91A"
                              w="341px"
                              h="40px"
                              fontWeight={300}
                              _focus={{
                                boxShadow: "none",
                                outline: "none",
                                border: "1px solid #0095D91A",
                              }}
                            />
                            <ErrorMessage name="closeDate">
                              {(msg) => <Text color="red.500">{msg}</Text>}
                            </ErrorMessage>
                          </FormControl>
                        </VStack>
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
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </ContainerWrapper>
    </Box>
  );
};

export default UploadAunction;
