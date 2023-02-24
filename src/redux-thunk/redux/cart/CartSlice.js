import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            let obj = action.payload.product;
            let newobj = { key: new Date().getTime(), ...obj, quantity: action.payload.productCount }
            state.push(newobj);
        },
        deleteProduct: (state, action) => {
            return state.filter((product) => product.key !== action.payload.id);
        },
        buyProducts: (state, action) => {
            return state.filter((product) => product.key !== product.key);
        }
    }
});

export const { addProduct, deleteProduct, buyProducts } = CartSlice.actions;
export default CartSlice.reducer;