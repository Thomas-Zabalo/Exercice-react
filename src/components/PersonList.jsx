import React, { useContext } from 'react'
import { PeopleContext } from './PersonProvider';

function PersonList() {
    const { people } = useContext(PeopleContext);
   
    return (
        <div>
            <h2>Person List</h2>
            <ul>
                {people.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default PersonList