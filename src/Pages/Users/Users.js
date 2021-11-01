import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    // delete function
    const handleDeleteUser = id => {
       const procced = window.confirm('Are you sure, delete this information');
       if(procced){
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete your information successfully.')
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })
       }
    }

    return (
        <div>
            <br /> <br /> <br />
            <h2>All Users : {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>
                        <b>Name:</b> {user.name},
                        <b>Email:</b> {user.email},
                        <b>Address:</b> {user.address},
                        <b>Number:</b> {user.number}
                        <Link to={`/users/reset/${user._id}`}><button className='ms-2 mt-2 border border-success border-2 rounded'>Reset</button></Link>
                        <button className='ms-2 mt-2 border border-danger border-2 rounded' onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;