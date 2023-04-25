import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
  const products = useSelector((state) => state.products.recommendedProducts);

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2rem"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Recommended Products
      </Text>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="3rem"
      >
        {products.map((product) => (
          <RecommendedCard key={product.id} {...product} />
        ))}
      </Box>
    </Box>
  );
};

export default Recommended;
