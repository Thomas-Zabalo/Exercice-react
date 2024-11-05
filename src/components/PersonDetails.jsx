import React, { useState } from 'react';

function PersonDetails() {
    const [person, setPerson] = useState({
        name: 'Cristiano Ronaldo',
        age: 38,
        email: 'cronaldo@vaiportugues.pt',
        country: 'Portugal'
    });

    function handleChange(event) {
        const { name, value } = event.target; 
        setPerson(prevPerson => ({
            ...prevPerson,
            [name]: value 
        }));
    };

    return (
        <div>
            <h2>Person Details</h2>
            <div>
                <input
                    type="text"
                    name="name" 
                    value={person.name}
                    placeholder="Nouveau nom"
                    onChange={handleChange} 
                />
            </div>
            <div>
                <input
                    type="number"
                    name="age" 
                    value={person.age}
                    placeholder="Nouvel âge"
                    onChange={handleChange} 
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={person.email}
                    placeholder="Nouvel email"
                    onChange={handleChange} 
                />
            </div>
            <div>
                <input
                    type="text"
                    name="country"
                    value={person.country}
                    placeholder="Nouvelle ville de résidence"
                    onChange={handleChange} 
                />
            </div>
        </div>
    );
};

export default PersonDetails;
