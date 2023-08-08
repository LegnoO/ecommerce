import { createSlice, current } from '@reduxjs/toolkit'
import { ICart } from "~/types/ISliceState"


export interface IApiState {
  cart: ICart
  loading: boolean
  error: string | null
}


const getInitialCart = () => {
  const cartStorage = localStorage.getItem("cart") || '{}';
  return cartStorage ? JSON.parse(cartStorage) : []
}

const cartStorage = getInitialCart()

const initialState: IApiState = {
  cart: cartStorage,
  loading: false,
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    sortById: (state) => {
      const cartData = state.cart
      cartData.carts.sort((a, b) => a.id > b.id ? -1 : 1)
    },
    addToCart: (state, action) => {
      const cartData = state.cart
      let currentItem = action.payload.product
      const newQuantity = action.payload.quantity
      // check item exists in cart
      const exists = cartData.carts.find(item => item.id === currentItem.id)
      if (exists) {
        newQuantity ? exists.quantity += action.payload.quantity : exists.quantity += 1
      } else {
        // push item to cart
        currentItem = { ...currentItem, quantity: action.payload.quantity }
        cartData.carts = [...cartData.carts, currentItem]
      }
      localStorage.setItem("cart", JSON.stringify(cartData))
    },
  },
})

export const { sortById, addToCart } = cartSlice.actions

export default cartSlice.reducer