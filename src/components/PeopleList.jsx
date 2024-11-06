import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePerson, updatePerson } from '../app/actions';

function PeopleList() {
    const dispatch = useDispatch();
    const people = useSelector((state) => state.people);

    // États pour la modification
    const [isEditing, setIsEditing] = useState(null);
    const [editName, setEditName] = useState('');
    const [editAge, setEditAge] = useState('');

    const handleEdit = (person) => {
        setIsEditing(person.id); // Active le mode édition pour cette personne
        setEditName(person.name); // Pré-remplit le champ nom avec la valeur actuelle
        setEditAge(person.age.toString()); // Pré-remplit l'âge (converti en chaîne pour l'input)
    };

    const handleUpdate = (id) => {
        // Vérifie si les champs sont valides avant de mettre à jour
        if (editName.trim() && !isNaN(editAge) && editAge.trim() !== '') {
            dispatch(updatePerson(id, editName.trim(), parseInt(editAge, 10))); // Envoie les données mises à jour
            setIsEditing(null); // Désactive le mode édition
            setEditName(''); // Réinitialise les champs
            setEditAge('');
        } else {
            alert("Veuillez entrer un nom et un âge valides");
        }
    };

    return (
        <div>
            <h2>Liste des Personnes</h2>
            {people.map((person) => (
                <div key={person.id}>
                    {isEditing === person.id ? (
                        // Mode édition pour cette personne
                        <div>
                            <input
                                type="text"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                placeholder="Nom"
                            />
                            <input
                                type="number"
                                value={editAge}
                                onChange={(e) => setEditAge(e.target.value)}
                                placeholder="Âge"
                            />
                            <button onClick={() => handleUpdate(person.id)}>Sauvegarder</button>
                            <button onClick={() => setIsEditing(null)}>Annuler</button>
                        </div>
                    ) : (
                        // Mode affichage normal
                        <div>
                            <p>{person.name} (Âge: {person.age})</p>
                            <button onClick={() => dispatch(deletePerson(person.id))}>Supprimer</button>
                            <button onClick={() => handleEdit(person)}>Modifier</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PeopleList;
