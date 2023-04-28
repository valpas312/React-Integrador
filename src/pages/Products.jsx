import { useSelector } from "react-redux";
import ProductsCard from "../components/ProductsCard";
import GenericBox from "../components/styles/GenericBox";

const Products = () => {

    const products = useSelector((state) => state.products.products);

    return <GenericBox>
    {
        products.length > 0 && products.map((product) => (
            <ProductsCard key={product.id} {...product} />
        ))
    }
  </GenericBox>
}

export default Products