import { Container, Flex, Stack } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <Flex direction="column" flex="1">
      <Navbar />
      <Container py="16" flex="1">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "12", lg: "16" }}
          flex="1"
        >
          <Sidebar maxW={{ lg: "36" }} />
          <Main />
          <Sidebar maxW={{ lg: "72" }} />
        </Stack>
      </Container>
      <Footer />
    </Flex>
  );
}

export default App;
