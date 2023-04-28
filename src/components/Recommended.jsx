import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import RecommendedCard from "./RecommendedCard";
import GenericBox from "./styles/GenericBox";

const Recommended = () => {
  const products = useSelector((state) => state.products.recommendedProducts);

  return (
    <GenericBox direction="column">
      <Text fontSize="2xl" fontWeight="bold">
        Recommended Products
      </Text>
      <GenericBox>
        {products.map((product) => (
          <RecommendedCard key={product.id} {...product} />
        ))}
      </GenericBox>
    </GenericBox>
  );
};

export default Recommended;
