import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import About from '../components/About';
import Cart from '../components/Cart';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Products from '../components/Products';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('About renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
it('Cart renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart />, div);
});
it('Contact renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
});
it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});
it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});
it('Product renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Product />, div);
});
it('Products renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Products />, div);
});