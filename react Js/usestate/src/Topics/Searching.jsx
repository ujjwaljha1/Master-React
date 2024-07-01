import React, { useState } from 'react';

const allBrands = [
  { id: "1", brandName: "Puma" },
  { id: "2", brandName: "Nike" },
  { id: "3", brandName: "Adidas" },
  { id: "4", brandName: "Reebok" },
  { id: "5", brandName: "Under Armour" },
  { id: "6", brandName: "New Balance" },
  { id: "7", brandName: "Asics" },
  { id: "8", brandName: "Skechers" },
  { id: "9", brandName: "Converse" },
  { id: "10", brandName: "Vans" },
  { id: "11", brandName: "Fila" },
  { id: "12", brandName: "Brooks" },
  { id: "13", brandName: "Saucony" },
  { id: "14", brandName: "Mizuno" },
  { id: "15", brandName: "Salomon" },
  { id: "16", brandName: "Merrell" },
  { id: "17", brandName: "Hoka One One" },
  { id: "18", brandName: "K-Swiss" },
  { id: "19", brandName: "Columbia" },
  { id: "20", brandName: "Lululemon" },
  { id: "21", brandName: "Champion" },
];

export default function Searching() {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredBrands = search
    ? allBrands.filter(brand => 
        brand.brandName.toLowerCase().includes(search.toLowerCase())
      )
    : allBrands;

  return (
    <div>
      <input onChange={handleInputChange} placeholder='Search a brand' />
      <ul>
        {filteredBrands.map(brand => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
  );
}
