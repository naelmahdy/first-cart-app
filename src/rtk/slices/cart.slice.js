import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
  initialState: [],
  name: 'CartSlice',
  // actions
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((product) => product.id === action.payload.id)
      if (findProduct) {
        findProduct.quantity += 1
      } else {
        const productClone = { ...action.payload, quantity: 1 }
        state.push(productClone)
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id

      )
    },
    clear: (state, action) => {
      return []
    },
  },


})

export const { addToCart, deleteFromCart, clear } = CartSlice.actions;
export default CartSlice.reducer;