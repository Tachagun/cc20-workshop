import React from 'react'

function CartCount(props) {
  const {itemCount} = props

  return (
    <div >
      <img className='relative top-4 h-4/5' src="src\assets\cart.svg" alt="" />
      <h3 className='absolute top-4 right-5 bg-red-600 px-2 rounded-full'>{itemCount}</h3>
    </div>
  )
}

export default CartCount