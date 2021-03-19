import { Flex, Text } from "@chakra-ui/react";

export const Footer = (props) => {
  return (
    <Flex as="footer" py={8} justify="center" color="primary.800" {...props}>
      <Text>&copy; {new Date().getFullYear()} - Ubadgargaar Org</Text>
    </Flex>
  );
};
