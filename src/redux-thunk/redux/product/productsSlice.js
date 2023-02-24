import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "redux-thunk/thunk/product/product";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    data: [],
    error: ''
  },
  extraReducers: builder => {

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  }
});

export { fetchProducts };
export default productsSlice.reducer;