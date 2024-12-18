import React, { useState, useMemo, useCallback } from 'react';

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredProducts = useMemo(
    () => products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase())),
    [query, products]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products"
        value={query}
        onChange={handleSearchChange}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default SearchBar;
