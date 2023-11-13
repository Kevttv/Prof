import UserCard from '@/components/User/UserCard'

import React from 'react'


async function LoadUsers() {
    const res = await fetch('https://adso-lookstyle.onrender.com/api/v1/users')
    const data = await res.json()
    return data.data
}
export default async function Gallery() {
    const users = await LoadUsers()

    return (
        <div>
            {
                users.map(user => (
                    <UserCard user={user} key={user.id} />
                ))
            }
        </div>
    )
}
