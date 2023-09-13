import {
  // Avatar,
  Box,
  Button,
  ButtonGroup,
  // Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import {  FiMenu, FiSearch } from "react-icons/fi";
// import { DocumentPopover } from "./DocumentPopover";
import logo from "../../assets/logo.png";
import { MobileDrawer } from "./MobileDrawer";
import LangueSelector from "./LangueSelector";
import SingInNavBarItem from "./SingInNavBarItem";
import ReturnAndOrder from "./ReturnAndOrder";
import ColorModeSelector from "./ColorModeSelector";
// import { Logo } from "./Logo";

const NavbarExplicit = () => {
  return (
    <Box as="section">
      <Box
        // borderBottomWidth="0px"
        bg="bg.accent.default"
        position="relative"
        zIndex="tooltip"
      >
        <Flex py="4">
          <Box px="2">
            <MobileDrawer />
            <Image
              display={{ base: "none", lg: "flex" }}
              src={logo}
              boxSize="40px"
            />
            {/* <Logo /> */}
          </Box>
          <Box flex="1">
            <InputGroup
            // maxW="2xs"
            // display={{ base: "none", md: "inline-flex" }}
            >
              <InputLeftElement>
                <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
              </InputLeftElement>
              <Input placeholder="Que désirez-vous ?" variant="filled.accent" />
            </InputGroup>
          </Box>
          <Box pl={2}>
            <HStack spacing={{ base: "2", md: "4" }}>
              <LangueSelector></LangueSelector>
              <SingInNavBarItem></SingInNavBarItem>
              <ReturnAndOrder></ReturnAndOrder>
              <ColorModeSelector></ColorModeSelector>
              {/*<BadgePanier></BadgePanier> 
              <Avatar boxSize="10" src="https://i.pravatar.cc/300" />*/}
            </HStack>
          </Box>
        </Flex>
        <Flex>
          {" "}
          <ButtonGroup
            size="lg"
            variant="text.accent"
            colorScheme="gray"
            spacing="4"
            pb="2"
            display={{ base: "none", lg: "flex" }}
          >
            <IconButton icon={<FiMenu />} aria-label="Menu" isRound />
            <Button>Deals du jour</Button>
            <Button>Service Client</Button>
            <Button>Cartes Cadeaux</Button>
            <Button>Vendre</Button>
            {/* <DocumentPopover /> */}
          </ButtonGroup>
          <Spacer />
        </Flex>
      </Box>
    </Box>
  );
};

export default NavbarExplicit;
