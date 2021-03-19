import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Button,
  VStack,
} from "@chakra-ui/react";

function WhatWeDo() {
  const Feature = (props) => {
    return (
      <Flex>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("primary.500", "primary.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
        <chakra.p
          fontSize="md"
          color={useColorModeValue("gray.700", "gray.400")}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Flex
      bg="gray.300"
      rounded="md"
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        px={10}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 2 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              What We Need
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Ubad gargaar is non-profit Organization, your support will enable
              us to provide and assist our Children with special needs
            </chakra.p>
            <Button
              as="a"
              href="#"
              variant="solid"
              w={{ base: "full", sm: "auto" }}
              colorScheme="primary"
              size="lg"
            >
              Donate Now
            </Button>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <Feature>
              A Spacious building where children can learn and develop to the
              best of their abilities
            </Feature>
            <Feature>Monthly running cost</Feature>
            <Feature>
              A minibus to transport children to and from the center
            </Feature>
            <Feature>
              Specialized team e.g. speech and language therapist, educational
              psychologist, and occupational therapist
            </Feature>
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
export default WhatWeDo;
