
import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"

export const loadCartData = () => {
  return async (dispatch, getState) => {

    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Loading...',
      message: 'Loading cart data'
    }))

    const sendRequest = async () => {

      const response = await fetch('https://react-app-rtf-default-rtdb.firebaseio.com/cart.json')

      if (!response.ok) {
        throw new Error('Loading cart data failed.')
      }

      const data = await response.json()
      return data

    }

    try {

      const cartData = await sendRequest()

      // add data to the store
      dispatch(cartActions.replaceCart({

        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity

      }))

      dispatch(uiActions.showNotification({ status: 'success', title: 'Success', message: 'Loaded cart successfully' }))

    } catch (error) {
      dispatch(uiActions.showNotification({ status: 'error', title: 'Error!', message: 'Loading cart failed' }))
    }

  }

}

export const sendCartData = (cart) => {
  return async (dispatch, getState) => {

    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data'
    }))

    const sendRequest = async () => {
      const response = await fetch('https://react-app-rtf-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      })

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
    }

    try {

      await sendRequest()

      dispatch(uiActions.showNotification({ status: 'success', title: 'Success', message: 'Sent cart successfully' }))

    } catch (error) {
      dispatch(uiActions.showNotification({ status: 'error', title: 'Error!', message: 'Sending cart failed' }))
    }


  }
}
