import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge,MenuItem,Menu } from '@material-ui/core'
import {ShoppingCart} from "@material-ui/icons"
import useStyles from "./styles"
import {Link,useLocation} from "react-router-dom"

const Navbar = ({totalItems}) => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src="../../assets/commerce.png" height="25px" width="25px" alt="" className={classes.image}/>
            buy somthing
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.buttton}>
            {location.pathname==="/"&&(<IconButton component={Link} to="/cart" color="inherit" aria-label="show shopping cart">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>)}
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
