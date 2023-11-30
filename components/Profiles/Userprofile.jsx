'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const router = useRouter()

    useEffect(() => {
        const getUserInfo = async () => {
            const token = Cookies.get('token');
            const userId = Cookies.get('userId')

            if (token) {
                try {
                    const response = await axios.get(`https://adso-lookstyle.onrender.com/api/v1/users/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to fetch user info', error);
                }
            }
        };

        getUserInfo();

    }, []);
    const logout = () => {
        Cookies.remove('token');
        Cookies.remove('userId');
        setUser(null);
        router.push('/'); // navigate to the home page
    };
    // console.log(user.data)

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.data.name}</h1>
                    <p>{user.data.last_name}</p>
                    {/* Display other user info */}
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <p>No user logged in</p>
            )}
        </div>
    );
}