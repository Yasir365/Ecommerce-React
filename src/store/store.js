import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import adminAuthSlice from './adminAuthSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: adminAuthSlice
    },
});

export default store;