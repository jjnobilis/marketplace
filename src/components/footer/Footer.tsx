import { Box, BoxProps, Container } from "@chakra-ui/react";
import FooterExplicit from "./FooterExplicit";

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
      <Container>
        <FooterExplicit></FooterExplicit>
      </Container>
    </Box>
  );
};
