import { createSlice } from "@reduxjs/toolkit"

const uiSliceInitialState = {
  cartIsVisible: false,
  notification: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiSliceInitialState,
  reducers: {
    toggle(state) { state.cartIsVisible = !state.cartIsVisible },
    showNotification(state, action) {
      state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message }
    }
  }
})

// const uiReducer = uiSlice.reducer
// export default uiReducer

export const uiActions = uiSlice.actions
export default uiSlice
