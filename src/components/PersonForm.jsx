import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../app/actions';

function PersonForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && !isNaN(age) && age.trim() !== '') {
            const newPerson = {
                id: Date.now(),
                name: name.trim(),
                age: parseInt(age, 10),
            };
            dispatch(addPerson(newPerson));
            setName('');
            setAge('');
        } else {
            alert("Veuillez entrer un nom et un âge valide");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Âge"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit">Ajouter Personne</button>
        </form>
    );
}

export default PersonForm;
