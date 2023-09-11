import { Badge, Button, Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const VignettePanier = () => {
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
