import { configureStore } from '@reduxjs/toolkit'
import createSlice from './cart-slice'
import uiSlice from './ui-slice'

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: createSlice.reducer,
  }
})

export default store