'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function ViewBarbershop() {
    const [barbershops, setBarbershops] = useState([]);
    // const router = useRouter()

    useEffect(() => {
        axios.get('https://adso-lookstyle.onrender.com/api/v1/barbershops')
            .then(response => {
                console.log(response.data)
                setBarbershops(response.data.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    return (
        <div className='flex gap-9'>
            {
                barbershops.map((barbershop, index) => (
                    <div key={index} className='h-20 w-auto bg-gray-700 flex flex-wrap'>
                        <h1>{barbershop.barbershop_name}</h1>
                        <p>{barbershop.charge_name}</p>
                        <p>{barbershop.email}</p>
                        {/* <h1>{router.push('/barbershopDetails')}</h1> */}
                        <Link href={`/viewBarbershops/barbershopDetails?id=${barbershop.id}`}>ir a</Link>
                    </div>
                ))
            }
        </div>
    );
}