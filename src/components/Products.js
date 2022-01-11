import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Box, Typography, Divider,Button,Grid,Paper } from '@mui/material/';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { styled, alpha,createTheme,ThemeProvider,darken  } from '@mui/material/styles';
// import Skeleton from 'react-loading-skeleton';
import Skeleton from '@mui/material/Skeleton';

import {useNavigate} from 'react-router-dom';


const Products = () => {

  const [productsData, setProductsData] = useState([]);
  const [filter, setFilter] = useState(productsData);
  const [loading, setLoading] = useState(true);
  const [spacing, setSpacing] = React.useState(2);
  const navigate = useNavigate();

  useEffect(()=>{
    const source=axios.CancelToken.source();
    const getProducts=async()=>{
      setLoading(true);
      try{
        const products = await axios.get(`https://fakestoreapi.com/products/`,{
          cancelToken: source.token,
        });
        setProductsData(products.data);
        setFilter(products.data);        
        setLoading(false);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error);
        }else{
          console.log('there was an error: ', error);
        }        
      }
    }

    getProducts();
    return ()=>{
      source.cancel();
    }
  },[]);

  const Loading=()=>{
    return(
    <>
      Loading...
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250} /> 
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
      <Box sx={{mx:1}}>
        <Skeleton height={450} width={250}/>
      </Box>  
    </>)
  }
  const filterProducts=(filterstring)=>{
    const filteredData = productsData.filter((product)=>{
      return product.category === filterstring;
    })
    setFilter(filteredData);
  }
  const routeChange=(prodId)=>{
    let path = `${prodId}`; 
    navigate(path);
  }

  const ShowProducts=()=>{
    return(
      <ThemeProvider theme={icommerce}>
      <Container sx={{display:'flex', justifyContent:"center", flexDirection:'column', width:'1800px'}}>
        <Container sx={{display:'flex', justifyContent:"center", }}>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', mx:1}} onClick={()=>setFilter(productsData)}>All</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', mx:1}} onClick={()=>filterProducts("men's clothing")}>Men's Clothing</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', mx:1}} onClick={()=>filterProducts("women's clothing")}>Women's Clothing</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', mx:1}} onClick={()=>filterProducts("jewelery")}>Jewelry</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', mx:1}} onClick={()=>filterProducts("electronics")}>Electronic</CustomizedButton>    
        </Container>
          <Grid sx={{ flexGrow: 1, mt:4 }} container spacing={2}>
            <Grid item xs={20}>
              <Grid container  spacing={spacing}>
                {filter.map((product, index)=>{
                  return(
                  <Grid key={index} item>
                    <Card sx={{ maxWidth: 250, height:'100%', display:'flex', alignContent:"center",flexDirection:'column', justifyContent: 'space-between' }}>  
                      <CardMedia
                        component="img"
                        width='100%'
                        height='fit-content'
                        image={product.image}
                        alt={product.title}
                      />
                      <CardContent  sx={{ display:'flex', alignContent:"center",flexDirection:'column', textAlign:'center', }}>
                        <Typography variant="h6"  >
                          {product.title.substring(0,12)}...
                        </Typography>
                        <Typography sx={{py:1}}>
                          price: {product.price}$
                        </Typography>                            
                        <CustomizedButton variant="outlined" sx={{border:'2px solid', py:'5px'}} onClick={()=>routeChange(product.id)}>Buy Me</CustomizedButton>                            
                      </CardContent>
                    </Card>
                  </Grid>
                  )
                })}
              </Grid>
            </Grid> 
          </Grid>      
      </Container>
      </ThemeProvider>
    )
  }

  return (
    // <>
      <Container sx={{py:5, my:5, width: 'xl' }}>
        <Box>
        <Typography variant='h1' sx={{display:'flex', justifyContent:'center'}}>
          Latest Products
        </Typography>
        </Box>
        <Divider />
        <Box sx={{display:'flex', justifyContent:'center', mt:5, width:'100%'}}>
          {loading ? <Loading/> : <ShowProducts/> }
          {/* <ShowProducts/> */}
        </Box>
      </Container>
    //// {/* </> */}
  );
};

export default Products;


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
  }
});

const CustomizedButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.success.main};  
  borderColor: ${theme.palette.success.main};

  :hover {
    background: ${theme.palette.success.main};
    color: ${theme.palette.primary.main};
  }
`,
);