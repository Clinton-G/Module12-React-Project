import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNavigation = ({ categories }) => {
  return (
    <div className="category-navigation">
      <h3>Categories</h3>
      {categories.map((category) => (
        <Link key={category} to={`/category/${category}`}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavigation;
