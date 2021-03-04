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
  <Container height="100vh">
    <Hero title="Ubad Gargaar" />
    <Main></Main>

    <DarkModeSwitch />
    <Footer>
      <Text> 🏗 Under Construction 🚧</Text>
    </Footer>
  </Container>
);

export default Index;
