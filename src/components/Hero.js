import {
  SimpleGrid,
  Flex,
  Badge,
  Box,
  chakra,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
function Hero() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
        py={24}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("gray.600", "gray.600")}
          lineHeight="shorter"
        >
          Helping children with special needs living in Somaliland.
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="sm"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          All the services provided by Ubad Gargaar are completely free.
        </chakra.p>
      </Flex>
      <Box>
        <Image
          src="images/ubad.jpg"
          alt="needy children"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
}

export { Hero };
