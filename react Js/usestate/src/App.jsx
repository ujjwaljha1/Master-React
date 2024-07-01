import React, { useState } from 'react';
import './App.css'
import Cart from './Topics/AddtoCart'
import PriceRange from './Topics/PriceRange'
import Searching from './Topics/Searching'
import SliderPriceRange from './Topics/SliderFiltering'
import CartPriceRange from './Topics/Cartpricing';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Searching/>
      <SliderPriceRange/>
      <PriceRange/>
      <CartPriceRange addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  )
}

export default App
