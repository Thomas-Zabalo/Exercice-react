// reducers.js
import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from './actions';

const initialState = {
    people: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                people: [...state.people, action.payload], // Adds a new person
            };
        case DELETE_PERSON:
            return {
                ...state,
                people: state.people.filter((person) => person.id !== action.payload), // Deletes by ID
            };
        case UPDATE_PERSON:
            return {
                ...state,
                people: state.people.map((person) =>
                    person.id === action.payload.id
                        ? { ...person, name: action.payload.newName, age: action.payload.newAge } // Updates name and age
                        : person
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
