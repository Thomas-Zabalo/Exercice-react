import React, { useState } from 'react'


function PeopleProvider() {
    const [person, setPerson] = useState([
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
    ]);

    function addPerson() {
        setPeople((prevPeople) => [
            ...prevPeople,
            { id: prevPeople.length + 1, ...person }
        ]);
    };

    return (
        <div>PeopleProvider</div>
    );
};

export default PeopleProvider