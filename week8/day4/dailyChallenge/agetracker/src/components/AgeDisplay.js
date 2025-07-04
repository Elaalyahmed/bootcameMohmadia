import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const age = useSelector((state) => state.age.value);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div>
      <h1>Age: {age}</h1>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default AgeDisplay;
