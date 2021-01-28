import React ,{useState,useEffect} from 'react';
import {Products, Navbar,Cart,CheckOut} from './component';
import { commerce } from "./lib/commerce";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"

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
  console.log( cart);
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
    <div>
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
        <CheckOut/>
      </Route>
    </div>
    </Switch>
    </Router>
  )
}

export default App