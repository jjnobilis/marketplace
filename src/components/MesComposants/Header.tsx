import { VStack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <VStack>
      <NavBar></NavBar>
      <MenuBar></MenuBar>
    </VStack>
  );
};

export default Header;
