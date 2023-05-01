import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    shippingAddress: {},
    orders: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.shippingAddress = null;
            state.orders = [];
        },
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        },
        setOrder: (state, action) => {
            state.orders.push(action.payload);
        },
    },
});

export const { login, logout, setShippingAddress, setOrder } = userSlice.actions;
export default userSlice.reducer;