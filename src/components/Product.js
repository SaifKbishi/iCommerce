import React, {useState, useEffect} from 'react';
import {Container, Box, Typography, Button,Card, CardMedia,CardContent,Rating  } from '@mui/material/';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from "@material-ui/core/styles";
// import {capitalize} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {addCart}  from '../redux/action'

const Product = () => {
  const [rating, setRating] = useState(2);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const styles = useStyles();
  const dispatch = useDispatch();

  const addProduct = (product)=>{
    console.log('addProduct', product)
    dispatch(addCart(product));
  }
    
  useEffect(()=>{
    const source=axios.CancelToken.source();
    const getProductDetails =async ()=>{
      setLoading(true);
      try{
        const prodcutDetails = await axios.get(`https://fakestoreapi.com/products/${params.id}`,{
          cancelToken: source.token,
        });
        setProduct(prodcutDetails.data);
        // console.log('24',prodcutDetails.data)
        setLoading(false);
      }catch(error){
        if(axios.isCancel(error)){
          console.log('caught cancel axios', error);
        }else{
          console.log('there was an error: ', error);
        }   
      }
    }
    getProductDetails();
    return ()=>{
      source.cancel();
    }
  },[]);
  const Loading=()=>{
    return(
    <>
      Loading...
      <Box display='flex' flexDirection='row' justifyContent='center' >
      <Box paddingRight='30px'>      
        <Skeleton height={600} width={500} /> 
      </Box>   
      <Box marginTop='100px'>
        <Skeleton height={50} width={450} /> 
        <Skeleton height={75} /> 
        <Skeleton height={25} width={150} /> 
        <Skeleton height={50}  /> 
        <Skeleton height={150}  />
        <Skeleton height={50} width={450} />  
      </Box>
      </Box>
    </>)
  }

  return (
    <div >
    {loading ? <Loading/> :
      <Container maxWidth={false} className={styles.productContainer}>
        <Card  className={styles.card}>
          <CardMedia 
          className={styles.media}
          component="img"
          image={product.image}
          alt={product.title}
          />
        <CardContent sx={{flexGrow:1, m:2, }}>
          <Typography variant="h5" color="text.secondary" sx={{textTransform: 'uppercase'}}>
            {product.category}
          </Typography>
          <Typography variant="h2" color="text.secondary" >
            {product.title}
          </Typography>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={product.rating && product.rating.rate}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Typography sx={{py:2, fontSize:'40px', fontWeight:'bold'}}>
            $ {product.price}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{my:1}}>
            {product.description}
          </Typography>
          <Box sx={{display:'flex', justifyContent: 'flex-start', alignSelf: 'flex-end', mt:15 }}>
            <Button variant="contained" sx={{mr:1}} onClick={()=>addProduct(product)}>Add to Cart</Button>
            <Button variant="contained" >Go to Cart</Button>
          </Box>
        </CardContent>

        </Card>
      </Container>
      } 
    </div>
  );
};

export default Product;

const useStyles = makeStyles({
  productContainer: {    
    // boxShadow: '0 3px 3px 3px rgba(194, 202, 208,  .3)',
    marginTop:'30px',
    width: '90%'
  },
  card:{
    display: 'flex',
    width: '100%',
    margin: '0px',
    padding: '10px',
  },
  media:{
    height: '500px',     // as an example I am modifying width and height
    width: '60%',
    margin: '5%',
    objectFit: 'contain'

  },
});