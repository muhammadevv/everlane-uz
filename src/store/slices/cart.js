import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0,
}

function setCart(arr) {
    localStorage.setItem('cart', JSON.stringify(arr))
    console.log(arr);
    return arr
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, { payload }) => {
            const isContain = state.items.some(item => item.id === payload.id)
            const newItems = isContain ? state.items.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.items, { ...payload, qty: 1 }];
            state.items = setCart(newItems);
        },
        removeCart: (state, { payload }) => {
            const newItems = state.items.filter(item => item.id !== payload);
            state.items = setCart(newItems);
        },
        increment: (state, { payload }) => {
            const newItems = state.items.map(item => item.id === payload ? { ...item, qty: item.qty + 1 } : item);
            state.items = setCart(newItems);
        },
        decrement: (state, { payload }) => {
            const newItems = state.items.map(item => item.id === payload ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 } : item);
            state.items = setCart(newItems);
        },
        removeAllProducts: (state) => {
            state.items = setCart([])
        }
    }
});

export const { addCart, removeCart, increment, decrement, removeAllProducts } = cartSlice.actions

export default cartSlice.reducer