// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/navbar.css"
import NavRoutes from "../routes/NavRoutes.jsx";


function Navbar() {
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">BLACKNOISE</a>
            <ul className="nav__menu">
                <NavRoutes />
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;