import React from 'react';
import { Link } from "react-router-dom";

function Home(props) {
    const people = props.people;

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {people.map(person => (
                    <li key={person.id}>
                        <div className='row'>
                            <div>{person.name} - {person.age} ans</div>
                            <Link to={`/detail/${person.id}`}>Voir details</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
