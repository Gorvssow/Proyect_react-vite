// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/navbar.css"

function Navbar() {
    return(
        <nav className="nav">
            <a href="#" className="nav__brand">Herdoy</a>
            <ul className="nav__menu">
                <li className="nav__item"><a href="#" className="nav__link">HOME</a></li>
                <li className="nav__item"><a href="#" className="nav__link">ABOUT</a></li>
                <li className="nav__item"><a href="#" className="nav__link">SKILLS</a></li>
                <li className="nav__item"><a href="#" className="nav__link">PORTFOLIO</a></li>
                <li className="nav__item"><a href="#" className="nav__link">CONTACT</a></li>
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;