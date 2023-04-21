import { useDispatch } from "react-redux";
import { setProducts } from "./redux/slices/productsSlice";
import axios from "axios";
import { useEffect } from "react";

const ProductsFetch = () => {
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };
    
    useEffect(() => {
        fetchProducts();
    });
    
    return (
        null
    );
};

export default ProductsFetch;