import { createSlice } from "@reduxjs/toolkit"


/**
 * CART
 * 
 * items: []
 * totalQuantity: 0
 */

/**
 * ITEM (within cart items)
 * 
 * item {
 * id: 
 * price: 
 * quantity:
 * totalPrice:
 * name:
 * }
 */

/**
 * PRODUCT FORMAT
 * 
 * product  {
 * id: 1,
 * price: 1799.99,
 * title: 'iPhone 14 Pro',
 * description: 'Newest iPhone from Apple'
 * }
 */

const cartInitialState = {
  items: [],
  totalQuantity: 0,
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },

    addItemToCart(state, action) {
      const newItem = action.payload
      // is the item already in the items array?
      const existingItem = state.items.find(item => item.id === newItem.id)
      state.totalQuantity++
      state.changed = true

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      } else {
        // ExistingItem is an object referenced by items array. I can change the value of a key/value
        // and will be still referenced and thus "mutated" or "change"
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },

    removeItemFromCart(state, action) {

      state.totalQuantity--
      state.changed = true

      const id = action.payload

      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem.quantity === 1) {
        // need to remove the item
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }

    }
  }
})


export const cartActions = cartSlice.actions
export default cartSlice