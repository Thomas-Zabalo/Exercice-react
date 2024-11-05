import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';
import PersonDetails from './components/PersonDetails';
import PersonInfo from './components/PersonInfo';

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
  ]);

  function handleDelete(id) {
    setPeople(people.filter(person => person.id !== id));
  }

  function handleModif(id, name) {
    setPeople(
      people.map(person =>
        person.id === id ? { ...person, name: name } : person
      )
    )
  }



  return (
    <div className="App">
      <header className="App-header">
        {people.map(person => (
          <Person
            key={person.id}
            nom={person.name}
            age={person.age}
            onDelete={() => handleDelete(person.id)}
            onModif={(name) => handleModif(person.id, name)}
          />
        ))}

        <PersonDetails />
        <PersonInfo />
      </header>
    </div>
  );
}

export default App;
