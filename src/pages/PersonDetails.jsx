import React from 'react';
import { useParams } from 'react-router-dom';

function PersonDetails(props) {
    const { id } = useParams(); // Get id de l'URL
    const personId = parseInt(id); 

    const person = props.people.find(p => p.id === personId); // Cherche sur l'id

    return (
        <div>
            <h2>Personne Details</h2>
            {person ? (
                <div>
                    <h3>Name: {person.name}</h3>
                    <p>Age: {person.age} ans</p>
                </div>
            ) : (
                <p>Aucune personne trouvé!</p>
            )}
        </div>
    );
}

export default PersonDetails;
