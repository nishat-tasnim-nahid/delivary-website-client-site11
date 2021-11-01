import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const ResetUsers = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))

    }, [])
    // reset user info
    const handleNameChange =e =>{
        const resetName = e.target.value;
        const resetUsers = {name: resetName, email: user.email, address: user.address, number: user.number}
        setUser(resetUsers)
    }
    const handleEmailChange = e =>{
        const resetEmail = e.target.value;
        const resetUsers = {name: user.name, email: resetEmail, address: user.address, number: user.number}
        setUser(resetUsers)
    } 
    const handleAddressChange = e =>{
        const resetAddress = e.target.value;
        const resetUsers = {name: user.name, email: user.email, address: resetAddress, number: user.number}
        setUser(resetUsers)
    }
    const handleNumberChange = e =>{
        const resetNumber = e.target.value;
        const resetUsers = {name: user.name, email: user.email, address: user.address, number: resetNumber}
        setUser(resetUsers)
    }

    const handleResetUser = e => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               if(data.modifiedCount>0){
                alert('Successfully reset')
                setUser({})
               }
            })
        e.preventDefault();
    }
    return (
        <div>
            <br /><br /><br />
            <h2>Reset {user.name}'s information</h2>
            
            <form onSubmit={handleResetUser}>
                <input className="m-2" onChange={handleNameChange} type="text" value={user.name || ''} /> <br />
                <input className="mb-2" onChange={handleEmailChange} type="text" value={user.email || ''}/><br />
                <input className="mb-2" onChange={handleAddressChange} type="text" value={user.address || ''} /><br />
                <input className="mb-2" onChange={handleNumberChange} type="number" value={user.number || ''} /><br />
                <input type="submit" value="Reset" />
            </form>
        </div>
    );
};

export default ResetUsers;