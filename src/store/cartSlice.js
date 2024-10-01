import { createSlice } from '@reduxjs/toolkit';
import swalToastr from '../services/toastr-service';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            swalToastr('success', 'Item added to cart!');
        },
        removeItem(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item._id !== itemId);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;