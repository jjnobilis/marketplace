import {
  HStack,
  IconButton,
  CheckboxIcon,
  MenuIcon,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import React from "react";

const MenuBar = () => {
  return (
    <HStack>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Button colorScheme="teal" size="md">
        Deals du jour
      </Button>
      <Button colorScheme="teal" size="md">
        Service Client
      </Button>
      <Button colorScheme="teal" size="md">
        Cartes cadeaux
      </Button>
      <Button colorScheme="teal" size="md">
        Vendre
      </Button>
    </HStack>
  );
};

export default MenuBar;
