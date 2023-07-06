import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from '~/services/productService';

export interface IProduct {
  id: string;
  username: string;
  password: string;
}

export interface IApiState {
  product: IProduct[]
  loading: boolean
  error: string | null
}


const initialState: IApiState = {
  product: [],
  loading: false,
  error: null,
}

export const fetchProduct = createAsyncThunk('api/fetchProduct', productService.getProduct);


export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, state => {
        Object.assign(state, {
          loading: true,
          error: null,
        })
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        Object.assign(
          state, {
          product: action.payload as IProduct[],
          loading: false,
          error: null,
        })
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        Object.assign(
          state, {
          loading: false,
          error: action.error.message ?? 'An error occurred',
        })
      });
  },
})

export const { } = productSlice.actions

export default productSlice.reducer