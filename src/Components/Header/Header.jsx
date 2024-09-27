import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'

function Header() {
    return (
      <header className="navigation-bar">
        <div className="nav-logo">
          <img src="https://seeklogo.com/images/M/marco-polo-hotels-logo-FB528D43C8-seeklogo.com.png" alt="Company-Logo" className="logo" /> 
        </div>

        <div>
            <ul className="navigation-buttons">
              <li><a href="/">Home</a></li>
              <li><a href="/Rooms&Suites">Rooms & Suites</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li className="book-button" ><a href="booking">Book now</a></li>
            </ul>
        </div>
        
      </header>
    );
  }
  
  export default Header;