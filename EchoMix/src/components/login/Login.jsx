// src/App.jsx
import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Navbar from'../song/Navbar.jsx';
const appStyles = {
  minHeight: '100vh',
  //backgroundColor: '#f3f4f6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Login = () => {
  return (
    <div style={appStyles}>
        <Navbar></Navbar>
     <br/><br/><br/><br/>
      <LoginForm />
    </div>
  );
};

export default Login;
