import React ,{useState,useEffect,lazy,Suspense} from 'react';
// import {Products, Navbar,Cart,CheckOut} from './component';
import { commerce } from "./lib/commerce";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Loading from "./loading"

const Products = lazy(()=>import("./component/products/Products"))
const Navbar = lazy(()=>import("./component/navbar/navbar"))
const Cart = lazy(()=>import("./component/cart/Cart"))
const CheckOut = lazy(()=>import("./component/CheckOutForm/CheckOut/CheckOut"))

const App = () => {
  const [cart,setCart] = useState({});
  const[products,setproducts] = useState([])

  const fetchProducts = async() =>{
    const {data} = await commerce.products.list()
    setproducts(data)
  }
  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve())
  };
  // console.log( cart);
  const handleAddCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);
     setCart(cart);
  };

  const handleUpdateCart = async(productId,quantity) => {
    console.log(productId,quantity);
    const {cart} = await commerce.cart.update(productId, {quantity})
    setCart(cart)
  }
  const handleRemoveCart = async(productId) => {
    const {cart} = await commerce.cart.remove(productId)
    setCart(cart)
  }
  const handleEmptyCart = async() => {
    const {cart} = await commerce.cart.empty()
    setCart(cart)
  }
  
  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading/>}>
          <Navbar totalItems={cart.total_items}/>
          <Route exact path="/">
          <Products products={products} onAddCart={handleAddCart}/>
          </Route>
          <Route exact path="/cart">
          <Cart cart={cart}
            handleUpdateCart = {handleUpdateCart}
            handleRemoveCart  = {handleRemoveCart}
            handleEmptyCart  = { handleEmptyCart}     
          />
          </Route>
          <Route exact path="/checkout">
            <CheckOut cart={cart}/>
          </Route>
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App