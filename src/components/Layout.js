import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import { Footer } from "./Footer";

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      minH="100vh"
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}