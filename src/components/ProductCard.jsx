import React, { useState } from 'react'

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false)
  const {productItem:{id, category, description, title, image, price, rating}, addToCart} = props
  return (
  
          <div className="card pt-4 bg-white w-70 shadow-sm">
            <figure>
              <img className='h-50 px-2 aspect-auto' src={image}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title line-clamp-1">{title}</h2>
              <p className='border w-fit px-2 rounded-full self-center'>{category}</p>
              <p className={`cursor-pointer ${showDesc ? '' : 'line-clamp-2'}`}
              onClick={()=>setShowDesc(prev=>!prev)}>{description}</p>
              <p className='font-bold text-2xl'>Price : {price}$</p>
              <div className="card-actions justify-center">
                <button className="btn btn-secondary" onClick={()=>addToCart(id, title, price)}>Buy Now</button>
                <button className="btn btn-accent">Details</button>
              </div>
            </div>
          </div>
        
  
  )
}

export default ProductCard