import { useSelector } from "react-redux";

const Products = () => {

    const products = useSelector((state) => state.products.products);

    return <>
    <h1>Products</h1>
    {
        products.length > 0 && products.map((product) => (
            <div key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <p>{product.price}</p>
            </div>
        ))
    }
  </>
}

export default Products