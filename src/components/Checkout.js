import React from 'react';
import {Container, Box, Typography, Button, Rating, Divider, TextField, FormControl, InputLabel, Input, FormHelperText,OutlinedInput} from '@mui/material/';

const Checkout = () => {
  return (
    <div style={{height:'70vh'}}>
      <Container sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
        <Box sx={{width:'650px'}}>
          <Typography sx={{fontSize:{xs:'20px', md:'40px'}, m:1, fontWeight:'bold'}}>
            Getting your order
          </Typography>
          <Divider />
          <Typography sx={{fontSize:{xs:'20px', md:'40px'}, m:1, }}>
            Shipping information
          </Typography>
          
          <Typography htmlFor="firstname">First Name</Typography>
          <TextField id='firstname' lable='First Name' required/>
          <Typography htmlFor="lastname">Last Name</Typography>
          <TextField id='lastname' lable='Last Name' required/>

        </Box>      
        <Box sx={{border:2, mx:2}}>
          Order summary
        </Box>            
      </Container>
    </div>
  );
};

export default Checkout;