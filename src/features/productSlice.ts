import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { IProduct } from "~/models/ISliceState"
import productService from '~/services/productService';

// export interface IProduct {
//   id: string;
//   username: string;
//   password: string;
// }



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
  reducers: {
    sortById: (state) => {
      const sortDataById = state.product.sort((a, b) => a.id > b.id ? -1 : 1)
      console.log(current(state.product))
      Object.assign(
        state, {
        product: sortDataById
      })
    },
  },
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
          product: action.payload,
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

export const { sortById } = productSlice.actions

export default productSlice.reducer