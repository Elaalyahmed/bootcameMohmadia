import React, { useState } from 'react';

function Dataurl() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Your unique Webhook.site URL
  const webhookUrl = 'http://localhost:5001/send-webhook';

  const postData = async () => {
    setLoading(true);
    setSuccess(false);
    setResponse(null);

    try {
      const dataToSend = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      };

      // Log the sending process
      console.log('Initiating POST request to Webhook.site...');
      console.table({
        Process: {
          Domain: "Console",
          Source: "Network",
          Status: "Pending",
          DataSize: `${JSON.stringify(dataToSend).length} bytes`
        }
      });

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.text();

      // Log the response in console
      console.log('Webhook response received:');
      console.table({
        Response: {
          Type: "opane",
          Status: response.status,
          OK: response.ok,
          Size: `${responseData.length} bytes`,
          Timestamp: new Date().toISOString()
        }
      });

      setResponse(responseData);
      setSuccess(true);

    } catch (error) {
      console.error('Error occurred:', error);
      console.table({
        Error: {
          Type: "fetch_error",
          Message: error.message,
          Stack: error.stack.split('\n')[0], // Just first line of stack
          Timestamp: new Date().toISOString()
        }
      });
      setResponse(error.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Webhook.site POST Example</h1>

      <div className="card">
        <button
          onClick={postData}
          disabled={loading}
          className={`post-button ${loading ? 'loading' : ''}`}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Sending Data...
            </>
          ) : (
            'Send Test Data to Webhook'
          )}
        </button>




      </div>



    </div>

  );
}

export default Dataurl;