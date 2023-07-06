// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";



function NavRoutes() {
    return (
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
            <li style={{ marginRight: "10px" }}>
                <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: "10px" }}>
                <Link to="/Profesores">Profesores</Link>
            </li>
            <li style={{ marginRight: "10px" }}>
                <Link to="/Grupos">Grupos</Link>
            </li>
        </ul>
    );
}
export default NavRoutes;

