const cart=[];

const handleCart=(state = cart, action)=>{
  console.log('state: ',state)
  console.log('cart: ',cart)
  console.log('action: ', action)
  const product = action.payload;
  console.log('product: ', product)
  switch(action.type){
    case 'ADDITEM':
      const exist = state.find((item)=>item.id === product.id);
      if(exist){
        // console.log('exist')
        return state.map((item)=>
        item.id === product.id ? {...item, qty: item.qty + 1} : item);
      }else{
        const product = action.payload;
        return[
          ...state,
          {
            ...product,
            qty:1,
          }
        ]
      }
      break;
    case 'DELITEM':
      const exist1 = state.find((item)=>item.id === product.id);
      if(exist1.qty ===1){
        return state.filter((item)=> item.id !== exist1.id);
      }else{
        return state.map((item)=> item.id === product.id ? {...item, qty: item.qty-1} : item);
      }
      break;
    default:
    return state;
  }
}

export default handleCart;