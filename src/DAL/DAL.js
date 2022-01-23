import axios from 'axios';

const getProductsData =(source)=>{
  const products =  axios.get(`https://fakestoreapi.com/products/`,{
    cancelToken: source.token,
  });
  return products;
}

const getProductDetailsData =(source, id)=>{
  const productDetails =  axios.get(`https://fakestoreapi.com/products/${id}`,{
    cancelToken: source.token,
  });
  return productDetails;
}


export {
  getProductsData,
  getProductDetailsData,
};