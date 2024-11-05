// Types d'actions
export const ADD_PERSON = "ADD_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";

// Créateur d'action pour ajouter une personne
export const addPerson = (person) => ({
    type: ADD_PERSON,
    payload: person,
});

// Créateur d'action pour supprimer une personne
export const deletePerson = (id) => ({
    type: DELETE_PERSON,
    payload: id,
});

// Créateur d'action pour mettre à jour une personne
export const updatePerson = (id, updatedPerson) => ({
    type: UPDATE_PERSON,
    payload: { id, updatedPerson },
});
