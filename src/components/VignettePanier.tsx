import { Badge, Box, Button, Flex, Toast } from "@chakra-ui/react";
import React from "react";
import {
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";

interface Props {
  cartItemsCount?: Number;
}

const VignettePanier = ({ cartItemsCount = 0 }: Props) => {
  return (
    <Flex as={Button}>
      <Badge pos="absolute" top={"20%"} left={"45%"}>
        {"0"}
      </Badge>
      <FaShoppingCart size={"40px"} />
    </Flex>
  );
};

export default VignettePanier;
