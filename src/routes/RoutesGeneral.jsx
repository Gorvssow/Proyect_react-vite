// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Games from "../Components/./Games.jsx";
import Development from "../Components/Development.jsx";



function RoutesGeneral () {
    return (
        <Routes>
            <Route path="/" exact />
            <Route path="/Games" element={<Games />} />
            <Route path="/Development" element={<Development />} />

        </Routes>
    );
}

export default RoutesGeneral;
