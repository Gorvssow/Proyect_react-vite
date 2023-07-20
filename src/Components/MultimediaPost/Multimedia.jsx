// eslint-disable-next-line no-unused-vars
import React from 'react';

const MultimediaPost = () => {
    return (
        <div>
            <div style={{ display: 'flex'}}>
                <div style={{ marginRight: '30px' }}>
                    <h2>Video Tutorial 1: Introducción a Redux</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dBiFWQ9ChMw"
                        title="Video Tutorial 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ marginBottom: '20px' }}
                    />
                </div>
                <div>
                    <h2>Video Tutorial 2: Otro Título</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/L89Cy2gnXXs"
                        title="Video Tutorial 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default MultimediaPost;