import React,{useState,useEffect} from 'react'
import {Typography,Stepper,Step,Paper,StepLabel,CircularProgress,Divider,Button} from "@material-ui/core"
import AddressForm from "../CheckOut/addressForm"
import PaymentForm from "../CheckOut/paymentForm"
import useStyles from "./styles"
import {commerce} from "../../../lib/commerce"
import { generatePath } from 'react-router-dom'

const steps = ["shipping address","payment details"]
const CheckOut = ({cart}) => {
  const classes = useStyles();
  const [activeState, setactiveState] = useState(0)
  const[checkoutToken,setcheckoutToken] = useState(null)
  useEffect(()=>{
    const genereateToken=async()=>{
      try {
        const token = await commerce.checkout.generateToken(cart.id,{type:"cart"})
      // console.log("token:",token);
      setcheckoutToken(token)
      } catch (error) {
        
      }
    }
    genereateToken();
  },[cart])
  const Form =()=> activeState=== 0 ? <AddressForm checkoutToken={checkoutToken}/>:<PaymentForm/>
  const Conformation = () => "conformation"
  return (
    <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h4" >CheckOut</Typography>
        <Stepper activeStep={activeState} className={classes.stepper}>
          {steps.map((step)=>(
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeState === steps.length ? <Conformation/> : checkoutToken&&<Form/>}
      </Paper>
    </main>
      
    </>
  )
}

export default CheckOut
