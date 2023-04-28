import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import RecommendedCard from "./RecommendedCard";

const Categories = () => {
  const products = useSelector((state) => state.products.products);
  const category = useSelector((state) => state.products.category);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="2rem"
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <RecommendedCard key={product.id} {...product} />
        ))
      ) : (
        <Text>No products in this category</Text>
      )} 
    </Box>
  );
};

export default Categories;
