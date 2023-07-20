// eslint-disable-next-line no-unused-vars
import React from 'react';
import localizacionImage from "../img/Location/localizacion.png"
import mongoose from 'mongoose';

function Contact() {

    return (

            <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-400 to-gray-100 max-w-32xl mx-auto bg-white p-32 shadow-md rounded-md flex mt-12">
                <div className="w-1/2 pr-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Contactanos</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Ciudad
                            </label>
                            <div className="mt-1">
                                <input
                                    id="ciudad"
                                    name="ciudad"
                                    type="text"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Correo electrónico
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Mensaje
                            </label>
                            <div className="mt-1">
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                ></textarea>
                            </div>
                        </div>
                        <div>
                            <button
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Enviar mensaje
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src={localizacionImage}
                        className="w-full rounded-md"
                        alt="location"
                    />
                    <div className="text-gray-800 text-lg mt-6">
                        <p>Dirección: Calle Ejemplo, Ciudad, País</p>
                        <p>Teléfono: +1 234 567 890</p>
                        <p>Email: ejemplo@example.com</p>
                    </div>
                </div>
            </div>

    );
}

export default Contact;

