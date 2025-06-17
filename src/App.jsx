import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import Toaster

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import PostRequest from './pages/PostRequest.jsx';
import BrowseLawyers from './pages/BrowseLawyers.jsx';
import LawyerRegister from './pages/LawyerRegister.jsx';
import BrowseRequests from './pages/BrowseRequests.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: '#28a745',
              color: 'white',
            },
          },
          error: {
            style: {
              background: '#dc3545',
              color: 'white',
            },
          },
        }}
      />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/browse-lawyers" element={<BrowseLawyers />} />
            <Route path="/post-request" element={<PostRequest />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/browse-requests" element={<BrowseRequests />} />
            <Route path="/lawyer-register" element={<LawyerRegister />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;