import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        addOrder: (state, action) => {
            const cart = action.payload.value;
            const obj = { id: new Date().getTime(), value: cart }
            state.push(obj);
        },
        deleteOrder: (state) => {
            return state.filter((order) => order.key !== order.key);
        }
    }
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
