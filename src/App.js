import React from 'react';
import './styles.css';

function App() {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = {
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '600px'
  };

  const headerStyle = {
    color: '#ff0000',
    fontSize: '2.5rem',
    marginBottom: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '2rem'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Website Unreachable</h1>
        <p style={paragraphStyle}>
          This website is currently unavailable due to non-payment. Please contact the site administrator for assistance.
        </p>
      </div>
    </div>
  );
}

export default App; 