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
      height="100%"
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
