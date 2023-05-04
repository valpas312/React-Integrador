//PRODUCTOS POR CATEGORÍA
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import RecommendedCard from "./RecommendedCard";
import GenericBox from "./styles/GenericBox";

const Categories = () => {
  const products = useSelector((state) => state.products.products);
  const category = useSelector((state) => state.products.category);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <GenericBox>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <RecommendedCard key={product.id} {...product} />
        ))
      ) : (
        <Text>No products in this category</Text>
      )} 
    </GenericBox>
  );
};

export default Categories;
