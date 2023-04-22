import { useSelector } from "react-redux";
import ProductsCard from "../components/ProductsCard";
import { Box } from "@chakra-ui/react";

const Products = () => {

    const products = useSelector((state) => state.products.products);

    return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    h="100%"
    flexWrap="wrap"
    gap="3rem"
    >
    {
        products.length > 0 && products.map((product) => (
            <ProductsCard key={product.id} {...product} />
        ))
    }
  </Box>
}

export default Products