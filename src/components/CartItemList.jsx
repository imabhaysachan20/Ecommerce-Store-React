import { useSelector } from "react-redux"
import CartItem from "./CartItem"


const CartItemList = () => {
  const cartItem = useSelector((state)=>state.cartState.cartItems)
  
  
  return (
    <div>
      {cartItem.map((i)=><CartItem key = {i.cartID} cartItem = {i}/>)}
    </div>
  )
}

export default CartItemList
