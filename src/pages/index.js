import Layout from "../components/Layout";
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";

const Index = () => (
  <Layout>
    <Container height="100vh">
      <Hero title="Ubad Gargaar" />
      <Main></Main>
    </Container>
  </Layout>
);

export default Index;
