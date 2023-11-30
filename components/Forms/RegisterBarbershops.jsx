'use client'
import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function RegisterBarbershops() {
    const [role, setRole] = useState(201);
    const [barbershopName, setBarbershopName] = useState("")
    const [chargeName, setChargeName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [info, setInfo] = useState("")
    const [socialNetworks, setSocialNetworks] = useState("")
    const [state, setState] = useState("")
    // const [photoProfile, setPhotoProfile] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        const BarbershopData = {
            role: role,
            barbershop_name: barbershopName,
            charge_name: chargeName,
            email: email,
            password: password,
            phone_number: phone_number,
            location : location,
            information : info,
            social_networks : socialNetworks,
            state : state,
            // photo_profile : photoProfile
        }
        const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/barbershops", BarbershopData)
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
            <form action="" method="post" className='flex flex-col'>
                <label htmlFor="">Barbershop Name</label>
                <input type="text"
                    id='barbershop_name'
                    value={barbershopName}
                    onChange={e => setBarbershopName(e.target.value)} />

                <label htmlFor="">Charge Name</label>
                <input type="text"
                    id='charge_name'
                    value={chargeName}
                    onChange={e => setChargeName(e.target.value)} />

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
                <input type="text"
                    id='phone_number'
                    value={phone_number}
                    onChange={e => setPhoneNumber(e.target.value)} />

                <label htmlFor="">Location</label>
                <input type="text"
                    id='location'
                    value={location}
                    onChange={e => setLocation(e.target.value)} />

                <label htmlFor="">Info</label>
                <input type="text"
                    id='info'
                    value={info}
                    onChange={e => setInfo(e.target.value)} />

                <label htmlFor="">Social Networks</label>
                <input type="text"
                    id='social_networks'
                    value={socialNetworks}
                    onChange={e => setSocialNetworks(e.target.value)} />

                <label htmlFor="">state</label>
                <input type="text"
                    id='state'
                    value={state}
                    onChange={e => setState(e.target.value)} />

                {/* <label htmlFor="">profile_photo</label>
                <input type="file"
                    id='profile_photo'
                    value={photoProfile}
                    onChange={e => setPhotoProfile(e.target.files[0])} /> */}

                <button onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    )
}

