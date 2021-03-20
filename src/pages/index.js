import Layout from "../components/Layout";
import { Divider } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import About from "../components/About";
import { Container } from "../components/Container";
import WhatWeNeed from "../components/WhatWeNeed";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Donate from "../components/Donate";

const Index = () => (
  <Layout>
    <Container>
      <Hero />
      <Divider my={8} />
      <About />
      <Divider my={8} />
      <Donate />
      <Divider my={8} />
      <WhatWeNeed />
      <Divider my={8} />
      <Services />
      <Divider my={8} />
      <ContactUs />
    </Container>
  </Layout>
);

export default Index;
