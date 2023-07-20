// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css'
import Navbar from "./Components/navbar.jsx";
import Footer from "./Components/footer.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Components/Home.jsx";
import Games from "./Components/./Games.jsx";
import Development from "./Components/Development.jsx";
import Contact from "./Components/Contact.jsx";
import Equipment from "./Components/Equipment.jsx";
import VideoBlog from "./Components/VideoBlog.jsx";
import AdminBlog from "./Modules/Admin/Components/AdminBlog.jsx";


function App() {

    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Development" element={<Development />} />
                        <Route path="/Games" element={<Games />} />
                        <Route path="/Equipment" element={<Equipment />}/>
                        <Route path="/Contact" element={<Contact />}/>
                        <Route path="/VideoBlog" element={<VideoBlog />}/>
                        <Route path="/Adminblog" element={<AdminBlog />}/>

                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
