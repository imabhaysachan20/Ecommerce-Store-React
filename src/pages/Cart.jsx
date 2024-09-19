import { useSelector } from "react-redux"
import {CartItemsList,SectionTitle,CartTotal} from "../components"
import { Link } from "react-router-dom"

const Cart = () => {

  //
  const user = useSelector((state)=>{return state.userState.user});
  const numItems = useSelector((state)=>state.cartState.numItemsInCart)

  if (!numItems) {
    return <SectionTitle text="Your cart is empty"></SectionTitle>
  }
  
  return (
    <>
      <SectionTitle text = "Shopping Cart"></SectionTitle>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 ">
            <CartItemsList/>
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotal/>
            {user?<Link to='/checkout' className="btn btn-primary btn-block mt-8">Proceed to checkout</Link>:<Link to='/login' className="btn btn-primary btn-block mt-8">Please Login</Link>}
          </div>
      </div>
    </>
  )
}

export default Cart
