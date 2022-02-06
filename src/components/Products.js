import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Box, Typography, Divider,Button,Grid } from '@mui/material/';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import {useNavigate} from 'react-router-dom';

const {getProductsData} = require('../DAL/DAL');

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
        const products = await getProductsData(source);

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
    <Box sx={{display:'flex', justifyContent:"center", flexWrap: 'wrap',flexDirection:{xs:'column', sm:'row'} }}>
      <Box sx={{mx:1}}>
        <Typography> Loading...</Typography>
      </Box>  
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
    </Box>)
  }
  const filterProducts=(filterstring)=>{
    const filteredData = productsData.filter((product)=>{
      return product.category === filterstring;
    })
    setFilter(filteredData);
  }
  const routeChange=(prodId)=>{
    let path = `/products/${prodId}`; 
    navigate(path);
    // history.push(path);
  }

  const ShowProducts=()=>{
    return(
      <ThemeProvider theme={icommerce}>
      <Container maxWidth={false} sx={{display:'flex', justifyContent:"center", flexDirection:'column', width:'1800px'}}>
        <Container maxWidth={false} sx={{display:'flex', justifyContent:"space-around", flexWrap: 'wrap'}}>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>setFilter(productsData)}>All</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("men's clothing")}>Men's Clothing</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("women's clothing")}>Women's Clothing</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("jewelery")}>Jewelry</CustomizedButton>
          <CustomizedButton variant="outlined" sx={{border:'1px solid #afd275', m:0.5}} onClick={()=>filterProducts("electronics")}>Electronic</CustomizedButton>    
        </Container>
          <Grid sx={{ flexGrow: 1, mt:4 }} container spacing={2}>
            <Grid item xs={20}>
              <Grid container  spacing={spacing} justifyContent='center'>
                {filter.map((product, index)=>{
                  return(
                  <Grid key={index} item sx={{width: 250, flexWrap: 'wrap', justifyContent:'center' }}>
                    <Card sx={{ maxWidth: 250, height:'100%', display:'flex', alignContent:"center",flexDirection:'column', justifyContent: 'space-between',alignItems:'center', }}>  
                      <CardMedia sx={{display:'flex',alignItems:'center',objectFit:'contain' }}
                        component="img"
                        // width='100%'
                        height='200px'//'fill'//'fit-content'
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
                        <CustomizedButton variant="outlined" sx={{border:'2px solid', py:'5px'}} onClick={()=>routeChange(product.id)} data-testid="buy-me">Buy Me</CustomizedButton>                            
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
        <ThemeProvider theme={typoTheme}>
        <Typography variant='h1' sx={{display:'flex', justifyContent:'center'}}>
          Latest Products
        </Typography>
        </ThemeProvider >
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

let typoTheme = createTheme();
// typoTheme = responsiveFontSizes(typoTheme);

typoTheme.typography.h1 = {
  fontSize: '2.2rem',
  '@media (min-width:380px)': {
    fontSize: '2.5rem',
  },
  [typoTheme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};