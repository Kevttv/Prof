'use client'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function ViewBarbershop() {
    const [barbershops, setBarbershops] = useState([]);

    useEffect(() => {
        axios.get('https://adso-lookstyle.onrender.com/api/v1/barbershops')
            .then(response => {
                setBarbershops(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Hubo un error al obtener los datos: ', error);
            });
    }, []);

    return (
        <div>
               
        </div>
    );
}
