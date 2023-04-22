import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";

const Products = () => {

    const products = useSelector((state) => state.products.products);

    console.log(products);

    return <>
    <h1>Products</h1>
    {
        products.length > 0 && products.map((product) => (
            <ProductsCard key={product.id} {...product} />
        ))
    }
  </>
}

export default Products