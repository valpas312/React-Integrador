import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    shippingAddress: {},
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
        },
        setShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        },
    },
});

export const { login, logout, setShippingAddress } = userSlice.actions;
export default userSlice.reducer;