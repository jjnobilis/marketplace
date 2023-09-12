import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiBell, FiSearch } from "react-icons/fi";
import { DocumentPopover } from "./DocumentPopover";
import logo from "../../assets/logo.png";
import { MobileDrawer } from "./MobileDrawer";

const NavbarExplicit = () => {
  return (
    <Box as="section">
      <Box
        borderBottomWidth="0px"
        bg="bg.accent.default"
        position="relative"
        zIndex="tooltip"
      >
        <Container py="4">
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10">
              <HStack spacing="1" alignSelf="flex-start">
                <MobileDrawer />
                <Image src={logo} boxSize="60px" />
                {/* <Logo /> */}
              </HStack>
              <ButtonGroup
                size="lg"
                variant="text.accent"
                colorScheme="gray"
                spacing="8"
                display={{ base: "none", lg: "flex" }}
              >
                <Button>Dashbaord</Button>
                <Button>Analysis</Button>
                <DocumentPopover />
                <Button>History</Button>
              </ButtonGroup>
            </HStack>
            <HStack spacing={{ base: "2", md: "4" }}>
              <InputGroup
                maxW="2xs"
                display={{ base: "none", md: "inline-flex" }}
              >
                <InputLeftElement>
                  <Icon as={FiSearch} color="fg.accent.muted" fontSize="lg" />
                </InputLeftElement>
                <Input placeholder="Search" variant="filled.accent" />
              </InputGroup>
              <ButtonGroup variant="tertiary.accent" spacing="1">
                <IconButton
                  icon={<FiSearch />}
                  aria-label="Serach"
                  display={{ base: "flex", lg: "none" }}
                  isRound
                />
                <IconButton
                  icon={<FiBell />}
                  aria-label="Show notification"
                  isRound
                />
              </ButtonGroup>
              <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default NavbarExplicit;
