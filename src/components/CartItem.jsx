import React from 'react'

function CartItem(props) {
  const { item: {id, title, price, quantity}, decQuantity, addToCart} = props
  return (
   
    <div className='flex  justify-between px-1.5 gap-1'>
      <p className=' w-22 flex-1 min-w-5'>{title.split(' ')[0]+title.split(' ')[1]}</p>
      <div className='flex justify-center flex-1 gap-1  '>
        <p className='btn btn-xs bg-red-300' onClick={()=>decQuantity(id)}>-</p>
        <p className='btn btn-xs bg-green-300' onClick={()=>addToCart(id)}>+</p>
      </div>
      <p className=' flex-1 text-end pe-2'>{quantity} * ${price}</p>
    </div>
    
  )
}

export default CartItem