import React, { useState } from 'react';

// Sample data
const allItems = [
  { id: 1, name: 'Item 1', price: 50 },
  { id: 2, name: 'Item 2', price: 100 },
  { id: 3, name: 'Item 3', price: 150 },
  { id: 4, name: 'Item 4', price: 200 },
  { id: 5, name: 'Item 5', price: 250 },
];

function PriceRange() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const filteredItems = allItems.filter(item => {
    const min = minPrice === '' ? 0 : parseInt(minPrice, 10);
    const max = maxPrice === '' ? Infinity : parseInt(maxPrice, 10);
    return item.price >= min && item.price <= max;
  });

  return (
    <div>
      <h1>Price Range Filtering</h1>
      <div>
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={handleMinPriceChange} placeholder="Min price" />
        </label>
      </div>
      <div>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder="Max price" />
        </label>
      </div>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default PriceRange;
