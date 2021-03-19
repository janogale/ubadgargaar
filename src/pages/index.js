import Layout from "../components/Layout";
import { Divider } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import About from "../components/About";
import { Container } from "../components/Container";

const Index = () => (
  <Layout>
    <Container>
      <Hero />
      <Divider my={8} />
      <About />
    </Container>
  </Layout>
);

export default Index;
