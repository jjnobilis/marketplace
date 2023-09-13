import { IconButton, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

const ColorModeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "dark" ? <FiMoon /> : <FiSun />}
      aria-label={colorMode === "dark" ? "Sombre" : "Clair"}
      // display={{ base: "flex", lg: "none" }}
      isRound
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSelector;
