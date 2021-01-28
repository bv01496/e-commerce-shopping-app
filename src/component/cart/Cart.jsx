import React from 'react'
import {Typography,Container,Button,Grid} from '@material-ui/core'
import useStyles from "./styles"
import CartItem from "./cartitem/CartItem"
import {Link} from "react-router-dom"

const Cart = ({cart,handleUpdateCart,handleRemoveCart,handleEmptyCart}) => {
  console.log(cart.line_items);
  const classes = useStyles();

  const EmptyCart =()=>(
    <Typography variant="h5">
      your cart is empty, 
      <Typography component={Link} to="/" className={classes.link}>try adding some items </Typography>
    </Typography>
  )
  const FilledCart =()=>(
   <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem)=>(
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem 
            onUpdateCart={handleUpdateCart}
            onRemoveCart={handleRemoveCart}
            onEmptyCart={handleEmptyCart}
            item = {lineItem}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography varient="h4">
          subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button onClick={handleEmptyCart} className={classes.emptyButton} size="large" color="secondary" type="button" variant="contained">empty cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" color="primary" type="button" variant="contained">Checkout</Button>
        </div>
      </div>
    </>
  )
  if (cart.line_items === undefined) return "loading"
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { cart.total_items === 0 ? EmptyCart() : FilledCart() }
    </Container>
  )
}

export default Cart
