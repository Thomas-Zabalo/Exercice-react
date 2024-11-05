// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Création d'un slice pour gérer les personnes
const peopleSlice = createSlice({
    name: 'people',
    initialState: [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
    ],
    reducers: {
        deletePerson: (state, action) => {
            return state.filter(person => person.id !== action.payload);
        },
        updateName: (state, action) => {
            const { id, newName } = action.payload;
            const person = state.find(person => person.id === id);
            if (person) {
                person.name = newName;
            }
        },
    },
});

// Exportation des actions générées par le slice
export const { deletePerson, updateName } = peopleSlice.actions;

// Création du store
const store = configureStore({
    reducer: {
        people: peopleSlice.reducer,
    },
});

export default store;