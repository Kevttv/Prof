'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
// import Link from 'next/link'
import Cookies from 'js-cookie'

export default function AppLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        // console.log(email)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        // console.log(password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/auth/authenticate", {
                email: email,
                password: password,
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = response.data
            console.log(data)
            Cookies.set('token', data.token, { sameSite: 'None', secure: true })
            setTimeout(() => {
                router.push('/')
            }, 1000)



            // Comprobar el rol
            switch (data.role) {
                case 101:
                    console.log("El usuario es un cliente");
                    router.push('/')
                    break;
                case 201:
                    console.log("El usuario es un barbero");
                    router.push('/dashboard')
                    break;
                case 301:
                    console.log("El usuario es un administrador");
                    router.push('/')

                    break;
                default:
                    console.log("Rol desconocido");
            }

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChangeEmail}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChangePassword}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                        type="submit"
                    >
                        Iniciar Sesión
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4 sm:mt-0" href="#">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </form>
        </div>
    )
}
