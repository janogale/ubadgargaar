import React from "react";

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Services() {
  return (
    <Flex p={4} justifyContent="center" alignItems="center">
      <Box
        id="programs"
        bg={useColorModeValue("white", "gray.800")}
        py={10}
        mx="auto"
      >
        <chakra.h2
          mb={10}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="extrabold"
          textAlign="center"
          color={useColorModeValue("black", "gray.100")}
          lineHeight="shorter"
          letterSpacing="tight"
        >
          Services provided by the center
        </chakra.h2>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={10}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 5, md: 10 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize="xl"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              1. Provide daily physiotherapy sessions for children with Cerebral
              Palsy.
            </chakra.h2>
          </Box>
          <Box>
            <Image src="/images/ubad1.jpg" alt="Ubad Gargaar" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={10}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 5, md: 10 }}
        >
          {" "}
          <Box>
            <Image src="/images/ubad2.jpg" alt="Ubad Gargaar" />
          </Box>
          <Box>
            <chakra.h2
              mb={4}
              fontSize="xl"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              2. Provide a stimulating learning environment for children with
              Autism and Down syndrome.
            </chakra.h2>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={10}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 5, md: 10 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize="xl"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              3. Teach specialized curriculum using individual learning plans to
              teach children with Autism and Down syndrome.
            </chakra.h2>
          </Box>
          <Box>
            <Image src="/images/ubad3.jpg" alt="Ubad Gargaar" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={10}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 5, md: 10 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize="xl"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              4. Provide parent workshops to enable parents to understand their
              children’s individual special needs and how each parent can
              support their child at home to thrive.
            </chakra.h2>
            <chakra.h2
              mb={4}
              fontSize="xl"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              5. Provide counseling sessions for parents with Special needs
              children to accept and respect their children’s additional needs.
            </chakra.h2>
            <chakra.h2
              mb={4}
              fontSize="xl"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              6. To enable parents with the information and knowledge to deal
              with the stigma of having a child with Special needs.
            </chakra.h2>
          </Box>
          <Box>
            <Image src="/images/ubad4.jpg" alt="Ubad Gargaar" />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
