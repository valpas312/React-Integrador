//importacion de utils
import { addAProduct, removeAProduct, getTotal, getTotalItems, getRecommendedProducts } from '../utils/productsUtils';

//creacion de slice para manejar el estado de los productos
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalCartPrice: 0,
    totalCartItems: 0,
    cart: [],
    recommendedProducts: [],
    category: ''
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.recommendedProducts = getRecommendedProducts(action.payload);
        },
        addProductToCart: (state, action) => {
            state.cart = addAProduct(state.cart, action.payload);
            state.totalCartPrice = getTotal(state.cart);
            state.totalCartItems = getTotalItems(state.cart);
        },
        removeProductFromCart: (state, action) => {
            state.cart = removeAProduct(state.cart, action.payload);
            state.totalCartPrice = getTotal(state.cart);
            state.totalCartItems = getTotalItems(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalCartPrice = 0;
            state.totalCartItems = 0;
        },
        setCategoty: (state, action) => {
            state.category === action.payload ? state.category = '' : state.category = action.payload;
        }
    }
});

export default productsSlice.reducer;
export const { setProducts, setProduct, addProductToCart, removeProductFromCart, clearCart, setCategoty } = productsSlice.actions;