import React from 'react'
import CartCount from "./CartCount"

function Header() {
  return (
    <div className='flex w- justify-between h-15 bg-secondary'>
      <div>
        ♡⸜(˶˃ ᵕ ˂˶)⸝♡, Brand
      </div>

      <CartCount />
      
    </div>
  )
}

export default Header