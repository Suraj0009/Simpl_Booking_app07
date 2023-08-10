import React from 'react';
import Layout from './Layout';
import './index.css'; // Import the index.css file
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage'; // Import the LoginPage component

import { Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
