import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Listings from './Listings';
import Form from './Form';
import Home from './Home';
import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <Router>
      <header>
        <div class="logo">
            <img src={logo} alt="KIDS@SCHOOL Logo"></img>
            <h1>KIDS@SCHOOL</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/listings">Need Work?</Link></li>
                <li><Link to="/form">Need Help?</Link></li>
            </ul>
        </nav>
      </header>
      <hr class='gap'></hr>
      <Routes>
         <Route path="/form" element={<Form />} />
         <Route path="/listings" element={<Listings />} />
         <Route path="/" element={<Home />} />
      </Routes>
      <footer>
        <div class="footer">
            <img src={logo} alt="KIDS@SCHOOL Logo"></img>
        </div>
        <div class="copyright">
            <p>&copy; 2024 KIDS@SCHOOL</p>
        </div>
    </footer>
    </Router>
);
}

export default App;