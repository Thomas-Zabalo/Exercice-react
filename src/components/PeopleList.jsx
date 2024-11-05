// src/PeopleList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePerson, updatePerson } from '../app/actions';

const PeopleList = () => {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people);

    return (
        <div>
            <h2>Liste des Personnes</h2>
            {people.map((person) => (
                <div key={person.id}>
                    <p>{person.name} (Âge: {person.age})</p>
                    <button onClick={() => dispatch(deletePerson(person.id))}>Supprimer</button>
                    <button onClick={() => dispatch(updatePerson(person.id, 'New Name', person.age + 1))}>
                        Modifier
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PeopleList;