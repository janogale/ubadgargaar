import { Flex, Text } from "@chakra-ui/react";

export const Footer = (props) => {
  return (
    <Flex
      as="footer"
      borderTop="2px"
      borderTopColor="gray"
      flexDir="column"
      mt={4}
      py={20}
      align="center"
      width="100%"
      color="primary.800"
      {...props}
    >
      <Text>&copy; {new Date().getFullYear()} - Ubadgargaar Org</Text>
      <Text fontSize="md" mt="4">
        <strong>Address:</strong>{" "}
        <small>Libahyadda, Ahmed Dhagah, Near Star, Hargeisa, Somaliland</small>
      </Text>
    </Flex>
  );
};
