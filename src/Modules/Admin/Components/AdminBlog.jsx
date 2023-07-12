// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function AdminBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [novedades, setNovedades] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleAddNovedad = () => {
        const newNovedad = {
            id: Date.now(),
            title: title,
            content: content,
        };

        setNovedades([...novedades, newNovedad]);
        setTitle("");
        setContent("");
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Agregar nueva novedad</h2>
            <form className="max-w-lg">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Título:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="border border-gray-300 px-4 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                        Contenido:
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        className="border border-gray-300 px-4 py-2 w-full"
                    ></textarea>
                </div>
                <button
                    type="button"
                    onClick={handleAddNovedad}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Agregar
                </button>
            </form>
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

export default AdminBlog;