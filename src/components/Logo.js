import React from "react";
import Image from "next/image";

import { Box, Flex, Text, Avatar, WrapItem } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Flex {...props} justify="center" align="center">
      <Box>
        <Avatar size="lg" name="Ubad Gargaar" src="/images/logo.png" />
      </Box>
      <Text ml="2" fontSize="lg" fontWeight="bold">
        UBAD GARGAAR
      </Text>
    </Flex>
  );
}
