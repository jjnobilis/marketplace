import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ModeCouleurSelector = () => {
  const { toggleColorMode } = useColorMode();
  const iconColorMode = useColorModeValue("FaMoon", "FaSun");

  return (
    <Box as={Button} onClick={toggleColorMode}>
      {iconColorMode === "FaMoon" ? <FaMoon /> : <FaSun />}
    </Box>
  );
};

export default ModeCouleurSelector;
