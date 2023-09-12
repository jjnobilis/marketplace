import { Box } from "@chakra-ui/react";
import CategoryList from "./CategoryList";

export const Main = () => {
  return (
    <Box as="main" role="main" width="full" bg="bg.accent.default">
      <CategoryList></CategoryList>
    </Box>
  );
};
