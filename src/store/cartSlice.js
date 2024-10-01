import { createSlice } from '@reduxjs/toolkit';
import swalToastr from '../services/toastr-service';

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            swalToastr('success', 'Item added to cart!');
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item._id !== itemId);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart(state) {
            state.items = [];
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;