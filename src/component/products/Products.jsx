import React,{useState,useEffect} from 'react'
import {Grid} from "@material-ui/core"
import Product from "./Product/Product"
import useStyles from "./styles"


const Products = ({products,onAddCart}) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container spacing={4} justify="center">
      {products.map((product)=>(
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
        <Product product={product} onAddCart={onAddCart}/>
      </Grid>      
      ))}
      </Grid>

    </main>
  )
}

export default Products
