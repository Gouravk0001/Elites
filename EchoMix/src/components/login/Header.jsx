// src/components/Header.jsx
import React from 'react';

const headerStyles = {
  textAlign: 'center',
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
};

const h1Styles = {
  fontSize: '2.5rem',
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1 style={h1Styles}>My Music Website</h1>
    </header>
  );
};

export default Header;
