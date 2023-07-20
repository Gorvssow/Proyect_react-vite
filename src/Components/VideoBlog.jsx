// eslint-disable-next-line no-unused-vars
import React from "react";
import MultimediaPost from './MultimediaPost/Multimedia.jsx';

function VideoBlog() {
    return (
        <div className="mt-8">
            <div className="text-5xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-red-500">
                   Blog
                </span>
        </div>
            <h2 className="text-2xl font-bold mt-8">Novedades NervoStudios</h2>
            <div>

                <MultimediaPost />
            </div>

        </div>
    );
}

export default VideoBlog;