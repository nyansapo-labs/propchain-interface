"use client";

import React from "react";

import { Input, InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import { COLORS } from "@/constants/theme";

const SearchBoxAction: React.FC = () => {
  return (
    <InputGroup width="400px">
      <Input
        type="text"
        placeholder="Search here"
        // width="400px"
        h="46px"
        bg="#F5F5F5"
        border="none"
        fontSize="14px"
        color={COLORS.descFontColor}
        borderRadius="100px"
        fontWeight={300}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        _placeholder={{
          fontWeight: "300",
        }}
      />
      <InputRightElement pointerEvents="none" h="49px" cursor="pointer">
        <GoSearch color={COLORS.descFontColor} size="20px" />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBoxAction;
