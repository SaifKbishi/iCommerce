import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import { styled, alpha,createTheme,ThemeProvider  } from '@mui/material/styles';
import Products from './Products'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="hero" margintop='85px'>
      <Card sx={{ width: '100%', height:'100vh' }}>        
        <CardContent>
        <Box className="container" sx={{position: 'absolute', color:'#afd275'}}>
          <Typography gutterBottom variant="h1" component="div" sx={{fontWeight:'bold', }}>
            NEW COLLECTION IS HERE
          </Typography>
          <Typography variant="h3" color="#7E685A" >
            CHECKOUT MODREN STYLES
          </Typography>
          </Box>
        <CardMedia
          component="img"
          height="100%"
          image="https://image.shutterstock.com/image-photo/businessman-on-blurred-background-using-600w-566874976.jpg"
          alt="shutterstock image"
        />
        </CardContent>
      </Card>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;

const icommerce = createTheme({
  palette: {
    primary: {
      main: '#C2CAD0',
    },
    secondary: {
      main: '#C2B9B0',
      contrastText: '#ffcc00',
    },
    error:{
      main: '#b90e0a'
    },
    info:{
      main: '#c2b9b0'
    },
    success:{
      main: '#E7717D'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  text:{
    primary:{
      color: '#7e685a'
    },
    secondary:{
      color:'#afs275'
    },
    disabled:{},
  }
});