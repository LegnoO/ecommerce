import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from "~/models/ISliceState"


export interface IApiState {
  cart: IProduct[]
  loading: boolean
  error: string | null
}


const getInitialCart = () => {
  const cartStorage = localStorage.getItem("cart")!
  return cartStorage ? JSON.parse(cartStorage) : []
}

const initialState: IApiState = {
  cart: getInitialCart(),
  loading: false,
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    sortById: (state) => {
      state.cart.sort((a, b) => a.id > b.id ? -1 : 1)
    },
    addToCart: (state, action) => {
      try {
        const currentItem = action.payload
        const exists = state.cart.find(item => item.id === currentItem.id)
        if (exists) {
          exists.stock += 1
        } else {
          state.cart = [...state.cart, currentItem]
        }
        localStorage.setItem("cart", JSON.stringify(state.cart))
      } catch (error) {
        throw error
      }
    },
  },
})

export const { sortById, addToCart } = cartSlice.actions

export default cartSlice.reducer