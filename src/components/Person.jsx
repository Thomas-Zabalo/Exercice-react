import React, { useState } from 'react';

function Person(props) {
    const [age, setAge] = useState(parseInt(props.age, 10));
    const [nom, setNom] = useState(props.nom)

    function increment() {
        setAge(age + 1);
    }

    function supprimer() {
        props.onDelete();
    }

    function modifier() {
       props.onModif(nom);
    }

    function getModifValue(event) {
        setNom(event.target.value);
    }

    return (
        <div>
            <p>Je m'appelle {props.nom} et j'ai {age} ans (âge initial {props.age} ans)</p>
            <button onClick={increment}>Anniversaire</button>
            <button onClick={supprimer}>Supprimer</button>
            <div>
                <input
                    type="text"
                    value={nom}
                    onChange={getModifValue}
                    placeholder="Nouveau nom"
                />
                <button onClick={modifier}>Modifier</button>
            </div>
        </div>
    );
}

export default Person;
