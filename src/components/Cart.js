import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {delCart} from '../redux/action/index';
import {Container, Box, Typography, 
// Button, 
Rating  } from '@mui/material/';

const Cart = () => {
  const state = useSelector((state)=> state.handleCart);//handleCart from the reducer
  const dispatch = useDispatch();
  // console.log(state)
  // const handleClose = (item)=>{
  //   dispatch(delCart(item));
  // }

  const cartItems = (cartItem)=>{
    return(
      <Container sx={{display:'flex', my:3,p:1, background:'rgba(194, 202, 208, 0.3)', borderRadius:'20px', alignItems: 'center' }} key={cartItem.id}>
        <Box >
          <img
          src={`${cartItem.image}`}          
          alt={cartItem.title}
          loading="lazy"
          width='250px'
        />
        </Box>
        <Box>
        <Typography variant="h2" sx={{m:4, p:2}}>
          {cartItem.title}
        </Typography>
        <Typography variant="h5" sx={{m:4, p:2, fontWeight:'bold'}}>
          {state.length} X {cartItem.price}$ = {state.length * cartItem.price}$
        </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <div>
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;