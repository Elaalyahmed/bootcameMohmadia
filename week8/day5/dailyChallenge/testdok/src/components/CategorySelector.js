import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../features/tasks/taskSelectors';

const CategorySelector = ({ selectedCategoryId, setSelectedCategoryId }) => {
  const categories = useSelector(selectAllCategories);

  return (
    <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)}>
      <option value="">All</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;