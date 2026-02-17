import React from 'react'
import { FaBlog, FaHome, FaPlusSquare, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onLogout }) => {
    const user = JSON.parse(localStorage.getItem("authData"));

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <FaBlog className="logo-icon" />
                <span className="logo-text">BlogPost</span>
            </div>

            <div className="navbar-links">
                <NavLink to="/dashboard" className="nav-item">
                    <FaHome className="nav-icon" /> Home
                </NavLink>

                <NavLink to="/creat-post" className="nav-item">
                    <FaPlusSquare className="nav-icon" /> Ctreate post
                </NavLink>

                <NavLink to="/analytics" className="nav-item">
                    <FaPlusSquare className="nav-icon" /> Analytics
                </NavLink>
            </div>

            <div className="navbar-actions">
                <span className="user-name">Hi, {user.name}</span>

                <button className="logout-btn" onClick={onLogout}>
                    <FaSignOutAlt  /> Logout
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
