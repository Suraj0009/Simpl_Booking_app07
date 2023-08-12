// App.jsx
import React from 'react';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext'; // Make sure the path is correct
import AccountPage from './pages/AccountPage';
import axios from 'axios';


axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/bookings" element={<AccountPage />} />
          <Route path="/account/places  " element={<AccountPage />} />        
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
