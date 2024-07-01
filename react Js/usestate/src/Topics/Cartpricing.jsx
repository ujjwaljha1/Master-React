import React, { useState } from 'react';

// Sample data
const allItems = [
  { id: 1, name: 'Item 1', price: 50 },
  { id: 2, name: 'Item 2', price: 100 },
  { id: 3, name: 'Item 3', price: 150 },
  { id: 4, name: 'Item 4', price: 200 },
  { id: 5, name: 'Item 5', price: 250 },
];

function CartPriceRange({ addToCart }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value, 10));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value, 10));
  };

  const filteredItems = allItems.filter(item =>
    item.price >= minPrice && item.price <= maxPrice
  );

  return (
    <div>
      <h1>Price Range Filtering</h1>
      <div>
        <label>
          Min Price: ${minPrice}
          <input
            type="range"
            min="0"
            max="300"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </label>
      </div>
      <div>
        <label>
          Max Price: ${maxPrice}
          <input
            type="range"
            min="0"
            max="300"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </label>
      </div>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPriceRange;
