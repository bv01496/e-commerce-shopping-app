import React,{useState} from 'react'
import {Typography,Stepper,Step,Paper,StepLabel,CircularProgress,Divider,Button} from "@material-ui/core"
import AddressForm from "../CheckOut/addressForm"
import PaymentForm from "../CheckOut/paymentForm"
import useStyles from "./styles"

const steps = ["shipping address","payment details"]
const CheckOut = () => {
  const classes = useStyles();
  const [activeState, setactiveState] = useState(0)
  const Form =()=> activeState=== 0 ? <AddressForm/>:<PaymentForm/>
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
        {activeState === steps.length ? <Conformation/> : <Form/>}
      </Paper>
    </main>
      
    </>
  )
}

export default CheckOut
