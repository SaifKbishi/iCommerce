import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import About from '../components/About';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Products from '../components/Products';
import SmallBasket from '../components/SmallBasket';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
it('About renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><About /></Provider>, div);
});

it('Cart renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter >
    <Routes>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </BrowserRouter >
    </Provider>, div);
});
it('Contact renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});
it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
         <Route element={<Home />}/>
        </Routes>
      </BrowserRouter >
    </Provider>, div);
});
it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route element={<Navbar />}/>
        </Routes>
      </BrowserRouter >
    </Provider>, div);
});
it('Product renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter ><Routes>
        <Route element={<Product />}/>
      </Routes></BrowserRouter >
    </Provider>, div);
});
it('Products renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter >
    <Routes>
      <Route element={<Products />} />      
    </Routes>
    </BrowserRouter >
  </Provider>, div);
});
it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter >
      <Routes>
        <Route element={<Footer />}/>
      </Routes>
    </BrowserRouter >
  , div);
});
it('Checkout renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Checkout /></Provider>, div);
});
it('SmallBasket renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><SmallBasket /></Provider>, div);
});
