import { Box, Button, ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SingInNavBarItem = () => {
  return (
    <Box as={Button} width="100px" height="-moz-max-content">
      <ButtonGroup>
        <Text fontSize="10">
          Bonjour, <p /> Enregistrez-vous
          {/* <p>Compte et Listes </p> */}
        </Text>
        {/* <IconButton
          icon={<FaChevronDown />}
          aria-label="select"
          boxSize="10"
        ></IconButton> */}
      </ButtonGroup>
    </Box>
  );
};

export default SingInNavBarItem;
