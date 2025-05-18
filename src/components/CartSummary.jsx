import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const {carts, decQuantity, addToCart} = props
  const total = carts.reduce((a,c)=> a+=c.price * c.quantity, 0)
  const vat = total * 0.7

  return (
    <div className='fixed right-0 top-20 w-1/3 bg-orange-100'>
      <div className='pt-5 pl-2'>
        <h2 className='text-2xl'>Cart Items:</h2>
        {carts.length === 0 && <p className='text-center py-30'>Cart is empty...</p> }
        <div className='flex flex-col gap-2'>
        {
          carts.map(el => 
              <CartItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart}/>
          )
        }
        </div>
        {carts.length > 0 && (
          <>
        <div className='divider'>Total</div>
        <div className='flex justify-between px-1.5 flex-1'>
          <p>Total</p>
          <p>{total.toFixed(2)}</p>
        </div>
        <div className='flex justify-between px-1.5 flex-1'>
          <p>VAT</p>
          <p>{vat.toFixed(2)}</p>
        </div>
        <div className='flex justify-between px-1.5 flex-1'>
          <p className='font-bold'>Final Total</p>
          <p className='underline decoration-double'>${(vat+total).toFixed(2)}</p>
        </div>
          </>
        )}
       
      </div>
    </div>
  )
}

export default CartSummary