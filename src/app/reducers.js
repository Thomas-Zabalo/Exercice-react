// reducers.js

import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from './actions';

// État initial global
const initialState = {
    people: [],
};

// Fonction réductrice
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                people: [...state.people, action.payload],
            };

        case DELETE_PERSON:
            return {
                ...state,
                people: state.people.filter(person => person.id !== action.payload),
            };

        case UPDATE_PERSON:
            return {
                ...state,
                people: state.people.map(person =>
                    person.id === action.payload.id
                        ? { ...person, ...action.payload.updatedPerson }
                        : person
                ),
            };

        default:
            return state;
    }
};

export default rootReducer;
