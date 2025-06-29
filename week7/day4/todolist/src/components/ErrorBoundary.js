import React, { Component } from 'react';
import './ErrorBoundary'; // We'll create this CSS file next

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error);
    this.setState({ 
      hasError: true,
      error
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-content">
            <h1>An error has occurred.</h1>
            {process.env.NODE_ENV === 'development' && (
              <div className="error-details">
                <p>{this.state.error.toString()}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;