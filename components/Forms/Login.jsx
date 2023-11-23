'use client'
import React from 'react'
import { useState } from 'react'

export default function AppLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        const response = await fetch("https://adso-lookstyle.onrender.com/api/v1/auth/authenticate", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            document.cookie = `token=${data.token}; path=/; SameSite=None; Secure`
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Ingresa tu email' value={email} onChange={handleChangeEmail}/>
                <input type="text" placeholder='Ingresa tu contraseña' value={password} onChange={handleChangePassword}/>
                <button type='submit'>Iniciar sesion</button>
            </form>
        </div>
    )
}
