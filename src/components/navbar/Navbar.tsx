import { Box, Container } from "@chakra-ui/react";
import { useNavbar } from "../../hooks/useNavBar";
import NavbarExplicit from "./NavbarExplicit";

export const Navbar = () => {
  const { rootProps } = useNavbar();

  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg.accent.default"
      color="fg.accent.default"
      {...rootProps}
    >
      <Container>
        <NavbarExplicit />
      </Container>
    </Box>
  );
};
