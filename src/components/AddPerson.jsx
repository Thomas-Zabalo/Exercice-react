import React, { useContext, useState } from 'react';
import { PeopleContext } from './PersonProvider';

function AddPerson() {
    const { addPerson } = useContext(PeopleContext);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addPerson({ name, age: null }); 
            setName(''); 
        }
    };

    return (
        <div>
            <h2>Add Person</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddPerson