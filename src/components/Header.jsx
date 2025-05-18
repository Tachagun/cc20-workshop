import React from 'react'
import CartCount from "./CartCount"


function Header(props) {
  const {itemCount} = props
  return (
    <div className='fixed flex justify-between w-full z-100 h-20 bg-base-content px-5'>
      <div className=' w-1/5 flex items-center gap-5'>
        <img className='h-9/10' src="src\assets\shop-icon.svg" alt="" />
        <h1 className='text-4xl text-base-100 '>CC Shop</h1>
      </div>
      <CartCount itemCount={itemCount}/>
      
    </div>
  )
}

export default Header