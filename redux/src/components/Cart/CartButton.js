import classes from './CartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

const CartButton = (props) => {

  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(uiActions.toggle())
  }

  const qty = useSelector(state => state.cart.totalQuantity)

  // const cartProducts = useSelector(state => state.cart.items)
  // let qty

  // if (cartProducts.length > 0) {
  //   const arrayOfQty = cartProducts.map((curObj) => (curObj.quantity))
  //   qty = arrayOfQty.reduce((prev, curr) => prev + curr, 0)

  // } else {
  //   qty = 0
  // }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{qty}</span>
    </button>
  )
}

export default CartButton
