import React, { useContext } from 'react';
import { PeopleContext } from './PeopleProvider';

function PersonList() {
    const { people } = useContext(PeopleContext);

    return (
        <div>
            <h2>People List</h2>
            <ul>
                {people.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PersonList;
