import React,{useState,useEffect} from 'react'
import {Typography,InputLabel,MenuItem,Grid,Select} from "@material-ui/core"
import {FormProvider,useForm} from "react-hook-form"
import FormInput from "./FormInput"
import {commerce} from "../../../lib/commerce"

const AddressForm = ({checkoutToken}) => {
  const[shippingCountries,setShippingCountries]= useState([])
  const[country,setCountry]= useState("")
  const[subdivisions,setsubdivisions]= useState([])
  const[subdivision,setsubdivision]= useState("")
  const[shippingOptions,setshippingOptions]= useState([])
  const[shippingOption,setshippingOption]= useState("")

  const fetchCountries = async(checkoutTokenId)=>{
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
    setShippingCountries(Object.entries(countries).map(([id,label])=>({"id":id,"label":label})))
    setCountry(Object.keys(shippingCountries[0]))
  }
  const fetchSubdivisions=async(countryCode)=>{
    const{subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
    setsubdivision(subdivision)
  }
  
  useEffect(()=>{
      fetchCountries(checkoutToken.id)
  },[])
  const methods = useForm()
  return (
    <>
    <Typography variant="h6" gutterBottom>address form</Typography>
      <FormProvider {...methods}>
        <form onSubmit ="">
        <Grid container spacing={3}>
          <FormInput required name="firstName" label="First name"/>
          <FormInput required name="lastname" label="Last name"/>
          <FormInput required name="address1" label="Address"/>
          <FormInput required name="email" label="Email"/>
          <FormInput required  name="city" label="city name"/>
          <FormInput required name="zp" label="ZIP CODE"/>
        <Grid item xs={12} sm={6}>
          <InputLabel> shipping country</InputLabel>
          <Select value={country} fullWidth onChange={(e)=>setCountry(e.target.value)}>
            {shippingCountries.map((country)=>(
              <MenuItem key={country.id} vlaue={country.id}>
              {country.label}
            </MenuItem>
            ))}
          </Select>
        </Grid>
            </Grid>
        {/* <Grid item xs={12} sm={6}>
          <InputLabel> shipping subdivision</InputLabel>
          <Select value={} fullWidth onChange={}>
            <MenuItem key={} vlaue={}>
              select me
            </MenuItem>
          </Select>
        </Grid><Grid item xs={12} sm={6}>
          <InputLabel> shipping options</InputLabel>
          <Select value={} fullWidth onChange={}>
            <MenuItem key={} vlaue={}>
              select me
            </MenuItem>
          </Select>
        </Grid> */}
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
