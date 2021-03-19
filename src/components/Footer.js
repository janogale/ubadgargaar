import { Flex, Text } from "@chakra-ui/react";

export const Footer = (props) => {
  return (
    <Flex as="footer" py="8rem" justify="center" {...props}>
      <Text>&copy; {new Date().getFullYear()} - Ubadgargaar Org</Text>
    </Flex>
  );
};
