'use client'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export default function Register() {
    const [role, setRole] = useState(101);
    const [name, setName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [save, setSave] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()

        const Userdata = {
            role: role,
            name: name,
            last_name: last_name,
            email: email,
            password: password,
            phone_number: phone_number,
            save: save
        }
        const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/users", Userdata)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log('ERROR', error.message)
                }
                console.log('ERROR', error.config)
            })
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit} method="post" className='flex flex-col'>
                    <label htmlFor="">Name</label>
                    <input type="text"
                        id='name'
                        value={name}
                        onChange={e => setName(e.target.value)} />

                    <label htmlFor="">Last Name</label>
                    <input type="text"
                        id='last_name'
                        value={last_name}
                        onChange={e => setLastName(e.target.value)} />

                    <label htmlFor="">Email</label>
                    <input type="email"
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="">Password</label>
                    <input type="text"
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <label htmlFor="">Phone Number</label>
                    <input type="number"
                        id='phone_number'
                        value={phone_number}
                        onChange={e => setPhoneNumber(e.target.value)} />

                    <label htmlFor="">save</label>
                    <input type="number"
                        id='save'
                        value={save}
                        onChange={e => setSave(e.target.value)} />

                    <button type="submit">Enviar</button>
                </form>
            </div>

        </>
    )

}
