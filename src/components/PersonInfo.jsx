import React, { useEffect, useState, useCallback } from 'react'

function PersonInfo() {
    // const [id, setId] = useState(1);
    const id = 1;
    const [person, setPerson] = useState(null);

    const PersonDetail = useCallback((url) => {
        const fetchOptions = {
            method: "GET",
        }
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON)
                setPerson(dataJSON);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        PersonDetail(url);
    }, [id]);

    return (
        <div>
            {person && (
                <>
                    <div><p>Name: {person.name}</p></div>
                    <div><p>Username: {person.username}</p></div>
                    <div><p>Email: {person.email}</p></div>
                    <div><p>City: {person.address.city}</p></div>
                </>
            )}
        </div>
    )
}

export default PersonInfo;