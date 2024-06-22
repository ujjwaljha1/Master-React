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

// Your App component
function App() {
  // Declare a state variable 'search' to keep track of the search input value.
  // Initialize it to an empty string.
  const [search, setSearch] = useState("");

  // Declare a state variable 'filteredBrands' to keep track of the filtered list of brands.
  // Initialize it with the full list of allBrands.
  const [filteredBrands, setFilteredBrands] = useState(allBrands);

  // Event handler for when the search input changes
  const onSearchChange = (e) => {
    // Get the value from the input field and convert it to lowercase for case-insensitive comparison.
    const searchValue = e.target.value.toLowerCase();

    // Update the 'search' state with the new input value.
    setSearch(searchValue);

    // Filter the list of brands to include only those that match the search query.
    // Convert each brand name to lowercase and check if it includes the search value.
    const filtered = allBrands.filter((brand) =>
      brand.brandName.toLowerCase().includes(searchValue)
    );

    // Update the 'filteredBrands' state with the filtered list of brands.
    setFilteredBrands(filtered);
  };

  // Render the component
  return (
    <div>
      {/* Input field for searching brands. It is controlled by the 'search' state. */}
      <input
        value={search}
        onChange={onSearchChange}
        placeholder="Search a brand"
      />

      {/* List of filtered brands. It maps over the 'filteredBrands' state and renders each brand in a <li> element. */}
      <ul>
        {filteredBrands.map((brand) => (
          // Each <li> element must have a unique 'key' prop, here using the brand's id.
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
