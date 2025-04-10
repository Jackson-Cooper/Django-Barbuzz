import React, { useState } from 'react';
import { login, register } from '../services/api';

const AuthForm = ({ mode = 'login' }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'login') {
        await login(formData);
      } else {
        await register(formData);
      }
      // Handle successful auth (redirect, set user context, etc.)
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {mode === 'register' && (
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      )}
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      <button type="submit">
        {mode === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
