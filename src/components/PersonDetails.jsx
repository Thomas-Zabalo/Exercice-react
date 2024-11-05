import React, { useState } from 'react'

function PersonDetails() {
    const [person, setPerson] = useState({
        name: 'Cristiano Ronaldo',
        age: 38,
        email: 'cronaldo@vaiportugues.pt',
        country: 'Portugal'
    });


    return (
        <div>PersonDetails
            <div>
                <input
                    type="text"
                    value={person.name}
                    placeholder="Nouveau nom"
                />
                <button >Modifier</button>
            </div>
            <div>
                <input
                    type="text"
                    value={person.age}
                    placeholder="Nouveau nom"
                />
                <button >Modifier</button>
            </div>
            <div>
                <input
                    type="text"
                    value={person.email}
                    placeholder="Nouveau nom"
                />
                <button >Modifier</button>
            </div>

            <div>
                <input
                    type="text"
                    value={person.country}
                    placeholder="Nouveau nom"
                />
                <button >Modifier</button>
            </div>
        </div>
    )
}

export default PersonDetails