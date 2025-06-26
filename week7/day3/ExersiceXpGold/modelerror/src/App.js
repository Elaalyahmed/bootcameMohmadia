import React from "react";
import ErrorBoundary from "./components/ErrorBoundary"; 

export default function App() {
  return (
    <div>
      <h1>Error Modal Example</h1>
      <ErrorBoundary>
        {(triggerError) => (
          <button onClick={triggerError}>Click to trigger error</button>
        )}
      </ErrorBoundary>
    </div>
  );
}
