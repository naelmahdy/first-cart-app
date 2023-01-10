import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  console.log('fetchProducts', data);
  return data
})

const productsSlice = createSlice({
  initialState: [{ id: 1, title: 'product1' }],
  name: 'productsSlice',
  // actions
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    },
  },
  //  
  extraReducers: (builder) => {
    // link slice with createAsyncThunk
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log('builder', action);
      return action.payload
    })
  }
})

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer