import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer/>
    </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;



{/* <header className="App-header">

  <a className="App-link" href="https://www.youtube.com/watch?v=SSXA2XluIBU" target="_blank" rel="noopener noreferrer">Ecommerce App using React JS and Redux with Fetch API 2021 | React JS Project for Beginners</a><br/>
  <a className="App-link" href="https://www.youtube.com/watch?v=y66RgYMAgSo&t=1s" target="_blank" rel="noopener noreferrer">React Node.js E-Commerce App Full Tutorial (REDUX - Stripe - JWT ) - MERN Stack Shopping App</a><br/>
  <a className="App-link" href="https://www.youtube.com/watch?v=c1xTDSIXit8" target="_blank" rel="noopener noreferrer">React E-Commerce App Design Tutorial | React Shopping Cart UI Design</a><br/>
  <p><br/><br/>
  https://fakestoreapi.com/<br/>
  https://www.fakeshop-api.com/<br/>
  https://dummyproducts-api.herokuapp.com/<br/>
  https://mui.com/getting-started/installation/<br/>
  https://www.pluralsight.com/guides/installing-and-using-material-ui-with-react<br/>
  </p>
</header> 
"start": "react-scripts start",
*/}