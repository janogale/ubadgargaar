import React from "react";
import {
  chakra,
  Image,
  Box,
  Flex,
  useColorModeValue,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const ContactUs = () => {
  return (
    <Flex
      id="contact"
      w="full"
      alignItems="center"
      justifyContent="space-around"
    >
      <Flex
        bg={useColorModeValue("gray.50", "gray.800")}
        mx={{ lg: 8 }}
        width="100%"
        justify="space-around"
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box>
            <Image width={64} src="/images/logo.jpg" alt="Ubad Gargaar" />
          </Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            mb="3"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            Contact us
          </chakra.h2>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={PhoneIcon} color="green.500" />
              252 63 000079
            </ListItem>
            <ListItem>
              <ListIcon as={PhoneIcon} color="green.500" />
              252 65 000079
            </ListItem>
            <ListItem>
              <ListIcon as={EmailIcon} color="green.500" />
              info@ubadgargaar.org
            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
          <chakra.p fontSize="md" mt={3}>
            <strong>Address:</strong>{" "}
            <small>
              Libahyadda, Ahmed Dhagah, Near Star, Hargeisa, Somaliland
            </small>
          </chakra.p>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
