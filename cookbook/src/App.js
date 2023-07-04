import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";

export default function App() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for: ", searchTerm);
  }
  return (
    <div className="flex">
      <h1 className="text-center">
        Ingredients
      </h1>
      <SearchBar onSearch={handleSearch}/>
    </div>
  );
}

