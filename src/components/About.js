import {
  SimpleGrid,
  Flex,
  Box,
  chakra,
  Icon,
  Stack,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

import { PlusSquareIcon, ViewIcon } from "@chakra-ui/icons";

function About() {
  const Feature = (props) => {
    return (
      <Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {props.title} <chakra.span ml="5">{props.icon}</chakra.span>
          </chakra.dt>
          <chakra.dd mt={4} color={useColorModeValue("gray.600", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg="primary.600"
      rounded="xl"
      p={4}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("primary.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Ubadgargaar
            </chakra.h2>
            <chakra.p
              mt={6}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              Who We Are
            </chakra.p>
            <chakra.p
              mt={6}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Ubad Gargaar center was established in 2019, this center has been
              created for primary school-age children with special needs living
              in Somaliland. All the services provided by Ubad Gargaar are
              completely free.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 20 }}
              px={{ base: 10, md: 20 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Our Mission"
                icon={<PlusSquareIcon w={5} h={5} color="primary.800" />}
              >
                Ubad Gargaar center is a safe, and caring learning environment
                where all are empowered and respected
                <Divider my={3} color="transparent" />
                <ListItem>
                  To have high expectations and celebrate achievement.
                </ListItem>
                <ListItem>Suppression Management</ListItem>
                <ListItem>To develop lifelong learning skills</ListItem>
                <ListItem>
                  To move Ubad Gargaar pupils from dependent children to
                  independent adults
                </ListItem>
              </Feature>

              <Feature
                title="Our Vission"
                icon={<ViewIcon w={5} h={5} color="primary.800" />}
              >
                For Ubad Gargaar Center to be recognized as an innovative Centre
                of Excellence, providing an outstanding, personalized education
                for all special needs pupils of Somaliland. What Ubad Gargar
                needs To continue providing the best possible services to our
                special needs pupils and their families and as the needs for our
                services grow rapidly.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

function ListItem(props) {
  return (
    <Flex mt="2">
      <Icon
        fontSize="lg"
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
        color={useColorModeValue("gray.600", "gray.400")}
        {...props}
      />
    </Flex>
  );
}

export default About;
