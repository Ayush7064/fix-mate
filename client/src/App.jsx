// Remove the <Router> wrapper here if it's already in index.js
import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import RegisterForm from './pages/RegisterPageP';
import LoginForm from './pages/LoginPageU';
import ServicePage from "./pages/ServicePage";
import Footer from './components/Footer';
import ProviderProfilePage from './pages/ProviderProfilePage';
import BookingDetailsPage from './pages/BookingDetailsPage';
import BookingsPageDashBoard from './pages/BookingsPageDashBoard';




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join-provider" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/profile" element={<ProviderProfilePage/>} />
        <Route path='/booking' element={<BookingDetailsPage/>} />
        <Route path='/dashboard' element={<BookingsPageDashBoard/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
