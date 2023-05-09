import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        addOrder: (state, action) => {
            state = action.payload.value;
            return state;
        },
        deleteOrder: (state) => {
            return state.filter((order) => order.key !== order.key);
        }
    }
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
