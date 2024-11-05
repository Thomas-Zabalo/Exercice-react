// PersonForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../app/actions';

function PersonForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            id: Date.now(),
            name,
            age: parseInt(age, 10),
        };
        dispatch(addPerson(newPerson));
        setName('');
        setAge('');
    };

    return (
        <div>
            <h2>Ajouter une Personne</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Âge"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default PersonForm;
