import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils';
const CartTotal = () => {
  const {orderTotal,shipping,tax,cartTotal}=  useSelector((state)=>state.cartState);
  return (
   <div className='card bg-base-200 shadow-sm'>
      <div className="card-body">
        <p className='flex justify-between text-xs border-bottom border-bases-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>₹{formatPrice(cartTotal)}</span>
        </p>

        <p className='flex justify-between text-xs border-bottom border-bases-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>₹{formatPrice(shipping)}</span>
        </p>

        <p className='flex justify-between text-xs border-bottom border-bases-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>₹{formatPrice(tax)}</span>
        </p>

        <p className='flex justify-between text-sm mt-4 pb-2'>
          <span>Order Total</span>
          <span className='font-medium'>₹{formatPrice(cartTotal)}</span>
        </p>

      </div>
   </div>
  )
}

export default CartTotal
