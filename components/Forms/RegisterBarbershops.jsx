import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterBarbershops() {
    const [role, setRole] = useState(201);
    const [barbershopName, setBarbershopName] = useState("");
    const [chargeName, setChargeName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [info, setInfo] = useState("");
    const [socialNetworks, setSocialNetworks] = useState("");
    const [state, setState] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('role', role)
        formData.append('barbershop_name', barbershopName);
        formData.append('charge_name', chargeName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone_number', phoneNumber);
        formData.append('location', location);
        formData.append('information', info);
        formData.append('social_networks', socialNetworks);
        formData.append('state', state);
        formData.append('profile_photo', profilePhoto);

        try {
            const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/barbershops", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="barbershop_name">Barbershop Name</label>
            <input type="text" id="barbershop_name" value={barbershopName} onChange={(e) => setBarbershopName(e.target.value)} />

            <label htmlFor="charge_name">Charge Name</label>
            <input type="text" id="charge_name" value={chargeName} onChange={(e) => setChargeName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="phone_number">Phone Number</label>
            <input type="text" id="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <label htmlFor="location">Location</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />

            <label htmlFor="info">Info</label>
            <input type="text" id="info" value={info} onChange={(e) => setInfo(e.target.value)} />

            <label htmlFor="social_networks">Social Networks</label>
            <input type="text" id="social_networks" value={socialNetworks} onChange={(e) => setSocialNetworks(e.target.value)} />

            <label htmlFor="state">State</label>
            <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />

            <label htmlFor="profile_photo">Profile Photo</label>
            <input type="file" id="profile_photo" onChange={(e) => setProfilePhoto(e.target.files[0])} />

            <button type="submit">Enviar</button>
        </form>
    );
}
