import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Yes</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
           
              <li className="nav-item">
                <Link className="nav-link" to="/">Register</Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
