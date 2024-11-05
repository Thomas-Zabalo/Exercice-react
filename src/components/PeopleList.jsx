// PeopleList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePerson, updatePerson } from '../app/actions';

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  return (
    <div>
      <h2>Liste des Personnes</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} ans
            <button onClick={() => dispatch(deletePerson(person.id))}>Supprimer</button>
            <button onClick={() => dispatch(updatePerson(person.id))}>Modifier</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
