import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '~/app/store'
import axios from 'axios';


export interface IProduct {
  id: string;
  username: string;
  password: string;
}

export interface IApiState {
  products: IProduct[]
  loading: boolean
  error: string | null
}


const initialState: IApiState = {
  products: [],
  loading: false,
  error: null,
}

export const fetchProduct = createAsyncThunk('api/fetchProducts', async () => {
  const response = await axios.get('https://ecommerce-api-133d7-default-rtdb.firebaseio.com/product.json');
  // const response = await axios.post('http://localhost:3002/courses', {
  //   id: 1
  // }, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   }
  // });

  return response.data;
});


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
})

export const { } = productSlice.actions

export default productSlice.reducer