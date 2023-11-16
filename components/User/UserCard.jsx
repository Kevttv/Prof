'use client'
// import React from 'react'
// import Link from 'next/link'


import { useState, useEffect } from 'react'


const url = 'https://adso-lookstyle.onrender.com/api/v1/users'

async function getUser() {
    const response = await fetch(url)
    const data = await response.json()

    // console.log(data)

    return data
}
export default function UserCard() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function getData() {
            const result = await getUser()
            setUserData(result.data)
        }
        getData()
    })
    return (

        <div>
            {
                userData.map(user => (
                    <h1 key={user.id}>{user.name}</h1>
                ))
            }
        </div>










        // <div>
        //     <div key={user.id}>
        //         <Link href={`/users/${user.id}`}>
        //             <h3>{user.id}. {user.name}</h3>
        //         </Link>
        //         <p>{user.last_name}</p>
        //     </div>
        // </div>
    )
}
