import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../app/actions';

const PersonForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification pour s'assurer que l'âge est bien un nombre et le nom est renseigné
        if (name && !isNaN(age) && age.trim() !== '') {
            const newPerson = {
                id: Date.now(), // utilisation de Date.now() pour générer un id unique
                name: name.trim(),
                age: parseInt(age, 10),
            };
            dispatch(addPerson(newPerson)); // Envoyer un objet complet avec un id, nom et âge
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
};

export default PersonForm;