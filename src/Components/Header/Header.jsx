import React from "react"
import ReactDOM from 'react-dom/client'

function Header() {
    return (
      <header className="navigation-bar">
        <div className="nav-logo">
          <img src="https://hotel-chinzanso-tokyo.com/common/img/logo.svg" alt="Company Logo" className="logo" />
        </div>

        <nav className="navigation-buttons">
            <ul>
                <li><a href="/">Home</a></li>
            </ul>

            <ul>
            <li><a href="/Rooms&Suites">Rooms & Suites</a></li>
            </ul>

            <ul>
            <li><a href="/services">Services</a></li>
            </ul>

            <ul>
            <li><a href="/about">About</a></li>
            </ul>

            <ul>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>

      </header>
    );
  }
  
  export default Header;