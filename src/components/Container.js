import { Flex, useColorMode } from "@chakra-ui/react";

export const Container = (props) => {
  return (
    <Flex
      as="main"
      flexGrow={2}
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    />
  );
};
