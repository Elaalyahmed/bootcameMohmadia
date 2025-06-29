import React, { useState } from 'react';

function DisplayNumbersCalculator() {
  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(62);
  const [displayNumbers, setDisplayNumbers] = useState(false);

  const handleButtonClick = () => {
    setDisplayNumbers(true);
  };

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '300px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Adding Two Numbers</h2>
      
      <div style={{ margin: '20px 0' }}>
        <input
          type="number"
          value={num1}
          onChange={(e) => {
            setNum1(Number(e.target.value));
            setDisplayNumbers(false);
          }}
          style={{
            fontSize: '24px',
            width: '80px',
            textAlign: 'center',
            padding: '5px',
            border: '2px solid #090d7d',
            borderRadius: '5px'
          }}
        />
      </div>
      
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#090d7d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px 0'
        }}
      >
        Add Them!
      </button>
      
      <div style={{ margin: '20px 0' }}>
        <input
          type="number"
          value={num2}
          onChange={(e) => {
            setNum2(Number(e.target.value));
            setDisplayNumbers(false);
          }}
          style={{
            fontSize: '24px',
            width: '80px',
            textAlign: 'center',
            padding: '5px',
            border: '2px solid #090d7d',
            borderRadius: '5px'
          }}
        />
      </div>
      
      {displayNumbers && (
        <div style={{
          fontSize: '24px',
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#e8f5e9',
          borderRadius: '5px'
        }}>
           {num1}{num2}
        </div>
      )}
    </div>
  );
}

export default DisplayNumbersCalculator;