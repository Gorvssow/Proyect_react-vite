// eslint-disable-next-line no-unused-vars
import React from "react";

// Datos de las novedades
const novedades = [
    { id: 1, title: "Título de la novedad 1", content: "Contenido de la novedad 1" },
    { id: 2, title: "Título de la novedad 2", content: "Contenido de la novedad 2" },
    // ... otras novedades
];

function Blog() {
    return (
        <div>
            <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-red-500">
                   BLOGGER
                </span>
            </div>
            <h2 className="text-2xl font-bold mt-8">Novedades agregadas:</h2>
            <ul>
                {novedades.map((novedad) => (
                    <li key={novedad.id} className="mt-4">
                        <h3 className="text-xl font-bold">{novedad.title}</h3>
                        <p>{novedad.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;