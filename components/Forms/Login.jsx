'use client'
import React, { useState } from "react";
import axios from "axios";



export default function LoginCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = { email: email, password: password };
        const response = await axios.post("https://adso-lookstyle.onrender.com/api/v1/users", userData)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if(error.request) {
                console.log(error.request);            
            }
            else {
                console.log('ERROR', error.message)
            }
            console.log('ERROR', error.config)
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}