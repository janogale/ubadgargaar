import Layout from "../components/Layout";
import { Divider } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import About from "../components/About";
import { Container } from "../components/Container";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";

const Index = () => (
  <Layout>
    <Container>
      <Hero />
      <Divider my={8} />
      <About />
      <Divider my={8} />
      <WhatWeDo />
      <Divider my={8} />
      <Services />
    </Container>
  </Layout>
);

export default Index;
