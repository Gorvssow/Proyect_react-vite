// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Profesores from "../Components/Profesores.jsx";
import Grupos from "../Components/Grupos.jsx";


function RoutesGeneral () {
    return (
        <Routes>
            <Route path="/" exact />
            <Route path="/Profesores" element={<Profesores />} />
            <Route path="/Grupos" element={<Grupos />} />
        </Routes>
    );
}

export default RoutesGeneral;
