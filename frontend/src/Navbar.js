import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './images/logo_leave.png';

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setIsNavbarCollapsed(true)}>
          <img src={logo} alt="Logo" className="logo" />
          <div className="brand-text">
            <div className="brand-name mb-3">VIKAH RUBBERS</div>
            {/* <div className="brand-subtext">PVT LTD</div> */}
          </div>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link nav-hover" onClick={() => setIsNavbarCollapsed(true)}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link nav-hover" onClick={() => setIsNavbarCollapsed(true)}>
                About us
              </Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle nav-hover"
                href="#products"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/CrumbRubber" onClick={() => setIsNavbarCollapsed(true)}>
                    Crumb Rubber
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Epdm" onClick={() => setIsNavbarCollapsed(true)}>
                    EPDM Granules
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/TyreWire" onClick={() => setIsNavbarCollapsed(true)}>
                    Tyre Wire
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link nav-hover" to="/AskUs" onClick={() => setIsNavbarCollapsed(true)}>
                AskUs Form
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link nav-hover" to="/ContactUs" onClick={() => setIsNavbarCollapsed(true)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
