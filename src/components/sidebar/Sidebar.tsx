import { Box, BoxProps } from "@chakra-ui/react";
import SidebarExplicit from "./SidebarExplicit";

export const Sidebar = (props: BoxProps) => {
  return (
    <Box
      as="aside"
      role="complementary"
      bg="bg.accent.default"
      width="full"
      alignSelf="start"
      position={{ base: "unset", lg: "sticky" }}
      top="36"
      {...props}
    >
      <SidebarExplicit></SidebarExplicit>
    </Box>
  );
};
