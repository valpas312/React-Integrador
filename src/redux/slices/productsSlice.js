//importacion de utils
import { addAProduct, removeAProduct, getTotal, getTotalItems } from '../utils/productsUtils';

//creacion de slice para manejar el estado de los productos
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product: {},
    cart: [],
    totalCartPrice: 0,
    totaCartlItems: 0,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        addProductToCart: (state, action) => {
            state.cart = addAProduct(state.cart, action.payload);
            state.totalCartPrice = getTotal(state.cart);
            state.totaCartlItems = getTotalItems(state.cart);
        },
        removeProductFromCart: (state, action) => {
            state.cart = removeAProduct(state.cart, action.payload);
            state.totalCartPrice = getTotal(state.cart);
            state.totaCartlItems = getTotalItems(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalCartPrice = 0;
            state.totaCartlItems = 0;
        },
    }
});

export default productsSlice.reducer;
export const { setProducts, setProduct, addProductToCart, removeProductFromCart, clearCart } = productsSlice.actions;