import React from 'react';
import {Container, Box, Typography, Button, Divider, TextField, Checkbox} from '@mui/material/';
import {styled, createTheme, makeStyles } from '@mui/material/styles';
import SmallBasket from './SmallBasket';

const Checkout = () => {
   const classes = useStyles()
  return (
    <div style={{minHeight:'70vh'}}>
      <Container sx={{display:'flex', flexDirection:{xs:'column-reverse', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
        <Box sx={{width:{xs:'90%' ,md:'650px'}}}>
          <Typography sx={{fontSize:{xs:'20px', md:'40px'}, m:1, fontWeight:'bold'}}>
            Getting your order
          </Typography>
          <Divider />
          <Typography sx={{fontSize:{xs:'15px', md:'40px'}, m:1, }}>
            Shipping information
          </Typography>
          <Typography htmlFor="firstname" sx={{fontWeight:'bold'}}>First Name</Typography>
          <TextField id='firstname' lable='First Name' required size="small"/>
          <Typography htmlFor="lastname" sx={{fontWeight:'bold'}}>Last Name</Typography>
          <TextField id='lastname' lable='Last Name' required size="small"/>
          <Typography htmlFor="address" className={classes.typoBold}>Address</Typography>
          <TextField id='address' lable='Address' required size="small"/>
          <Typography htmlFor="city" sx={{fontWeight:'bold'}}>City</Typography>
          <TextField id='city' lable='City' required size="small"/>
          <Typography htmlFor="zipcode" sx={{fontWeight:'bold'}}>Zip Code</Typography>
          <TextField id='zipcode' lable='Zip Code' required size="small"/>
          <Divider sx={{my:1, width:'100%'}}/>

          <Typography sx={{fontSize:{xs:'15px', md:'25px'}, m:1, fontWeight:'bold'}}>Contact Information</Typography>
          <Typography htmlFor="email" sx={{fontWeight:'bold'}}>Email Address</Typography>
          <TextField id='email' lable='Email Address' required size="small"/>
          <Typography htmlFor="phonenumber" sx={{fontWeight:'bold'}}>Phone Number</Typography>
          <TextField id='phonenumber' lable='Phone Number' required size="small"/>
          <Box>
            <Checkbox size='small' />Text me updates about my iCommerce order.
          </Box>

          <Button variant="contained" sx={{my:3}}>Continue to Payment Information</Button>
        </Box>
        <SmallBasket/>
        
      </Container>
    </div>
  );
};

export default Checkout;


const useStyles = makeStyles({
  typoBold: {
    fontWeight:'bold',
    marginTop:'5px',
  },
});

