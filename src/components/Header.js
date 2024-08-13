import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="header-title">
        <h1>OUR OJT EXPERIENCE</h1>
      </div>
      <div className="main-page-link">
        <Link to="/">OJT Batch 8 (St. Clare College)</Link> {/* Ensure this path is correct */}
      </div>
    </header>
  );
};

export default Header;
