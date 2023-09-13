import {
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
// import { DocumentCollapse } from "./DocumentCollapse";
import { ToggleButton } from "./ToggleButton";

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: "inline-flex", lg: "none" }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              <Image src={logo} boxSize="40px" />
              <Button size="lg" variant="tertiary" justifyContent="start">
                Deal du jour
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start">
                Service Client
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start">
                Cartes Cadeaux
              </Button>
              {/* <DocumentCollapse /> */}
              <Button size="lg" variant="tertiary" justifyContent="start">
                Vendre
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
