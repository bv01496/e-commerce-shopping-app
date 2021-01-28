import React from 'react'
import {Typography,InputLabel,MenuItem,Grid} from "@material-ui/core"
import {FormProvider,useForm} from "react-hook-form"
import FormInput from "./FormInput"

const AddressForm = () => {
  const methods = useForm()
  return (
    <>
    <Typography variant="h6" gutterBottom>address form</Typography>
      <FormProvider {...methods}>
        <form onSubmit ="">
        <Grid variant="container" spacing={3}>
          <FormInput required name="firstName" label="First name"/>
        </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
