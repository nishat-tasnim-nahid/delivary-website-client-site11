import React from 'react';
import { useRef } from 'react';

const Details = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const numberRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const number = numberRef.current.value;
        const newUser = {name, email,address, number}

        fetch('https://infinite-spire-73417.herokuapp.com/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Collect your information successfully.')
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <br /><br /><br />
            <h2>Fill up with your information</h2>
            <form onSubmit={handleAddUser}>
                <input className="m-2" type="text" ref={nameRef} placeholder='Name' /> <br />
                <input className="mb-2" type="text" ref={emailRef} placeholder='Email' /><br />
                <input className="mb-2" type="text" ref={addressRef} placeholder='Address' /><br />
                <input className="mb-2" type="number" ref={numberRef} placeholder='Number' /><br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Details;