import React from 'react'
import {Typography,Card,CardMedia,Button,CardContent, CardActions} from '@material-ui/core'
import useStyles from "./styles"

const CartItem = ({item,onUpdateCart,onRemoveCart}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
      <CardContent className={classes.cardContent}>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardName}>
        <div className={classes.buttons}>
          <Button size="small" type="button" onClick={()=>(onUpdateCart(item.id,item.quantity+1))}>+</Button>
          <Typography>{item.quantity}</Typography>
          <Button size="small" type="button" onClick={()=>(onUpdateCart(item.id,item.quantity-1))}>-</Button>
        </div>
        <Button variant="contained" color="secondary" type='button' onClick={()=>onRemoveCart(item.id)}>remove items</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
