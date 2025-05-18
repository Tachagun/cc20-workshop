import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartSummary from "./components/CartSummary"
import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  const fetchProducts = ()=>{
    fetch('http://localhost:8000/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  }

  useEffect( ()=>{
    fetchProducts()
  },[])

  const addToCart = (id, title, price) => {
    let idx = carts.findIndex(el => el.id === id)
    
    if(idx === -1){
      let newItem = {id: id, title: title, price: price, quantity: 1}
      setCarts([...carts, newItem])
    } else {
      const clonedCard = [...carts]
      clonedCard[idx].quantity += 1
      setCarts(clonedCard)
    }
  }

  const decQuantity = (id)=> {
    let idx = carts.findIndex(el => el.id === id)
    const clonedCard = [...carts]
    if(clonedCard[idx].quantity > 1){
      clonedCard[idx].quantity -= 1
      setCarts(clonedCard)
    } else { 
      clonedCard.splice(idx, 1)
    }
    setCarts(clonedCard)
  }



  // const incQuantity = (id)=> {
  //   let idx = carts.findIndex(el => el.id === id)
  //   const clonedCard = [...carts]
  //     clonedCard[idx].quantity += 1
  //     setCarts(clonedCard)
  // }

  return (
    <div className='min-h-screen flex flex-col'>
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCart={addToCart}/>
        <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart}/>
      </div>
    </div>
  )
}

export default App
