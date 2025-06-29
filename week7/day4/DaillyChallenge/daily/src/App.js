import React, { useState, useEffect } from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(true);

  // Fetch initial message from server
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hello');
        if (!response.ok) throw new Error('Server not responding');
        const data = await response.json();
        setServerMessage(data.message);
      } catch (err) {
        console.error('Error fetching message:', err);
        setError('Failed to connect to server. Please make sure it is running.');
      }
    };
    fetchMessage();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValue }),
      });
      const data = await response.json();
      setResponseMessage(data.message);
      setInputValue(''); // Clear input after submission
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message to server');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <p >{serverMessage}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <h2>Post to Server:</h2>
      <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
         
          style={{ padding: '8px', width: '200px', marginRight: '10px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '8px 15px', backgroundColor: 'black', color: 'white', border: 'none' }}
        >
          Submit
        </button>
      </form>
      
      {responseMessage && (
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '15px',
          borderRadius: '4px',
          borderLeft: '4px solid #4CAF50',
          marginTop: '20px'
        }}>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;