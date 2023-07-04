import React, { useState } from "react";
import IngredientManager from "./Ingredients";

const ingredientManager = new IngredientManager();

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      ingredientManager.addIngredient(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter ingredients..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Add Ingredient</button>
    </form>
  );
};

export default SearchBar;
export { ingredientManager };
