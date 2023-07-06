// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css'
import Navbar from "./Components/navbar.jsx";
import Footer from "./Components/footer.jsx";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home.jsx";
import Profesores from "./Components/Profesores.jsx";
import Grupos from "./Components/Grupos.jsx";


function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Grupos" element={<Grupos />} />
                        <Route path="/Profesores" element={<Profesores />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
