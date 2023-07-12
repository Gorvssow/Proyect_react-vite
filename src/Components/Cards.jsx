// eslint-disable-next-line no-unused-vars
import React from "react";
import ContactImage from '../img/Contacts/Contact_1.png';

function Cards() {
    const contacts = [
        { name: 'YAMIR RODRIGUEZ', role: 'Director Programmer', image: ContactImage },
        { name: 'LEO MARTINEZ', role: 'Level Designer/ Programmer Jr', image: ContactImage },
        { name: 'ALFONSO ROSALES', role: 'Desarrollador WEB', image: ContactImage },
        { name: 'LEO MARTINEZ', role: 'Level Designer/ Programmer Jr', image: ContactImage },
        { name: 'YAMIR RODRIGUEZ', role: 'Director Programmer', image: ContactImage },
        { name: 'LEO MARTINEZ', role: 'Level Designer/ Programmer Jr', image: ContactImage },
        { name: 'YAMIR RODRIGUEZ', role: 'Director Programmer', image: ContactImage },
        { name: 'LEO MARTINEZ', role: 'Level Designer/ Programmer Jr', image: ContactImage },
        { name: 'ALFONSO ROSALES', role: 'Desarrollador WEB', image: ContactImage },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 justify-center">
            {contacts.map((contact, index) => (
                <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden">
                                <img src={contact.image} alt="Avatar" className="object-contain w-full h-full" />
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-semibold">{contact.name}</div>
                                <div className="text-gray-500">{contact.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Cards;