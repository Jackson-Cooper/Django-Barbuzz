import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarSearch from './components/BarSearch';
import AuthForm from './components/AuthForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<BarSearch />} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/register" element={<AuthForm mode="register" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
