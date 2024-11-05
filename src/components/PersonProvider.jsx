import React, { createContext, useState } from 'react'

const PeopleContext = createContext();

function PersonProvider({ children }) {
    const [people, setPeople] = useState([
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 }
    ]);

    function addPerson(person) {
        setPeople((prevPeople) => [
            ...prevPeople,
            { id: prevPeople.length + 1, ...person },
        ]);
    }

    return (
        <div>
            <PeopleContext.Provider value={{ people, addPerson }}>
                {children}
            </PeopleContext.Provider>
        </div>
    )
}

export { PersonProvider, PeopleContext }