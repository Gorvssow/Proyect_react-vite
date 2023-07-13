// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "./Cards.jsx";


function Equipment() {

    return (
        <div className="mt-8">
            <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-red-500">
                    Equipment Nervo
                </span>
            </div>
            <div className="mt-8">
                <Cards/>
            </div>
        </div>
    )

}

export default Equipment;