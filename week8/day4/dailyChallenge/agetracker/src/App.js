import React from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Age Tracker</h2>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
};

export default App;
