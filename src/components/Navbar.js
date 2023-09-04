import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Tertra</div>

            <ul className="navbar-nav">
                <li className="nav-item"><Link to='/home' className="nav-link">Home</Link> </li>
                <li className="nav-item"><Link to='/about' className="nav-link" >About</Link></li>
                <li className="nav-item"><Link to='/contact' className="nav-link">contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
