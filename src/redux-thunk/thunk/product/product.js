import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductListCall } from "network/services/product.service";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await ProductListCall();
  return response.data;
});
