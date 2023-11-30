'use client'
import Link from 'next/link'
import React from 'react'

export default function UserCard({user}) {
    return (
        <div>
            <div key={user.id}>
                <Link href={`/users/${user.id}`}>
                    <h3>{user.id}. {user.name}</h3>
                </Link>
                <button onClick={() => alert('New function')}>Click</button>
            </div>
        </div>
    )
}
