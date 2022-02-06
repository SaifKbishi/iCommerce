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
import SmallBasket from './components/SmallBasket';
import Register from './components/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/smallBasket" element={<SmallBasket/>} />        
        <Route path="/register" element={<Register/>} />        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

