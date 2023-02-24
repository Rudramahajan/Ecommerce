import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name: 'order',
    initialState: null,
    reducers: {
        setToken: (state, action) => {
            return state = action.payload.token;
        },
        checkToken: (state) => {
            return state !== null
        },
        removeToken : (state) => {
          return state = null
        }
    }
});

export const { setToken,addToken,removeToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;