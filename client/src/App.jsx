// Remove the <Router> wrapper here if it's already in index.js
import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import RegisterForm from './pages/RegisterPageP';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join-provider" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
