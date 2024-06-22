import React, { useState } from "react";

// Your allBrands array
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

function App() {
  // State to keep track of selected brands
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Function to handle adding a brand to the cart
  const onAddToCartClick = (id) => {
    console.log(`clicked ${id}`); // Log the id of the clicked brand
    // Find the selected item from allBrands using the id
    const selectedItem = allBrands.find((item) => item.id === id);
    // Update the state of selectedBrands
    setSelectedBrands((prevSelectedBrands) => {
      // Check if the item is already in the cart to avoid duplicates
      if (!prevSelectedBrands.some((brand) => brand.id === id)) {
        // If not in the cart, add the selected item to the cart
        return [...prevSelectedBrands, selectedItem];
      }
      // If already in the cart, return the previous state unchanged
      return prevSelectedBrands;
    });
  };

  return (
    <div>
      {/* Title for the brand list */}
      <p>Add brand to the cart</p>
      {/* Map over allBrands to render each brand with a button */}
      {allBrands.map((brand) => (
        // Each brand is wrapped in a div with a unique key
        <div key={brand.id}>
          {/* Display the brand name */}
          <span>{brand.brandName}</span>
          {/* Button to add the brand to the cart */}
          <button onClick={() => onAddToCartClick(brand.id)}>Add to cart</button>
        </div>
      ))}
      <div>
        {/* Title for the cart */}
        <p>Your cart</p>
        {/* List of selected brands */}
        <ul>
          {selectedBrands.map((brand) => (
            // Each selected brand is displayed in a list item with a unique key
            <li key={brand.id}>{brand.brandName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
