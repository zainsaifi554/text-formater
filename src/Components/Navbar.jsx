import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // ✅ IMPORT THIS
import { MaterialUISwitch } from './toggleBtn';

export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} border border-${mode === 'dark' ? 'light' : 'dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link> {/* ✅ USE `Link` */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link> {/* ✅ LINK TO HOME */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link> {/* ✅ LINK TO ABOUT */}
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
            <MaterialUISwitch onClick={toggleMode} />
          </form>
        </div>
      </div>
    </nav>
  );
}
