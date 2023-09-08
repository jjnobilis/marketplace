import { Box } from "@chakra-ui/react";
import { ProductCard } from "./components/products/ProductCard";
import { products } from "./data/_data";
import { ProductGrid } from "./components/products/ProductGrid";

export const App = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
);
export default App;
