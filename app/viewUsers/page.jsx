'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function viewUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://adso-lookstyle.onrender.com/api/v1/users')
            .then(response => setUsers(response.data.data))
            .catch(error => {
                console.error('Error fetching data: ', error);
                if (error.response) {
                    console.error('Response status: ', error.response.status);
                    console.error('Response data: ', error.response.data);
                }
            });
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <Link href={`/viewUsers/userDetails/${user.id}`}>
                        <p>{user.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
