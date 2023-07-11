import { createSlice, current } from '@reduxjs/toolkit'
import { IProduct } from "~/models/ISliceState"


export interface IApiState {
  cart: IProduct[]
  loading: boolean
  error: string | null
}

const initialState: IApiState = {
  cart: [],
  loading: false,
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    sortById: (state) => {
      const sortDataById = state.cart.sort((a, b) => a.id > b.id ? -1 : 1)
      console.log(current(state.cart))
      Object.assign(
        state, {
        cart: sortDataById
      })
    },
    addToCart: (state, action) => {
      const checkExists = state.cart.sort((a, b) => a.id > b.id ? -1 : 1)
      // console.log(current(state.cart))
      Object.assign(
        state, {
        cart: action.payload
      })
    },
  },
  extraReducers: {},
})

export const { sortById } = cartSlice.actions

export default cartSlice.reducer