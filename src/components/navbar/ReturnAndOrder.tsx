import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const ReturnAndOrder = () => {
  return (
    <Box as={Button} maxW={20}>
      <Text fontSize="x-small">
        Retours <p />& Commandes
      </Text>
    </Box>
  );
};

export default ReturnAndOrder;
