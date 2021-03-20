import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function Donate() {
  return (
    <Flex
      id="donate"
      flexDir="column"
      bg="gray.50"
      position="relative"
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <chakra.h2
        fontSize={{ base: "3xl", sm: "4xl" }}
        mb="6"
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color={useColorModeValue("gray.600", "gray.100")}
      >
        Ready to Donate
      </chakra.h2>
      <chakra.p mb="6" px="3">
        <chakra.span display="block">
          Please use below Accounts to send your donation. Jazakalahu khair
        </chakra.span>
      </chakra.p>
      <Box
        pos="relative"
        h={{ base: "200px", md: "400px" }}
        textAlign="center"
        width="100%"
        _before={{
          content: '""',
          bgImage: "url(/images/donate.jpg)",
          bgSize: "contain",
          bgRepeat: "no-repeat",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.9,
        }}
      >
        <Box
          maxW="7xl"
          w={{ base: "360px", lg: "4xl" }}
          mx="auto"
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        ></Box>
      </Box>
    </Flex>
  );
}
