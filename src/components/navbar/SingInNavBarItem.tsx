import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";

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
