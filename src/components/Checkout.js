import React from 'react';
import {Container, Box, Typography, Button, Divider, TextField, Checkbox} from '@mui/material/';
import {styled, createTheme, makeStyles } from '@mui/styles';
import SmallBasket from './SmallBasket';
import RegisterForm from './RegisterForm'

const Checkout = () => {
   const classes = useStyles();
  return (
    <div style={{minHeight:'70vh'}}>
      <Container sx={{display:'flex', flexDirection:{xs:'column-reverse', sm:'row'}, my:12,p:1, alignItems: 'center' }}>
        <RegisterForm />      
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

