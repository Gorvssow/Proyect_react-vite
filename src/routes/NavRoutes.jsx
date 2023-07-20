// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";



function NavRoutes() {
    return (
        <ul className="flex list-none p-0">
            <li className="mr-4">
                <Link to="/" className="text-decoration-none">
                    <div className="border border-gray-400 shadow hover:bg-gray-200 flex justify-center items-center p-2 r">
                        <span className="linkStyle">Home</span>
                    </div>
                </Link>
            </li>
            <li className="mr-4">
                <Link to="/Games" className="text-decoration-none">
                    <div className="border border-gray-400 shadow hover:bg-gray-200 flex justify-center items-center p-2">
                        <span className="linkStyle">Games</span>
                    </div>
                </Link>
            </li>
            <li className="mr-4">
                <Link to="/Development" className="text-decoration-none">
                    <div className="border border-gray-400 shadow hover:bg-gray-200 flex justify-center items-center p-2">
                        <span className="linkStyle">Development</span>
                    </div>
                </Link>
            </li>
            <li className="mr-4">
                <Link to="/Equipment" className="text-decoration-none">
                    <div className="border border-gray-400 shadow hover:bg-gray-200 flex justify-center items-center p-2">
                        <span className="linkStyle">Equipment</span>
                    </div>
                </Link>
            </li>
            <li className="mr-4">
                <Link to="/Contact" className="text-decoration-none">
                    <div className="border border-gray-400 shadow hover:bg-gray-200 flex justify-center items-center p-2">
                        <span className="linkStyle">Contact</span>
                    </div>
                </Link>
            </li>
            <li className="mr-4">
                <Link to="/VideoBlog" className="text-decoration-none">
                    <div className="border border-gray-400 shadow hover:bg-gray-200 flex justify-center items-center p-2">
                        <span className="linkStyle">VideoBlog</span>
                    </div>
                </Link>
            </li>
        </ul>
    );
}


export default NavRoutes;

