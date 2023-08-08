import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { IProduct } from "~/types/ISliceState"
import productService from '~/services/productService';

// export interface IProduct {
//   id: string;
//   username: string;
//   password: string;
// }



export interface IApiState {
  products: IProduct[]
  product: IProduct
  loading: boolean
  error: string | null
}


const initialState: IApiState = {
  products: [],
  product: {} as IProduct,
  loading: false,
  error: null,
}

export const fetchAllProduct = createAsyncThunk('api/fetchAllProduct', productService.getAllProduct);
export const fetchSingleProduct = createAsyncThunk('api/fetchSingleProduct', productService.getSingleProduct);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortById: (state) => {
      state.products.sort((a, b) => a.id > b.id ? -1 : 1)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllProduct.pending, state => {
        Object.assign(state, {
          loading: true,
          error: null,
        })
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        Object.assign(
          state, {
          products: action.payload,
          loading: false,
          error: null,
        })
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        Object.assign(
          state, {
          loading: false,
          error: action.error.message ?? 'An error occurred',
        })
      })

      .addCase(fetchSingleProduct.pending, state => {
        Object.assign(state, {
          loading: true,
          error: null,
        })
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        Object.assign(
          state, {
          product: action.payload,
          loading: false,
          error: null,
        })
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
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