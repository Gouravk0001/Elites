// src/components/LoginForm.jsx
import React, { useState } from 'react';

const containerStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '300px',
  margin: '20px auto',
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const inputGroupStyles = {
  marginBottom: '15px',
};

const labelStyles = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '0.9rem',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '1rem',
};

const errorStyles = {
  color: 'red',
  fontSize: '0.9rem',
  marginBottom: '10px',
};

const buttonStyles = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#2a9d8f',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '10px',
};

const linkContainerStyles = {
  marginTop: '10px',
  textAlign: 'center',
};

const linkStyles = {
  fontSize: '0.9rem',
  color: '#2a9d8f',
  textDecoration: 'none',
  margin: '0 5px',
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    console.log('Logging in with', email, password);
    setError('');
  };

  return (
    <div style={containerStyles}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Log In</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={inputGroupStyles}>
          <label htmlFor="email" style={labelStyles}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyles}
          />
        </div>
        <div style={inputGroupStyles}>
          <label htmlFor="password" style={labelStyles}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={inputStyles}
          />
        </div>
        {error && <p style={errorStyles}>{error}</p>}
        <button type="submit" style={buttonStyles}>Log In</button>
      </form>
      <div style={linkContainerStyles}>
        <a href="#" style={linkStyles}>Forgot Password?</a>
        <a href="#" style={linkStyles}>Sign Up</a>
      </div>
    </div>
  );
};

export default LoginForm;
