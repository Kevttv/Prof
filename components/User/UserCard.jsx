'use client'
import React from 'react'
import Link from 'next/link'
export default function UserCard({ user }) {
    return (
        <div>
            <div key={user.id}>
                <Link href={`/users/${user.id}`}>
                    <h3>{user.id}. {user.name}</h3>
                </Link>
                <p>{user.last_name}</p>
            </div>
        </div>
    )
}
