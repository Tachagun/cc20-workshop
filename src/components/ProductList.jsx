import {useState} from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const {products, addToCart} = props
  return (
    <div className='relative left-0 top-20 w-2/3 bg-base-100 ps-2'>
      <h2 className='fixed top-20 left-0 z-10 w-2/3 bg-base-300  text-3xl p-2 '>Product List</h2>
      <div className='flex flex-wrap gap-3 relative top-10 pt-10 bg-base-200'>
      {
        products.map( el=>
          <ProductCard key={el.id} productItem={el} addToCart={addToCart}/>
        )
      }
      </div>
    </div>
  )
}

export default ProductList