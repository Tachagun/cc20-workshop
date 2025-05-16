import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartSummary from "./components/CartSummary"

function App() {
 

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className=" flex flex-1">
        <ProductList />
        <CartSummary />
      </div>
    </div>
  )
}

export default App
