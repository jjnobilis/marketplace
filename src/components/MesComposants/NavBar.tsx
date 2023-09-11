import {
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import LangueSelector from "./LangueSelector";
import RegisterButton from "./RegisterButton";
import VignettePanier from "./VignettePanier";
import ModeCouleurSelector from "./ModeCouleurSelector";

const NavBar = () => {
  return (
    <HStack padding={2} justifyContent="space-between">
      <Grid templateColumns="repeat(9, 1fr)" gap={1}>
        <GridItem colSpan={1} w="100%" h="10">
          <Box
            display="flex"
            alignItems="left"
            justifyContent="left"
            width="100%"
          >
            <Text align="center">Logo</Text>
            <IconButton colorScheme="teal" size="md" aria-label="cart">
              Logo du site
            </IconButton>
            {/* <FaSuperpowers /> */}
          </Box>
        </GridItem>
        <GridItem colSpan={6} w="100%" h="10">
          {" "}
          <SearchInput onSearch={() => {}}></SearchInput>
        </GridItem>
        <GridItem w="100%" h="10">
          <HStack>
            <Box>
              <LangueSelector></LangueSelector>
            </Box>
            <Box>
              <RegisterButton></RegisterButton>
            </Box>
            <Box>
              <VignettePanier></VignettePanier>
            </Box>
          </HStack>
        </GridItem>
        <GridItem w="100%" h="10">
          <Box>
            <ModeCouleurSelector></ModeCouleurSelector>
          </Box>
        </GridItem>
      </Grid>
    </HStack>
  );
};

export default NavBar;
