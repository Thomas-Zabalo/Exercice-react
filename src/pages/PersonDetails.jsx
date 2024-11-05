// pages/PersonDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PersonDetails(props) {
    const { id } = useParams(); // Get the ID from the URL parameters
    const personId = parseInt(id); // Convert the ID to an integer

    const person = props.people.find(p => p.id === personId); // Find the person by ID

    return (
        <div>
            <h2>Person Details</h2>
            {person ? (
                <div>
                    <h3>Name: {person.name}</h3>
                    <p>Age: {person.age} years old</p>
                </div>
            ) : (
                <p>Person not found!</p>
            )}
        </div>
    );
}

export default PersonDetails;
